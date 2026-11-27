/**
 * @fileoverview Unit tests for the generic SQLite database service.
 */

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import {
  initDatabase,
  getDatabase,
  closeDatabase,
  exec,
  run,
  get,
  all
} from '../src/services/databaseService.js'

describe('databaseService', () => {
  beforeEach(() => {
    initDatabase(':memory:')
    exec(`
      CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        value INTEGER DEFAULT 0
      );
    `)
  })

  afterEach(() => {
    closeDatabase()
  })

  /**
   * Verifies that `initDatabase` and `getDatabase` return the active instance.
   */
  it('initializes an in-memory database and returns the active instance', () => {
    const db = getDatabase()
    expect(db).toBeDefined()
    expect(db.isOpen).toBe(true)
  })

  /**
   * Verifies that `initDatabase` creates parent directories and persists data
   * for file-backed databases.
   */
  it('creates parent directories and persists data for file-backed databases', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sqlite-test-'))
    const dbPath = path.join(tempDir, 'nested', 'test.sqlite')

    try {
      initDatabase(dbPath)
      exec('CREATE TABLE notes (id INTEGER PRIMARY KEY, body TEXT NOT NULL);')
      run('INSERT INTO notes (body) VALUES (?)', 'hello')
      closeDatabase()

      initDatabase(dbPath)
      const row = get('SELECT body FROM notes WHERE id = 1')
      expect(row).toEqual({ body: 'hello' })
    } finally {
      closeDatabase()
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  /**
   * Verifies `run`, `get`, and `all` with parameterized queries.
   */
  it('inserts, queries single rows, and queries multiple rows', () => {
    const insertResult = run('INSERT INTO items (name, value) VALUES (?, ?)', 'alpha', 10)
    expect(insertResult.changes).toBe(1)
    expect(Number(insertResult.lastInsertRowid)).toBe(1)

    run('INSERT INTO items (name, value) VALUES (?, ?)', 'beta', 20)

    const single = get('SELECT id, name, value FROM items WHERE name = ?', 'alpha')
    expect(single).toEqual({ id: 1, name: 'alpha', value: 10 })

    const missing = get('SELECT id, name, value FROM items WHERE name = ?', 'gamma')
    expect(missing).toBeUndefined()

    const rows = all('SELECT name, value FROM items ORDER BY id ASC')
    expect(rows).toEqual([
      { name: 'alpha', value: 10 },
      { name: 'beta', value: 20 }
    ])
  })

  /**
   * Verifies `UPDATE` and `DELETE` via `run`.
   */
  it('updates and deletes rows', () => {
    run('INSERT INTO items (name, value) VALUES (?, ?)', 'alpha', 10)

    const updateResult = run('UPDATE items SET value = ? WHERE name = ?', 99, 'alpha')
    expect(updateResult.changes).toBe(1)
    expect(get('SELECT value FROM items WHERE name = ?', 'alpha')).toEqual({ value: 99 })

    const deleteResult = run('DELETE FROM items WHERE name = ?', 'alpha')
    expect(deleteResult.changes).toBe(1)
    expect(all('SELECT * FROM items')).toEqual([])
  })

  /**
   * Verifies that `closeDatabase` closes the connection and is safe to call repeatedly.
   */
  it('closes the database cleanly', () => {
    const db = getDatabase()
    expect(db.isOpen).toBe(true)

    closeDatabase()
    expect(db.isOpen).toBe(false)

    expect(() => closeDatabase()).not.toThrow()
  })
})

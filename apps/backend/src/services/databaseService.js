/**
 * @fileoverview Simple SQLite database service built on Node's `node:sqlite` module.
 * @module services/databaseService
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DatabaseSync } from 'node:sqlite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Default file path for the SQLite database when no path is provided.
 *
 * @type {string}
 */
const DEFAULT_DB_PATH = path.resolve(__dirname, '../../data/database.sqlite')

/**
 * Active singleton `DatabaseSync` instance.
 *
 * @type {DatabaseSync | null}
 */
let dbInstance = null

/**
 * Opens a SQLite database connection. Closes any existing connection first.
 *
 * @param {string} [dbPath=process.env.DB_PATH || DEFAULT_DB_PATH] - File path for the database, or `':memory:'` for an in-memory database.
 * @returns {DatabaseSync} The initialized `DatabaseSync` instance.
 */
export function initDatabase(dbPath = process.env.DB_PATH || DEFAULT_DB_PATH) {
  if (dbInstance) {
    closeDatabase()
  }

  if (dbPath !== ':memory:') {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  }

  const db = new DatabaseSync(dbPath)
  db.exec('PRAGMA foreign_keys = ON;')

  if (dbPath !== ':memory:') {
    db.exec('PRAGMA journal_mode = WAL;')
  }

  dbInstance = db
  return dbInstance
}

/**
 * Returns the active `DatabaseSync` instance, initializing one with the default
 * path if none is currently open.
 *
 * @returns {DatabaseSync} Active `DatabaseSync` instance.
 */
export function getDatabase() {
  if (!dbInstance) {
    return initDatabase()
  }

  return dbInstance
}

/**
 * Closes the active database connection if one is open.
 *
 * @returns {void}
 */
export function closeDatabase() {
  if (dbInstance) {
    dbInstance.close()
    dbInstance = null
  }
}

/**
 * Executes one or more SQL statements that do not return rows (e.g., `CREATE TABLE`).
 *
 * @param {string} sql - SQL statements to execute.
 * @returns {void}
 */
export function exec(sql) {
  getDatabase().exec(sql)
}

/**
 * Executes a parameterized write query (`INSERT`, `UPDATE`, `DELETE`).
 *
 * @param {string} sql - Parameterized SQL statement.
 * @param {...(string | number | bigint | Uint8Array | null)} params - Bound parameter values.
 * @returns {import('node:sqlite').StatementResultingChanges} Execution metadata including `changes` and `lastInsertRowid`.
 */
export function run(sql, ...params) {
  return getDatabase().prepare(sql).run(...params)
}

/**
 * Executes a parameterized query and returns the first matching row.
 *
 * @param {string} sql - Parameterized SQL `SELECT` statement.
 * @param {...(string | number | bigint | Uint8Array | null)} params - Bound parameter values.
 * @returns {Record<string, unknown> | undefined} First matching row, or `undefined` if none found.
 */
export function get(sql, ...params) {
  return getDatabase().prepare(sql).get(...params)
}

/**
 * Executes a parameterized query and returns all matching rows.
 *
 * @param {string} sql - Parameterized SQL `SELECT` statement.
 * @param {...(string | number | bigint | Uint8Array | null)} params - Bound parameter values.
 * @returns {Record<string, unknown>[]} Array of matching rows.
 */
export function all(sql, ...params) {
  return getDatabase().prepare(sql).all(...params)
}

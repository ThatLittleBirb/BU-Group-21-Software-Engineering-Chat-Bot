import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

describe('Express app', () => {
  it('responds with 404 and CORS header on unknown routes', async () => {
    const res = await request(app).get('/unknown-route')
    expect(res.status).toBe(404)
    expect(res.headers['access-control-allow-origin']).toBe('*')
  })
})

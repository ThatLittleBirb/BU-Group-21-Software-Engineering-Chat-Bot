/**
 * @fileoverview Express application setup and global middleware configuration.
 * @module app
 */

import express from 'express'
import cors from 'cors'

/**
 * Configured Express application instance with JSON parsing and CORS enabled.
 *
 * @type {import('express').Express}
 */
const app = express()

app.use(express.json())
app.use(cors())

export default app

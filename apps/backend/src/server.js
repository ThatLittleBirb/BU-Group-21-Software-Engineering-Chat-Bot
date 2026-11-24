/**
 * @fileoverview HTTP server entry point for the backend application.
 * @module server
 */

import app from './app.js'

/**
 * Port number the backend HTTP server listens on.
 *
 * @type {number}
 */
const PORT = 3001

/**
 * Starts the Express server on the configured port.
 */
app.listen(PORT, () => {
    console.log('The backend is runnining on http://localhost:' + PORT)
})
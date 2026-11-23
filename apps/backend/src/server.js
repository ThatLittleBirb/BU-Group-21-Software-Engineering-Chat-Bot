import app from './app.js'

const PORT = 3001

app.listen(PORT, () => {
    console.log('The backend is runnining on http://localhost:' + PORT)
})
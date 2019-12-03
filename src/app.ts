import * as express from 'express'

const app = express()
const port = 3000
app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	return console.log(`Salesfy Challenge Backend is listening on ${port}`)
})
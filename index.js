const express = require("express")

const app = express()

app.get('/', (req,res) => {
  return res.send("Hello World")
})

const port = process.env.NODE_ENV || 3000
app.listen(port, function () {
  console.log("Server starting on http://localhost:" + port)
})
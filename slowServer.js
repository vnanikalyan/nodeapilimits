const express = require("express")
const app = express()

let cnt = 0;

app.get("/slowrequest", (req, res) => {
  console.log('In slow server - ', ++cnt);
  setTimeout(() => res.json({ message: "sry i was late" }), 10000) //setTimeout is used to mock a network delay of 10 seconds
})

app.listen(5000, () => console.log("listening on port 5000"))
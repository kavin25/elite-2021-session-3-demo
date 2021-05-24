const express = require("express");

const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.get("/hello", (req, res) => {
    res.send("Hello World")
})

app.post("/form", (req, res) => {
    res.send(`Hello ${req.body.name} of Class ${req.body.class}-${req.body.section} (${req.body.email})!`)
})

app.get("/users", (req, res) => {
    res.json([
        {
          name: "Kavin Desi Valli",
          gh: "kavin25",
        },
        {
          name: "Angad Singh",
          gh: "dotangad",
        },
        {
          name: "Somesh Kar",
          gh: "someshkar",
        },
        {
          name: "Saksham Raheja",
          gh: "hashsaksham",
        },
      ])
})

// app.get("/hello2", (req, res) => {
//     res.send("Hello from 2");
// })

app.listen(8000, () => console.log('Server running'))
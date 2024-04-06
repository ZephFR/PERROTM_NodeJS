const express = require("express")
const app = express();
const port = 3000;

let users = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
    },
    {
        id: 2,
        firstname: "Bob",
        lastname: "Juan",
    },
    {
        id: 3,
        firstname: "Pablo",
        lastname: "Samuel",
    },
    {
        id: 4,
        firstname: "Jack",
        lastname: "Jacques",
    },
];

app.get("/users", (req, res) => {
    res.send("Hello World");
});

app.get("/users/:id", (req, res) => {
    res.send("Hello World!");
});

app.post("/users", (req, res) => {
    res.send("Hello World!")
})

app.put("/users/:id", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
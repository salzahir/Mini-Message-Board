const {Router} = require('express');
const messageRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

messageRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini MessageBoard", messages: messages });
});

messageRouter.get("/new", (req, res) => {
    res.render("form");
});

messageRouter.get("/details/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];

    if(!message) {
        res.status(404).send("Message not found");
    }

    res.render("detail", { message: message });
});

messageRouter.post("/new", (req, res) => {
    const userMessage = req.body.message || "No message provided";
    const userName = req.body.name || 'Anonymous';

    messages.push({
        text: userMessage,
        user: userName,
        added: new Date()
    });

    res.redirect("/");

});

module.exports = messageRouter;
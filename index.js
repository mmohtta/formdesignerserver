const express = require('express'),
port = 3000;
var app = express();
let formDesignerRoute = require("./router/formdesignerroute"),
formDataRouter = require("./router/formdataroute")
componentRouter = require("./router/componentroute");

app.use("/components",componentRouter);
app.use("/formdesigner",formDesignerRoute);
app.use("/formdata",formDataRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to Form designer");
})

app.listen(port, () => console.log(`Form designer server listening on port ${port}!`))
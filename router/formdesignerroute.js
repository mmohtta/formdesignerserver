const express = require("express"),
routeConfig = require("./router.config"),
formDesignerApi = require("../api/formdesigner");
var router = express.Router();

router.get(routeConfig.all,(req,res)=>{
    let {filter} = req.query;
    return formDesignerApi.getAllForms(filter)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.get(routeConfig.id,(req,res)=>{
    let {id} = req.params;
    return formDesignerApi.getFormById(id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.post(routeConfig.all,(req,res)=>{
    let formDesignerData = req.body;
    return formDesignerApi.createForm(formDesignerData)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});


module.exports = router;
const express = require("express"),
routeConfig = require("./router.config"),
componentsApi = require("../api/components");
var router = express.Router();

router.get(routeConfig.all,(req,res)=>{
    let {filter} = req.query;
    return componentsApi.getAllComponents(filter)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.get(routeConfig.id,(req,res)=>{
    let {id} = req.params;
    return componentsApi.getComponentById(id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.post(routeConfig.all,(req,res)=>{
    let formDesignerData = req.body;
    return componentsApi.createNewComponent(formDesignerData)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

module.exports = router;
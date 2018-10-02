const express = require("express"),
routeConfig = require("./router.config"),
formDataApi = require("../api/formdata");
var router = express.Router();

router.get(routeConfig.all,(req,res)=>{
    let {filter} = req.query;
    return formDataApi.getAllFormData(filter)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.get(routeConfig.id,(req,res)=>{
    let {id} = req.params;
    return formDataApi.getFormDataById(id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.get(routeConfig.id,(req,res)=>{
    let {id} = req.params;
    return formDataApi.getFormDataByFormId(id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

router.post(routeConfig.all,(req,res)=>{
    let formData = req.body;
    return formDataApi.insertFormData(formData)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});

module.exports = router;
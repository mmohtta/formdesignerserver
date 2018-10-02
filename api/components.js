const {Component} = require("../schema");

let componentApi = {

   getAllComponents : (filter)=>{
        return Component.find(filter).exec();
   },
   getComponentById : (id)=>{
    return Component.findById(id).exec();
   },
   createNewComponent : (componentPayload)=>{
    return Component.create(componentPayload).exec();
   }

}

module.exports = componentApi;
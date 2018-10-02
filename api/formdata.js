const {Data} = require("../schema");

let formDataApi = {

   getAllFormData : (filter)=>{
        return Data.find(filter).exec();
   },
   getFormDataByFormId : (formId)=>{
    return Data.find({where:{formId}}).exec();
   },
   getFormDataById : (id)=>{
    return Data.findById(id).exec();
   },
   insertFormData : (formDataPayload)=>{
    return Data.create(formDataPayload).exec();
   }

}

module.exports = formDataApi;
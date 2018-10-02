const {FormDesigner} = require("../schema");

let formDesignerApi = {

   getAllForms : (filter)=>{
        return FormDesigner.find(filter).exec();
   },
   getFormById : (id)=>{
    return FormDesigner.findById(id).exec();
   },
   createForm : (formDesignerPayload)=>{
    return FormDesigner.create(formDesignerPayload).exec();
   }

}

module.exports = formDesignerApi;
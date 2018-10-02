const mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/FormDesigner");

let componentSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    type: String,
    metaData: Object
}),
formDesignerSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    components: [{
        componentId : { type: Schema.Types.ObjectId, ref: 'Component' },
        label: String,
        required: Boolean,
        min: Number,
        max: Number,
        listOfOptions:[String] 
    }]
},{usePushEach:true}),
DataSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    formId : { type: Schema.Types.ObjectId, ref: 'FormDesigner' }
},{strict:false}),
Component = mongoose.model('Component', componentSchema),
FormDesigner = mongoose.model('FormDesigner', formDesignerSchema),
Data = mongoose.model('FormData', DataSchema);

module.exports = {Component,FormDesigner,Data};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema ({
  title: { type: String, required: true, index: { unique: true } },
  company: { type: String, required: true },
  body: { type: String, required: true },
  imgpath: { type: String, required: true },
  price: { type: Number, require: true},
  reason: { type : Array , "default" : [], required: true },
  os: { type: String, require: true},
  size: { type: Number, require: true},
  twoinone: { type: String, require: true},
  storage: { type: Number, require: true},
  gpu: { type: String, require: true},
  display: { type: String, require: true},
  ram: { type: Number, require: true},
  weight: { type: Number, require: true},
  bluethooth: { type: String, require: true},
  webcam: { type: String, require: true},
  battery: { type: Number, require: true},
  processor: { type: String, require: true},
  amazonlink: {type: String, required: true},
  _id: { type: String, required: true },
  design: { type: String, required: true },
  para2: { type: String, required: true },
  para3: { type: String, required: true },
  description: { type: String, required: true },
  note: { type: String, required: true },
  performancepercentage: { type: String },
  batterypercentage: { type: String },
  displaypercentage: { type: String },
  stylepercentage: { type: String },
});

module.exports = mongoose.model('Article', Article)

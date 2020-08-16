const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema ({
  title: { type: String, required: true, index: { unique: true } },
  company: { type: String, required: true },
  body: { type: String, required: true },
  imgpath: { type: String, required: true },
  price: { type: Number, require: true},
  reason: { type: String, require: true},
  os: { type: String, require: true},
  size: { type: String, require: true},
  twoinone: { type: String, require: true},
  storage: { type: String, require: true},
  display: { type: String, require: true},
  ram: { type: String, require: true},
  expandablememory: { type: String, require: true},
  ostype: { type: String, require: true},
  keyboard: { type: String, require: true},
  weight: { type: String, require: true},
  bluethooth: { type: String, require: true},
  webcam: { type: String, require: true},
  battery: { type: String, require: true},
  processor: { type: String, require: true},
  amazonlink: {type: String, required: true},
  _id: { type: String, required: true },
  design: { type: String, required: true },
  para2: { type: String, required: true },
  para3: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Article', Article)

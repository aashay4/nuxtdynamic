const Article = require('../models/Article');
const validator = require('express-validator');

// Get all
module.exports.list = function (req, res, next) {
  Article.find({}, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.finditweight = function (req, res, next) {
      console.log(req.body.weight)
    Article.find({"weight": { $lte: req.body.weight }}).sort({weight: 'descending'}).exec((err, articles) => {
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.finditsize = function (req, res, next) {
    Article.find({"size": { $lte: req.body.size }}).sort({size: 'descending'}).exec((err, articles) => {
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.finditstorage = function (req, res, next) {
    Article.find({"storage": { $lte: req.body.storage }}).sort({storage: 'descending'}).exec((err, articles) => {
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.finditram = function (req, res, next) {
    Article.find({"ram": { $lte: req.body.ram }}).sort({ram: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.bestlaptopscompany = function (req, res, next) {
    Article.find({company: req.body.company}).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.bestlaptopspurpose = function (req, res, next) {
    Article.find({reason: req.body.reason}).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.bestlaptopsos = function (req, res, next) {
  if(req.body.os === "all"){
    Article.find({}).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
  }
  else {
    Article.find({ os: req.body.os }).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}
}

module.exports.bestlaptops = function (req, res, next) {
    Article.find({"price": { $lte: req.body.price }}).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.cheap100 = function (req, res, next) {
  console.log(req.body.price);
    Article.find({"price": { $lte: req.body.price }}).sort({price: 'descending'}).exec((err, articles) => {

    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filterall = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  Article.find({reason: req.body.reason, "price": { $lte: req.body.price } }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.related = function (req, res, next) {
  Article.find({company: req.body.company, _id: { $nin: req.body._id } }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filtertwo = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.twoinone);
  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, twoinone: req.body.twoinone }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filterone = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.os);
  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, os: req.body.os }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filtersix = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.os);
  console.log(req.body.size);

  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, size: req.body.size, os: req.body.os }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filtersev = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.os);
  console.log(req.body.size);
  console.log(req.body.twoinone);
  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, size: req.body.size, os: req.body.os, twoinone: req.body.twoinone }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filterfive = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.twoinone);
  console.log(req.body.size);

  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, size: req.body.size, twoinone: req.body.twoinone }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filterfour = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.twoinone);
  console.log(req.body.os);

  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, os: req.body.os, twoinone: req.body.twoinone }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}


module.exports.filterthree = function (req, res, next) {
  console.log(req.body.reason);
  console.log(req.body.price);
  console.log(req.body.size);
  Article.find({reason: req.body.reason, "price": { $lte: req.body.price }, size: req.body.size }, function(err, articles){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}
//filter
module.exports.filter = function (req, res, next) {
  Article.find({author: req.body.author}, function(err, articles){
    console.log(req.body.author);
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

module.exports.filtera = function (req, res, next) {
  Article.find({}, function(err, articles){
    console.log("article filter")
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(articles);
  });
}

// Get one
module.exports.show = function(req, res) {
  var id = req.params.id;
  Article.findOne({_id: id}, function(err, article){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!article) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(article);
  });
}


// Create
module.exports.create = [
  // validations rules
  validator.body('title', 'Please enter Article Title').isLength({ min: 1 }),
  validator.body('title').custom(value => {
    return Article.findOne({title:value}).then(article => {
      if (article !== null) {
        return Promise.reject('Title already in use');
      }
    })
  }),
    validator.body('note', 'Please enter Note Name').isLength({ min: 1 }),
  validator.body('company', 'Please enter Company Name').isLength({ min: 1 }),
  validator.body('body', 'Please enter Body Content').isLength({ min: 1 }),
validator.body('imgpath', 'Please enter Imgpath Content').isLength({ min: 1 }),
validator.body('price', 'Please enter price').isLength({ min: 1 }),
validator.body('reason', 'Please enter reason').isLength({ min: 1 }),
validator.body('os', 'Please enter os').isLength({ min: 1 }),
validator.body('size', 'Please enter size').isLength({ min: 1 }),
validator.body('twoinone', 'Please enter twoinone').isLength({ min: 1 }),
validator.body('storage', 'Please enter storage').isLength({ min: 1 }),
validator.body('gpu', 'Please enter GpU').isLength({ min: 1 }),
validator.body('display', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('ram', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('weight', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('bluethooth', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('webcam', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('battery', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('processor', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('amazonlink', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('_id', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('design', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('para2', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('para3', 'Please enter Article Content').isLength({ min: 1 }),
validator.body('description', 'Please enter Article Content').isLength({ min: 1 }),


  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // initialize record
    var article = new Article({
        title : req.body.title,
        company : req.body.company,
        body : req.body.body,
        imgpath: req.body.imgpath,
        price: req.body.price,
        reason: req.body.reason,
        os: req.body.os,
        size: req.body.size,
        twoinone: req.body.twoinone,
        storage: req.body.storage,
        gpu: req.body.gpu,
        display: req.body.display,
        ram: req.body.ram,
        weight: req.body.weight,
        bluethooth: req.body.bluethooth,
        webcam: req.body.webcam,
        battery: req.body.battery,
        processor: req.body.processor,
        amazonlink: req.body.amazonlink,
        _id: req.body._id,
        design: req.body.design,
        para2: req.body.para2,
        para3: req.body.para3,
        description: req.body.description,
        note: req.body.note,
        performancepercentage: req.body.performancepercentage,
        batterypercentage: req.body.batterypercentage,
        displaypercentage: req.body.displaypercentage,
        stylepercentage: req.body.stylepercentage
    })

    // save record
    article.save(function(err, article){
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            });
        }
        return res.json({
            message: 'saved',
            _id: article._id
        });
    })
  }
]

// Update
module.exports.update = [
  // validation rules
  validator.body('title', 'Please enter Article Title').isLength({ min: 1 }),
  validator.body('title').custom( (value, {req}) => {
    return Article.findOne({ title:value, _id:{ $ne: req.params.id } })
      .then( article => {
      if (article !== null) {
        return Promise.reject('Title already in use');
      }
    })
  }),
  validator.body('company', 'Please enter Author Name').isLength({ min: 1 }),
  validator.body('body', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('imgpath', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('price', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('reason', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('os', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('size', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('twoinone', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('storage', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('gpu', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('display', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('ram', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('weight', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('bluethooth', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('webcam', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('battery', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('processor', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('amazonlink', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('design', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('para2', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('para3', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('description', 'Please enter Article Content').isLength({ min: 1 }),
  validator.body('note', 'Please enter Note Content').isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    var id = req.params.id;
    Article.findOne({_id: id}, function(err, article){
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            });
        }
        if(!article) {
            return res.status(404).json({
                message: 'No such record'
            });
        }

        // initialize record
        article.title =  req.body.title ? req.body.title : article.title;
        article.company =  req.body.company ? req.body.company : article.company;
        article.body =  req.body.body ? req.body.body : article.body;
        article.imgpath =  req.body.imgpath ? req.body.imgpath : article.imgpath;
        article.price =  req.body.price ? req.body.price : article.price;
        article.reason =  req.body.reason ? req.body.reason : article.reason;
        article.os =  req.body.os ? req.body.os : article.os;
        article.size =  req.body.size ? req.body.size : article.size;
        article.twoinone =  req.body.twoinone ? req.body.twoinone : article.twoinone;
        article.storage =  req.body.storage ? req.body.storage : article.storage;
        article.gpu =  req.body.gpu ? req.body.gpu : article.gpu;
        article.display =  req.body.display ? req.body.display : article.display;
        article.ram =  req.body.ram ? req.body.ram : article.ram;
        article.weight =  req.body.weight ? req.body.weight : article.weight;
        article.bluethooth =  req.body.bluethooth ? req.body.bluethooth : article.bluethooth;
        article.webcam =  req.body.webcam ? req.body.webcam : article.webcam;
        article.battery =  req.body.battery ? req.body.battery : article.battery;
        article.processor =  req.body.processor ? req.body.processor : article.processor;
        article.amazonlink =  req.body.amazonlink ? req.body.amazonlink : article.amazonlink;
        article.design =  req.body.design ? req.body.design : article.design;
        article.para2 =  req.body.para2 ? req.body.para2 : article.para2;
        article.para3 =  req.body.para3 ? req.body.para3 : article.para3;
        article.description =  req.body.description ? req.body.description : article.description;
        article.note =  req.body.note ? req.body.note : article.note;
        article.performancepercentage =  req.body.performancepercentage ? req.body.performancepercentage : article.performancepercentage;
        article.batterypercentage =  req.body.batterypercentage ? req.body.batterypercentage : article.batterypercentage;
        article.displaypercentage =  req.body.displaypercentage ? req.body.displaypercentage : article.displaypercentage;
        article.stylepercentage =  req.body.stylepercentage ? req.body.stylepercentage : article.stylepercentage;

        // save record
        article.save(function(err, article){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting record.'
                });
            }
            if(!article) {
                return res.status(404).json({
                    message: 'No such record'
                });
            }
            return res.json(article);
        });
    });
  }

]


// Delete
module.exports.delete = function(req, res) {
  var id = req.params.id;
  Article.findByIdAndRemove(id, function(err, article){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      return res.json(article);
  });
}

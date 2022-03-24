var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get_geo_location/:ip?', function(req, res, next) {
      var url = req.params?.ip ? `https://ipinfo.io/${req.params.ip}/geo` : 'https://ipinfo.io/json';
      axios.get(url)
      .then((result) => {
          res.json({status:200, msg:"Sucess", data:result.data})
      }).catch((err) => {
          res.json({status:err.response.data.status, msg:"Error", data:err.response.data.error})
          console.error("========== ",err.response.data);
      });
});


router.get('/get_population', function(req, res, next) {
  // var url = req.params?.ip ? `https://ipinfo.io/${req.params.ip}/geo` : 'https://ipinfo.io/json';
  axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  .then((result) => {
    // console.log("-------",result)
      res.json({status:200, msg:"Sucess", data:result.data.data})
  }).catch((err) => {
    // console.error("========== ",err.response.data);
      res.json({status:err.response.data.status, msg:"Error", data:err.response.data.error})
  });
});


router.get('/get_exchange_rates', function(req, res, next) {
  // var url = req.params?.ip ? `https://ipinfo.io/${req.params.ip}/geo` : 'https://ipinfo.io/json';
  axios.get('https://api.coingecko.com/api/v3/exchange_rates')
  .then((result) => {
    // console.log(result)
      res.json({status:200, msg:"Sucess", data:result.data})
  }).catch((err) => {
    // console.error("========== ",err);
      res.json({status:err.response.data.status, msg:"Error", data:err.response.data.error})
  });
});

module.exports = router;
 
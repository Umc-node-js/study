var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());

const users = [
  {
    id:'test1',
    pw:'test1_pw'
  },
  {
    id:'test2',
    pw:'test2_pw'
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET method */
router.get('/read', function(req, res) {
  res.status(200).json({
    message: "read success!",
  });
})

let arr= [];
router.post('/create', (req, res) => {
  console.log(req.body);

  const {data} = req.body;
  arr.push(data);

   res.status(200).json({
    message: "create success!",
    result: arr,
  });
  res.json(users);
});

server.post('/api/user', (req, res) => {
  console.log(req.body);
  res.json(users);
});

/* PUT method */
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message : "update success",
    result: arr,
  });
});

/* DELETE method */
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1); //배열에 있는 데이터 지우기 해당 번호에 있는 거 삭제됨.
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

module.exports = router;

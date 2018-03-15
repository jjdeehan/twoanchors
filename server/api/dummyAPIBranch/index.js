const router = require('express').Router();


router.get('/', (req, res, next) => {
  console.log('hi api/sample route!');
  res.json(req)
})

router.get('/home', (req, res, next) => {
  res.sendStatus(200);
  console.log('made it to the front end');
});

router.use( (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})


module.exports = router;

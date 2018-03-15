/*eslint-disable new-cap*/
const router = require('express').Router();

console.log('made it to the index')
//delegate to further api routes]
// '/api/sample'
router.use('/sample', require('./dummyAPIBranch'))
      //.use('/users', require('./users'));


router.use( (req, res, next) => {

  const err = new Error('API Route not found!');
  err.status = 404;

  next(err);
})

module.exports = router;

var express = require('express');
var router = express.Router();
var memos = require('../controller/memos.controller.js')

router.post('/createMemo',memos.create)
router.put('/updateMemo',memos.update)
router.delete('/deleteMemo',memos.delete)
router.get('/memos',memos.show)

module.exports = router;

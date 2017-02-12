const Memo = require('../models/memo.js')

module.exports = {

  show: function(req,res){
  Memo.find({}, function(err,memo) {
    if (err) throw err;

    res.send(memo);
  });
  },
  create: function(req,res){
    var newMemo = Memo({
      todo: req.body.todo,
      created_at: new Date(),
      updated_at: new Date()
    })

    newMemo.save(function(err){
      if(err){
        throw err
      }
      else{
        res.send(newMemo)
      }
    })

  },
  update: function(req,res){
    Memo.findOne({_id:req.body.id},function(err,memo){
      if(err){
        throw err
      }
      else{
        memo.todo = req.body.todo

        memo.save(function(err){
          if(err){
            throw err
          }
          else{
            res.send(memo)
          }
        })
      }
    })
  },

  delete: function(req,res){
    Memo.findOneAndRemove({_id:req.body.id}, function(err) {
        if (err) throw err;

      res.send(`memo deleted`);
    });
  }

}

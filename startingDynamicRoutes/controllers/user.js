const User = require('../models/User');

exports.getUser = (req,res,next)=> {
    User.findAll()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
}

exports.postUser = async (req,res,next)=> {
    try{
      const mobile = req.body.mobile;
      const name = req.body.name;
      const email = req.body.email;
      const data = await User.create({
        name: name,
        email: email,
        mobile: mobile
      })
      res.status(201).json({newUserDetail: data })
    } catch(err) {
      res.status(500).json({error:err})
    }
}

exports.getDelete = async (req,res,next)=> {
    try{
    const userId = req.params.userId;
    const userField = await User.findByPk(userId)
    await userField.destroy();
    res.status(201).json({delete: userField})
    } catch(err) {
      console.error(err);
    }
}

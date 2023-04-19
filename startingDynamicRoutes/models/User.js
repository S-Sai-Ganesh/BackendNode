const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }

  save(){
    const db = getDb();
    dbOp = db.collection('users').insertOne(this);
    return dbOp.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }

  static findUserById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findAllUser() {
    const db = getDb();
    return db
      .collection('users')
      .find()
      .toArray()
      .then(users => {
        console.log(users);
        return users;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .deleteOne({ _id: new mongodb.ObjectId(userId) })
      .then(result => {
        console.log('Deleted', result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
module.exports = User;
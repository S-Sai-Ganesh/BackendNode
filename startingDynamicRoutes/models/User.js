const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(name, email, mobile, cart, id) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.cart = cart; // {items: []}
    this._id = id;
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

  addToCart(product) {
    const cartProductArr = this.cart.items;
    console.log('thisssss',this);
    console.log(cartProductArr);
    const cartProductIndex = cartProductArr.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];
    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new mongodb.ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteProductId(prodId) {
    const db = getDb();
    const cartProductArr = this.cart.items;
    const cartProductIndex = cartProductArr.findIndex(cp => {
      return cp.productId.toString() === prodId.toString();
    });
    cartProductArr.splice(cartProductIndex,1);
    const updatedCart = {
      items: cartProductArr
    }
    return db
      .collection('users')
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
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
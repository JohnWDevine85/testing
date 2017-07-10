const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
  "id": {type: Number, required: false},
  "description": {type: String, required: false},
  "cost": {type: Number, required: false},
  "quantity": {type: Number, required: false},
  "createdAt": {type: Date, required: false, date: Date.now},
  "UpdatedAt": {type: Date, required: false, date: Date.now}
})

const Item = mongoose.model('item', itemSchema)

module.exports = Item


const customerCheckoutSchema = new mongoose.Schema({
  "id": {type: Number, required: false},
  "items": {type: Object, required: true},
  "wallet": {type: Number, required: false},
  "createdAt": {type: Date, required: false, date: Date.now},
  "UpdatedAt": {type: Date, required: false, date: Date.now}
})

const Checkout = mongoose.model('checkout', customerCheckoutSchema)

module.exports = Checkout

const TransactionSchema = new mongoose.Schema({
  "id": {type: Number, required: false},
  "items": {type: Object, required: true},
  "Checkout": {type: Object, required: false},
  "createdAt": {type: Date, required: false, date: Date.now},
  "UpdatedAt": {type: Date, required: false, date: Date.now}
})

const Transaction = mongoose.model('checkout', customerTransactionSchema)

module.exports = Transaction

const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder = async function (req, res) {
  let data = req.body
  let userId = data.userId
  let productId = data.productId
  if (!userId) {
    return res.send({ msg: 'userId is mandatory in the request' })
  } else if (!productId) {
    return res.send("please enter valid productId")
  }

  let UserId = await userModel.findById(userId)
  let ProductId = await productModel.findById(productId)

  if (!UserId) {
    return res.send("this user id is not found in user databse")
  } else if (!ProductId) {
    return res.send("this product id is not found in product database")
  }


  let app = req.headers.isfreeappuser
  
  let value = 0
  
  if (app === 'true') {
    data.amount = value
    data.isFreeAppUser = app
    let savedData = await orderModel.create(data)
    res.send({ data: savedData })

  } 
  else if (UserId.balance >= ProductId.price) {

    await userModel.findOneAndUpdate({ _id: userId },
      { $set: { balance: UserId.balance - ProductId.price } })
    data['amount'] = ProductId.price;
    data['isFreeAppUser'] = req.headers.isfreeappuser;

    let savedData = await orderModel.create(data)
    res.send({ msg: savedData })

  } else {
    res.send("Insufficient Balance!")//if sufficient balance are not available in the user account
  }
}

module.exports.createOrder = createOrder
const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad: adId, content } = req.body

    const ad = await Ad.findById(adId).populate('author')
    const user = await User.findById(req.userId)

    const purchase = await Purchase.create({ ...req.body, buyer: req.userId })

    Queue.create(PurchaseMail.key, {
      ad,
      user,
      content
    }).save()

    return res.json(purchase)
  }

  async sell (req, res) {
    const purchase = await Purchase.findById(req.params.id)

    await Ad.findOneAndUpdate(
      { id: purchase.ad },
      {
        available: false,
        purchaseBy: purchase.id
      },
      { new: true }
    )
    res.json({ message: 'Success' })
  }
}

module.exports = new PurchaseController()

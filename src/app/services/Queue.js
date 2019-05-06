const kue = require('kue')
const redis = require('../../config/redis')
const jobs = require('../jobs')

const Queue = kue.createQueue({ redis })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue

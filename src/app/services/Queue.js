const kue = require('kue')
const redis = require('../../config/redis')
const jobs = require('../jobs')
const Sentry = require('@sentry/node')

const Queue = kue.createQueue({ redis })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

Queue.on('error', Sentry.captureException)

module.exports = Queue

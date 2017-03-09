const mongoose = require('mongoose')

const expenseReportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    hourly: {
        type: Boolean,
        required: true
    },
    holidays: {
        type: Number,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    billed: {
        type: Number,
        required: true
    },
    pay: {
        type: Number,
        required: true
    },
    taxes: {
        type: Boolean,
        required: true
    },
    feeM: {
        type: Boolean,
        required: true
    },
    feeC: {
        type: Boolean,
        required: true
    },
    feeS: {
        type: Boolean,
        required: true
    },
    rebate: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('ExpenseReport', expenseReportSchema)

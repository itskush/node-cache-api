const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuoteSchema = new Schema ({
    key : {type: String, required: true, max: 100},
    message: {type: String, required: true, max: 100},
});

module.exports = mongoose.model("Quote", QuoteSchema);

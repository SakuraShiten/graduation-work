const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    header: { type: String, required: true },
    data: { type: Date, default: Date.now, required: true },
    body: { type: String, required: true },
    image: { type: Buffer, required: true },
}, { versionKey: false })

module.exports = model('News', schema)
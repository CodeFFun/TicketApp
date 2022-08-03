const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iphone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
        type: String,
        required: [true, 'Please entera a description of the issue'],
    },
    status: {
        type: String,
        enum: ['new', 'open', 'closed'],
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Tickes', ticketSchema)
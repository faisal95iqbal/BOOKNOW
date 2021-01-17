import mongoose from 'mongoose'

const bookSchema = mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    booking: [{
        hotelName: { type: String, required: true },
        numberOfRooms: { type: Number, required: true },
        price: { type: Number, required: true },
        customer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        hotel: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Hotel' },
    }],
    paymentMethod: {
        type: String
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address:{type: String},
    },
    isPaid: {
        type: Boolean,
        required: true,
        default:false
    },
    paidAt: {
        type:Date
    },
    bookingStart: {
        type:Date
    },
    bookingEnd: {
        type:Date
    },
    checkinAt: {
        type: Date
    },
    checkoutAt: {
        type:Date
    }
}, {
    timestamps:true,
} )

const Book = mongoose.model( 'Book',bookSchema )

export default Book
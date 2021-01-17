import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema( {
    name: {
        type: String,
        required:true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps:true
} )

const roomSchema = mongoose.Schema( {
    images: [{ type: String, required: true, }],
    perDayPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    roomNumber: {
        type: Number,
        required:true,
    },
    roomType: {
        type: String,
        required:true,
    },
    isBooked: {
        type: Boolean,
        required: true,
        default:false
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps:true
} )

const hotelSchema = mongoose.Schema( {
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required:true,
    },
    address: {
        type: String,
        required:true
    },
    contactNumber: {
        type: Number,
        required:true
    },
    totalRooms: {
        type: Number,
        required: true,
        default:1
    },
    rooms: [roomSchema],
    images: [{type: String}],
    reviews:[reviewSchema]
}, {
    timestamps:true,
} )

const Hotel = mongoose.model( 'Hotel',hotelSchema )

export default Hotel
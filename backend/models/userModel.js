import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema( {
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    contactNumber: {
        type: Number
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default:false,
    },
    isOwner: {
        type: Boolean,
        required: true,
        default:false,
    },
    isManager: {
        type: Boolean,
        required: true,
        default:false,
    }
}, {
    timestamps:true,
} )

userSchema.methods.matchPassword = async function ( enteredPassword ) {
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.pre('save', async function ( next ) {
    if ( !this.isModified('password') ) {
        next()
    }
    const salt = await bcrypt.genSalt( 10 )
    this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model( 'User',userSchema )

export default User
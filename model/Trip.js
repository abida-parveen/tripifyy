    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    // Create Schema
    const TripSchema = new Schema({
    organizer: {
        type: Schema.Types.ObjectId,
        ref:'organizer'
    },
    designation:{
        type: String,
        required:true
    },
    departureDate:{
        type: Date,
        required:true
    },
    numberOfDays:{
        type: Number,
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    desc: {
        type: String,
        required: true
    },
    email:{
        type:String,
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    price: {
        type: Number,
    },
    likes: [
        {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'organizer'
        }
        }
    ],
    tourists: [
        {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        }
    ],
    
    comments: [
        {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'organizer'    
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: (Date.now() + 5*60*60*1000).toString()
        }
        }
    ],
    date: {
        type: Date,
        default: (Date.now() + 5*60*60*1000).toString()
    }
    });

    module.exports = Trip = mongoose.model('trips', TripSchema);

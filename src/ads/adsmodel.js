import mongoose from "mongoose";


const {Schema , model } = mongoose;

const adSchema = new Schema ({
    title :{
        type: String,
        required : true,
    },
    description :{
        type: String,
        required : true,
    },
    location :{
        type: String,
        required : true,
    },
    
    image: {
        type: String,
        required: true 
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Ad = model ("AD", adSchema);

export default Ad;
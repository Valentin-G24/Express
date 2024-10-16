const mongoose = require('mongoose');

const schema = mongoose.Schema;

const taskSchema = new schema({
    id:{
    type: String,
        require: true,
        unique: true,
    },

    title:{
        type: String,
        require: false,
    },

    description:{
        type: String,
        require: false,
    },

    start:{
        type: Date,
        require: false,
    },

    end:{
        type: Date,
        require: false,
    },

    status:{
        type: String,
        require: false,
    },

    geolong:{
        type: Number,
        require: false,

    },

    geolat:{
        type: Number,
        require: false,

    },

    
})

module.exports=mongoose.model('task',taskSchema)

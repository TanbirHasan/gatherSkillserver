const mongoose = require('mongoose')

const MediaSchema =  mongoose.Schema({
    name : {
        type : String,
        required : true,

    },
    courseTag : {
        type : String,
        required : true,

    },
    videos : [
        {
            type : String
        }
    ],
},
{
    timestamps : true
}
)

const Media = mongoose.model("Media", MediaSchema);


module.exports = Media
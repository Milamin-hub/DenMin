//Требуется Mongoose
const mongoose = require('mongoose');

//Определяем схему
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    picture: {type: String}
});

export default  mongoose.model('Post', SomeModelSchema )




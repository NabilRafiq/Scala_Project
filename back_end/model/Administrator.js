const mongoose = require('mongoose');

const { Schema } = mongoose;
const administrator = new Schema({
  Username: {
    type: String,
    required: true,
   
  },
  Password: {
    type: string,
    required: true,
    minlength:7,
  },
  status: {
    type: string,
    required: true,
  },
}
) 
const administrator = mongoose.model('administrator', administrator);

module.exports = administrator;

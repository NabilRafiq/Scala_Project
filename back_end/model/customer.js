const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
const customers = Schema(
  {
    email: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      unique: true,
      required: true,
      minlength: 7,
    },
    Firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      
    },
    contact: {
      type: String,
      unique: true,
      trim: true,
     
    },
    Address: {
      type: String,
      
    },
    gender:{
      type:String
    },
    city:{
      type:String
    }
  }
)

    
    
 

userSchem.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  if (!userObject.role === 'superadmin') {
    delete userObject.updatedAt;
    delete userObject.__v;
  }
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
}


userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Unable to login');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login');

  return user;
};

// Hash the plain text password before save
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
})

const User = mongoose.model('customers', customers)

module.exports = customers;

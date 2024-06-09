const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }
        //TO DO: continue with thoughts
        //TO DO: add friends
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

const User = model('User', userSchema);

module.exports = User;
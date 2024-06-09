const { Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    },
    username: {
        type: String,
        required: true
    },
    //todo reactions piece, something about a reactionschema
  },
  {
    toJSON: {
        virtuals: true,
      },
      id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
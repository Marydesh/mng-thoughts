const { Schema, model } = require('mongoose');
const reactions  = require('./Reaction');
const dayjs = require ('dayjs');
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: function(currentDate) {
      return dayjs(currentDate).format('DD/MM/YYYY')
      }
    },
    reactions: [
     reactions
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

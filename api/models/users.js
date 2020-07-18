const mongoose = require('mongoose');

const schemaOptions = {
  toJSON: {
    virtuals: true,
    getters: true
  },
  toObject: {
    virtuals: true,
    getters: true
  }
};

const objectSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index: true
  },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  firebaseId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index: true,
  },
  settings: { // Inline allows for defaults
    allowReferrals: {
      type: Boolean,
      default: true
    },
    requestWithdrawal: {
      type: Boolean,
      default: false
    },
    autoEnterCompetitions: {
      type: Boolean,
      default: true
    },
    showHistoricalEntries: {
      type: Boolean,
      default: false
    },
    showHistoricalStocks: {
      type: Boolean,
      default: false
    }
  },
  subscribedBlends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blends'
  }]
}, schemaOptions);

objectSchema.virtual('transactions', {
  ref: 'transactions',
  localField: '_id',
  foreignField: 'user'
});

objectSchema.virtual('walletBalance').get(function() {
  if (this.transactions && this.transactions.length > 0)
    return this.transactions.reduce((sum, tx) => sum + tx.amount, 0);
  return null;
});

objectSchema.statics.findByFirebaseId = function (id) {
  return this.findOne({ 'firebaseId': id });
}

module.exports = mongoose.model('users', objectSchema);
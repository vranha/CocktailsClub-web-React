const mongoose = require('mongoose');

const userCocktel = new mongoose.Schema({
    licor: { type: String, required: true  },
    mezcla: { type: String, required: true  },
    extra: { type: String, required: true  },
});

const UserCocktel = mongoose.model('userCocktel', userCocktel);

module.exports = UserCocktel;

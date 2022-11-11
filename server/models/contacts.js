const mongoose = require("mongoose");

const ConatctSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    
  }
  // { timestamps: true }
);

const Contact = mongoose.model("CONTACTS", ConatctSchema);
module.exports = Contact;
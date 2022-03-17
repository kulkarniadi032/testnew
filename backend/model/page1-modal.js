const mongoose = require("mongoose");
const page1Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    orderNo: {
      type: String,
      required: true,
    },
    subStationName: {
      type: String,
      required: true,
    },
    certificateNo: {
      type: String,
      required: true,
    },
    transformerMake: {
      type: String,
      required: true,
    },
    serialNo: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    referanceStandard: {
      type: String,
      required: true,
    },
    testingDate: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    // testing By Info
    testedByName: {
      type: String,
      required: true,
    },
    testedByDesignation: {
      type: String,
      required: true,
    },
    testedByComName: {
      type: String,
      required: true,
    },
    testedByPlace: {
      type: String,
      required: true,
    },
    // witness by info
    witnessBy: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("page1", page1Schema);

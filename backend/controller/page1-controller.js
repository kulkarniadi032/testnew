const Page1 = require("../model/page1-modal");
exports.createPage1Data = async (req, res) => {
  try {
    const result = await Page1.create(req.body);

    res.status(200).json({
      success: true,
      message: "Page1 Data Created Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Page1 Data Not Created Successfully" + error,
      result: null,
    });
  }
};
exports.getAllPage1Data = async (req, res) => {
  try {
    const result = await Page1.find();
    res.status(200).json({
      success: true,
      message: "Page1 Data Get Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Page1 Data Not Get Successfully" + error,
      result: null,
    });
  }
};
exports.deletePage1Data = async (req, res) => {
  try {
    const result = await Page1.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Page1 Data Delete Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Page1 Data Not Delete Successfully" + error,
      result: null,
    });
  }
};

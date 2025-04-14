const Feedback = require('../models/Feedback');

const createFeedback = async (req, res) => {
  try {
    const { userId, feedbackText } = req.body;
    const newFeedback = new Feedback({ user: userId, feedbackText });
    await newFeedback.save();
    res.json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createFeedback };

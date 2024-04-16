exports.register = async (req, res) => {
  const { uuid } = req.body;
  console.log(req.body);
  try {
    res.status(201).json({ message: `User ${uuid} created` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

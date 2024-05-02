module.exports = function (app, { wordFrequencys }) {
  app.post("/frequency", (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        res.status(400).json({ error: "No data provided" });
      } else {
        const newData = wordFrequencys(data);
        res.status(200).json(newData);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
};

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
/**
 * Gets the top ten most frequent words in a given string
 *
 * @param {object} data - The object to analyze. The keys are words and the values are their frequencies
 * @returns {Object} An object with the ten most frequent occuring words.
 * @throws {Error} If something goes wrong while trying to get the top 10.
 */
function getTopTenFrequentWords(data) {
  try {
    let words = Object.entries(data);
    words.sort((a, b) => b[1] - a[1]);
    words = words.slice(0, 10);
    return Object.fromEntries(words);
  } catch (error) {
    console.error("Failed to get top ten frequent words: ", error);
    return {};
  }
}
/**
 * Calculates the frequency of each word in a given string.
 *
 * @param {string} data - The string to analyze.
 * @returns {Object} An object where the keys are words and the values are their frequencies.
 * @throws {Error} If something goes wrong while trying to count the words frequency.
 */
function wordFrequencys(data) {
  const wordFrequencies = {};
  try {
    const words = data.replace(/[,.:!?\-]/g, "").split(" ");
    for (const word of words) {
      if (word in wordFrequencies) {
        wordFrequencies[word] += 1;
      } else {
        wordFrequencies[word] = 1;
      }
    }
    return getTopTenFrequentWords(wordFrequencies);
  } catch (err) {
    console.log(err);
    return {
      error: "Something went wrong while trying to count the words frequency",
    };
  }
}

app.post("/frequency", (req, res) => {
  try {
    const data = req.body.data;
    if (!data) {
      res.status(400).json({ error: "No data provided" });
    } else {
      const newData = wordFrequencys(data);
      res.status(200).json({ Frequency: newData });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on: http://localhost:${port}`);
});

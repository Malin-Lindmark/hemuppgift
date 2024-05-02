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
 * @param {string} string - The string to analyze.
 * @returns {Object} An object where the keys are words and the values are their frequencies.
 * @throws {Error} If something goes wrong while trying to count the words frequency.
 */
function wordFrequencys(string) {
  const cleanedString = string.replace(/[,".:!?\-]/g, "").toLowerCase();
  const words = cleanedString.split(" ");
  const wordFrequencies = {};
  words.forEach((word) => {
    if (word in wordFrequencies) {
      wordFrequencies[word] += 1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
  return getTopTenFrequentWords(wordFrequencies);
}

module.exports = {
  wordFrequencys,
  getTopTenFrequentWords,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

let transform = (arr) =>
  arr.flatMap((v, i, a) => {
    if (a[i + 1] === "--discard-prev") return [];
    if (a[i - 1] === "--double-next") return [v, v];
    if (a[i + 1] === "--double-prev") return [v, v];

    if (v.toString().startsWith("--d")) return [];

    if (!Array.isArray(arr))
      throw new Error("'arr' parameter must be an instance of the Array!");
    return v;
  });

module.exports = {
  transform,
};

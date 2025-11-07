/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SMALL_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SMALL_TERM_DISCOUNT = 20;
  const price = 40;

  let result = days * price;

  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  } else if (days >= SMALL_TERM) {
    return result - SMALL_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;

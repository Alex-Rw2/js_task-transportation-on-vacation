/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const ShortsDiscount = 20;
  const BigDiscount = 50;

  if (days < 3) {
    return rent * days;
  }

  if (days <= 6) {
    return days * rent - ShortsDiscount;
  }

  if (days >= 7) {
    return days * rent - BigDiscount;
  }
}

module.exports = calculateRentalCost;

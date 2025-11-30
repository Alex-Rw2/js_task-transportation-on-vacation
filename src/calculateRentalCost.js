/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;

  if (days < 3) {
    return rent * days;
  }

  if (days <= 6) {
    return days * rent - 20;
  }

  if (days >= 7) {
    return days * rent - 50;
  }
}

module.exports = calculateRentalCost;

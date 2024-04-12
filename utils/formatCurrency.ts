/**
 * @function formatCurrency
 * Format number as currency (US Dollars)
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => $0.00
 *
 * @example
 *   formatCurrency(1.5)
 *   // => $1.50
 *
 */
export default function formatCurrency(currency: number, locales: Intl.LocalesArgument = 'en-US'): string {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(currency)
}

export const formatMoneyNumber = (amount: number) => {
  return new Intl.NumberFormat('en-SG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

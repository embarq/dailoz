export const formatDate = (
  value: string | number | Date,
  format: Intl.DateTimeFormatOptions
): string => {
  const dateTimeFormat = new Intl.DateTimeFormat(void 0, format)
  return dateTimeFormat.format(new Date(value))
}

export const getYears = (baseDate: Date, count: number): number[] => {
  const currentYear = baseDate.getFullYear()
  const half = Math.round(count / 2)
  return [
    ...Array.from(Array(half), (_, i) => currentYear - i).reverse(),
    ...Array.from(Array(half - 1), (_, i) => currentYear + i + 1),
  ]
}

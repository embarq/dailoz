export const formatDate = (
  value: string | number | Date,
  format: Intl.DateTimeFormatOptions
): string => {
  const dateTimeFormat = new Intl.DateTimeFormat(void 0, format)
  return dateTimeFormat.format(new Date(value))
}

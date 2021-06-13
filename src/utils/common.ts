// eslint-disable-next-line @typescript-eslint/ban-types
export const isCallable = (fn: unknown): fn is Function => {
  return typeof fn === 'function'
}

/** Valdates `str` arg for being not an empty string.  */
export const isRealString = (str: unknown): boolean => {
  return typeof str === 'string' && str.trim().length > 0
}

/**
 * Capitalizes the first letter of a string.
 * @param txt The string to capitalize
 * @returns The capitalized string
 */
export function capFirst(txt: string) {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

/**
 * Checks if a given object is empty.
 * @param obj The object to check
 * @returns True if is empty, false otherwise.
 */
export function isObjectEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
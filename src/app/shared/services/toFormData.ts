/**
 * It takes an object and returns a FormData object with the same key/value pairs
 * @param {any} formValue - any - this is the object that you want to convert to FormData.
 * @returns A new FormData object with the key/value pairs from the formValue object.
 */
export function toFormData(formValue: any) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key] as any;
    formData.append(key, value);
  }
  return formData;
}

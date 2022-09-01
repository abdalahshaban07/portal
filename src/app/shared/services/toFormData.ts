/**
 * It takes an object and returns a FormData object with the same key/value pairs
 * @param {any} formValue - any - this is the object that you want to convert to FormData.
 * @returns A new FormData object with the key/value pairs from the formValue object.
 */
export function toFormData(formValue: any) {
  // const formData: FormData = new FormData();

  // if (comment.Attachments) {
  //   Array.from(comment.Attachments).forEach((file) => {
  //     formData.append('Attachments', file, file.name);
  //   });
  // } else {
  //   formData.append('Attachments', null as any);
  // }
  // formData.append('id', comment.id as any);
  // formData.append('Answer', comment.Answer);
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    if (formValue[key] instanceof Array) {
      for (let i = 0; i < formValue[key].length; i++) {
        formData.append(key, formValue[key][i], formValue[key][i].name);
      }
    }

    const value = formValue[key] as any;
    formData.append(key, value);
  }
  return formData;
}

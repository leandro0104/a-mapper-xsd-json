import { FormControl } from '@angular/forms';

export const requiredFileType = (type: string) => {
  return (formControl: FormControl) => {
    const file = formControl.value;
    if (file) {
      const ext = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
      if (type !== ext) {
        return {
          requiredFileType: true,
        };
      }
      return null;
    }
    return null;
  };
  return null;
};
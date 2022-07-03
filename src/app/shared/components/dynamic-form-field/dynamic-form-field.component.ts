import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DynamicFormFieldModel } from './dynamic-form-field.model';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss'],
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() formItem!: DynamicFormFieldModel;
  form!: FormGroup;
  dataimage: string = '';
  selectedFile!: any[];

  hide: boolean = true;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    enableToolbar: true,
    showToolbar: true,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['insertVideo', 'insertHorizontalRule', 'toggleEditorMode'],
    ],
  };

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.form;
    
  }

  async uploadFile(imgFile: any, formItem: string) {
    const file = imgFile.target.files;
    this.selectedFile = [...file];

    // const formDate: FormData = new FormData();
    // formDate.set('file', file[0], file[0].name); // file is the name of the input field in the form

    // this.dataimage = (await this.FileToBase64(file[0])) as string; // convert file to base64
    // this.form.get(formItem)?.setValue(this.dataimage); // set base64 to form

    this.form.get(formItem)?.setValue(file[0]); // set file to form
  }

  FileToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  removeFileByIndex(index: number, formItem: string): void {
    this.selectedFile.splice(index, 1);
    this.form.get(formItem)?.setValue('');
  }
}

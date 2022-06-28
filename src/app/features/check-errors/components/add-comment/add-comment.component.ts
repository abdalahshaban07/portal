import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  exportAs: 'add-comment',
})
export class AddCommentComponent implements OnInit {
  form!: FormGroup;
  selectedFile!: any[];
  addComment: boolean = false;
  @Input() questionId!: number;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      comment: [''],
      file: [''],
    });
  }

  onFileSelected(event: any): void {
    let files = event.target.files;

    if (files && files.length > 0) {
      this.selectedFile = [...files];
    }
  }

  removeFileByIndex(index: number): void {
    this.selectedFile.splice(index, 1);
  }

  addCommentToggle(): void {
    this.addComment = true;
  }

  acceptQuestion(): void {}

  confirmComment(): void {
    this.addComment = false;

    // send comment and files to server with questionId
  }

  cancelConfirm(): void {
    this.addComment = false;
    this.form.reset();
  }
}

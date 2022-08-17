import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../../project/services/project.service';
import { QuesationService } from '@features/question/services/quesation.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Roles } from '@shared/Enums/roles';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  exportAs: 'add-comment',
})
export class AddCommentComponent implements OnInit {
  form!: FormGroup;
  selectedFile!: File[];
  addComment: boolean = false;
  @Input() questionId!: number | string;
  @Input() lineId!: number | string;
  Roles = Roles;
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private quesationService: QuesationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      comment: ['', [Validators.required]],
      file: ['', [Validators.required]],
    });
  }

  onFileSelected(e: any) {
    let files = e.target.files;

    if (files && files.length > 0) {
      this.selectedFile = files;
      this.form.get('file')?.setValue(this.selectedFile);
    }
  }

  removeFileByIndex(index: number): void {
    this.selectedFile.splice(index, 1);
  }

  addCommentToggle(): void {
    this.addComment = true;
  }

  acceptQuestion(): void {
    this.projectService.acceptQuestion(this.lineId).subscribe((data) => {
      this.goBack();
    });
  }

  confirmComment(): void {
    if (this.form.invalid) return;
    this.addComment = false;
    // send comment and files to server with questionId
    let comment = {
      id: this.lineId,
      Answer: this.form.value.comment,
      Attachments: this.selectedFile,
    };

    this.selectedFile[0].size;
    this.quesationService.addCommentToQuestion(comment).subscribe((data) => {
      this.reloadPage();
    });
  }

  cancelConfirm(): void {
    this.addComment = false;
    this.form.reset();
  }

  reloadPage(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

  goBack(): void {
    this.location.back();
  }
}

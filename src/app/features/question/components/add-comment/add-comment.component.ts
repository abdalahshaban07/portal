import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../../project/services/project.service';
import { QuesationService } from '@features/question/services/quesation.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

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
  @Input() questionId!: number | string;
  @Input() lineId!: number | string;
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
      comment: [''],
      file: [''],
    });
  }

  onFileSelected(e: any) {
    let files = e.target.files;

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

  acceptQuestion(): void {
    this.projectService.acceptQuestion(this.lineId).subscribe((data) => {
      console.log(data, 'data');
      this.goBack();
    });
  }

  confirmComment(): void {
    this.addComment = false;

    // send comment and files to server with questionId
    let comment = {
      id: this.lineId,
      Answer: this.form.value.comment,
      Attachments: this.selectedFile,
    };
    this.quesationService.addCommentToQuestion(comment).subscribe((data) => {
      console.log(data, 'data');
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

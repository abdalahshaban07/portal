import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  id!: number | string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    // this.login();
  }

  createDynamicFormFields() {
    this.dynamicFormFields = [
      {
        id: 'username',
        label: 'Username',
        type: 'text',
        defaultValue: {
          value: 'Admin',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        defaultValue: {
          value: '123',
          disabled: false,
        },
        validators: [Validators.required],
      },
    ];
  }

  createForm() {
    this.createDynamicFormFields();
    this.myForm = this.fb.group({});
    this.dynamicFormFields.forEach((field) => {
      const control = this.fb.control(
        { ...field.defaultValue },
        field.validators
      );
      this.myForm.addControl(field.id, control);
    });
  }

  login() {
    let { username, password } = this.myForm.value;
    this.authService.login(username, password).subscribe((user) => {
      this.toastr.success('Login Successful');
      // user.role === 'Admin'
      //   ? this.router.navigate(['/admin'])
      //   : this.router.navigate(['/client']);

      this.router.navigate(['/'], { replaceUrl: true });
    });
  }
}

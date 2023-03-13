import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-employeeFormDialog',
  templateUrl: './employeeFormDialog.component.html',
  styleUrls: ['./employeeFormDialog.component.css']
})
export class EmployeeFormDialogComponent implements OnInit {
  departmentList: string[] = ['IT', 'HR', 'Tech', 'Admin'];
  skillsList: string[] = ['HTML', 'CSS', 'JS', 'NodeJs', 'MySql', 'MongoDB'];
  employeeForm: FormGroup;
  @Output() submitClicked = new EventEmitter<any>();
  selectedFile: File;

  constructor(
    private HttpService : HttpServiceService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.employeeForm = this.fb.group({
      name: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      department: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  saveEmployeeDetails(){
    console.log(this.employeeForm);
    let payloadReq = this.employeeForm.value;
    payloadReq["dateOfBirth"] = payloadReq["dateOfBirth"].toISOString();
    console.log(payloadReq)
    const formData = new FormData();
    formData.append('photo', this.selectedFile);
    Object.keys(payloadReq).forEach((x) => {
      if(x=='skills'){
        formData.append(x, JSON.stringify(payloadReq[x]));
      } else{
        formData.append(x, payloadReq[x]);
      }
    });
    this.HttpService.createEmployee(formData).subscribe((response) => {
      console.log('response',response);
    })
  }

  // saveMessage() {
  //   const data = 'Your data';
  //   this.submitClicked.emit(data);
  //   this.dialogRef.close();
  // }

  // closeDialog() {
  //   this.dialogRef.close();
  // }

}

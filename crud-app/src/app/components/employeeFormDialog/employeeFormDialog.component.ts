import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeFormDialog',
  templateUrl: './employeeFormDialog.component.html',
  styleUrls: ['./employeeFormDialog.component.css']
})
export class EmployeeFormDialogComponent implements OnInit {

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit() {
  }

}

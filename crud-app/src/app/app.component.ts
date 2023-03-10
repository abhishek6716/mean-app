import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeFormDialogComponent } from './components/employeeFormDialog/employeeFormDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  constructor(public dialog: MatDialog){ }

  openDialog() {
    const dialogRef = this.dialog.open(EmployeeFormDialogComponent,{
      width:"80vh"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

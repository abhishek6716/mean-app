import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { EmployeeFormDialogComponent } from './components/employeeFormDialog/employeeFormDialog.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  entryComponents: [EmployeeFormDialogComponent],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

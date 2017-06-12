import { Component } from '@angular/core';

@Component({
   selector : 'my-employee',
   templateUrl: 'app/Employee/employee.component.html'
})

export class EmployeeComponent {
  firstName: String = 'Anand';
  lastName: String = 'Babu';
  gender: String = 'Male';
  age: Number = 27;

}
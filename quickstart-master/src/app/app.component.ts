import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                <h1>{{PageHeader}}</h1>
                <my-employee></my-employee>
              </div>`,
})
export class AppComponent  { PageHeader: string = 'Employee Details'; }

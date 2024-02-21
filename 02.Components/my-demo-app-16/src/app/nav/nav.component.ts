import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<div style="border: 1px solid red;">
    <div id="nav-wrapper">Hello navigation</div>
    <div>{{ titleVar }}</div>
  </div>`,
  styles: [
    `
      #nav-wrapper: {
        background-color: pink;
      }
    `,
  ],
})
export class NavComponent {
  titleVar = 'zdr title';
}

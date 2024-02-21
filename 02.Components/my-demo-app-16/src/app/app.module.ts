import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavigationComponent,
    UserListComponent,
    PlaygroundComponent,
    TestComponentComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// class Box {
//   color: string = 'white';

//   constructor(color: string) {
//     this.color = color;
//   }
// }

// const colors = ['red', 'blue', 'green', 'brown'];

// colors.forEach((color) => {
//   const box = new Box(color);
// });

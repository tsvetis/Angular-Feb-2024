import { Component } from '@angular/core';

// type User = {
//   name: string;
//   age: number;
//   status: string;
// };

interface User {
  name: string;
  age: number;
  status?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users = [
    { name: 'Pesho', age: 18, status: 'green' },
    { name: 'Mitko', age: 22, status: 'red' },
    { name: 'Petya', age: 32 },
    { name: 'Yoanna', age: 38 },
    { name: 'Dimitar', age: 82, status: 'yellow' },
  ] as User[];
}

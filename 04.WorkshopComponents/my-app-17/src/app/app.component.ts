import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeTestComponent } from './home-test/home-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app-17';
  task1 = { id: 1, name: 'Finish homework', status: 'done' };
  task2 = { id: 2, name: 'Izhvarli bokluka', status: 'todo' };

  tasks = [
    { id: 1, name: 'Finish homework', status: 'done' },
    { id: 2, name: 'Izhvarli bokluka', status: 'todo' },
    { id: 3, name: 'Smeni masloto na kolata', status: 'inProgress' },
    { id: 4, name: 'gledai Softuni lekciq', status: 'inProgress' },
  ];
}

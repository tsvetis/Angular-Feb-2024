import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();

    this.apiService.createTheme(themeName, postText).pipe(
      tap((data) => {
        console.log({ data });
      })
    );
  }
}

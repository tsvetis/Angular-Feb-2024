import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

const IMG_URL =
  'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();

  isToggle = false;
  greenBackground = 'background-green';
  imgUrl = IMG_URL;

  ngOnInit() {
    // debugger;
    console.log('Component Created!');
  }

  ngAfterViewInit() {
    // debugger;
    console.log('After Init!');
  }

  ngOnDestroy() {
    // clean up of stuff!
    console.log('On Destroy');
  }

  ngDoCheck() {
    if (this.isToggle === true) {
      console.log({ isToggle: this.isToggle });
    }
  }

  handleClick() {
    console.log('clicked!');
    this.isToggle = !this.isToggle;
  }

  handleInput(usernameInput: HTMLInputElement) {
    console.log('username : ', usernameInput, usernameInput.value);
    console.log(this.colorValue);

    this.onTestOutput.emit(usernameInput?.value || '');
  }
}

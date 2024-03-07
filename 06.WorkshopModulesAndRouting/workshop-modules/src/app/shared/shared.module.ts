import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomMsgComponent } from './welcom-msg/welcom-msg.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoaderComponent, WelcomMsgComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomMsgComponent],
})
export class SharedModule {}

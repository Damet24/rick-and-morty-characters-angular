import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-buttom',
  templateUrl: './toggle-buttom.component.html',
  styleUrls: ['./toggle-buttom.component.scss']
})
export class ToggleButtomComponent {
  check = false

  a() {
    console.log(this.check)
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-buttom',
  templateUrl: './toggle-buttom.component.html',
  styleUrls: ['./toggle-buttom.component.scss']
})
export class ToggleButtomComponent implements OnInit {
  @Input() check = false

  ngOnInit() {
    const theme = window.localStorage.getItem('theme')
    if (theme) {
      this.check = theme === 'dark'
      if (this.check) document.getElementsByTagName('html')[0].classList.add('dark')
    }
    else {
      window.localStorage.setItem('theme', 'light')
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }

  onToggle() {
    if (this.check) {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
    else {
      document.getElementsByTagName('html')[0].classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    }
  }
}

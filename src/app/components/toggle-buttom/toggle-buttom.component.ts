import { DOCUMENT } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-toggle-buttom",
  templateUrl: "./toggle-buttom.component.html",
  styleUrls: ["./toggle-buttom.component.scss"],
})
export class ToggleButtomComponent implements OnInit {
  @Input()
  check = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      this.check = theme === "dark";
      if (this.check) {
        this.document.getElementsByTagName("html")[0].classList.add("dark");
      }
    } else {
      window.localStorage.setItem("theme", "light");
      this.document.getElementsByTagName("html")[0].classList.remove("dark");
    }
  }

  onToggle() {
    if (this.check) {
      this.document.getElementsByTagName("html")[0].classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      this.document.getElementsByTagName("html")[0].classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }
}

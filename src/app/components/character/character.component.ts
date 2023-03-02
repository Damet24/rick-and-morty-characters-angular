import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() name: string = "Rick Sanchez"
  @Input() url: string = "#"
  @Input() image: string = ""

}

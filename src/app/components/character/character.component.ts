import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() name: string = "Rick Sanchez"
  @Input() id: number = 1
  @Input() image: string = ""

}

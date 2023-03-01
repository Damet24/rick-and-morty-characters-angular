import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() img: string = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  @Input() alt = "Rick Sanchez"
}

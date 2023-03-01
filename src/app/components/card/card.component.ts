import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() img: string = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  @Input() alt = "Rick Sanchez"

}

import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = []

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .subscribe(data => {
        console.log(data);

        this.characters = data.results
      })
  }
}

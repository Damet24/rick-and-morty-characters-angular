import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characterName: string = ''
  characters: Character[] = []

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .subscribe(data => {
        this.characters = data.results
      })
  }

  searchCharacter() {
    this.characterService.getAllCharacters(this.characterName)
      .subscribe(data => {
        this.characters = data.results
      })
  }
}

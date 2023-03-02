import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { Info } from '../../../types.d'

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characterName: string = ''
  info: Info = {
    count: 0,
    pages: 0,
    next: '',
    prev: null
  }
  characters: Character[] = []
  page: string | null = null

  constructor(private characterService: CharacterService,
  private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .subscribe(data => {
        this.info = data.info
        this.characters = data.results
      })

    this.router.queryParamMap.subscribe(params => {
      this.page = params.get('page')
      this.searchCharacter()
    })
  }

  searchCharacter() {
    this.characterService.getAllCharacters(this.characterName)
      .subscribe(data => {
        this.info = data.info
        this.characters = data.results
      })
  }
}

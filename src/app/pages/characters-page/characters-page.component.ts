import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
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

  characterName = ''
  info: Info = {
    count: 0,
    pages: 0,
    next: '',
    prev: null
  }
  characters: Character[] = []
  page: string | null = null
  showButton = false

  private scroolHight = 500

  constructor(
    private characterService: CharacterService,
    private router: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const yOffset = window.pageXOffset
    const scrollTop = this.document.documentElement.scrollTop
    this.showButton = (yOffset || scrollTop) > this.scroolHight
  }

  scrollTop() {
    this.document.documentElement.scrollTop = 0
  }

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

  onScrollEnd() {
    console.log('mas characters');
    this.characterService.getAllCharacters('', this.info.next)
      .subscribe(data => {
        this.info = data.info
        this.characters = [...this.characters, ...data.results]
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

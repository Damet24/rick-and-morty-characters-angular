import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characterId: string | null = null
  character: Character | null = null
  firstEpisode: string = ''

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params => {
      this.characterId = params.get('id')
      if (this.characterId) return this.characterService.getOneCharacter(this.characterId)
      return []
    }))
      .subscribe(data => {
        this.characterService.getEpisodeName(data.episode[0])
          .subscribe(episode => {
            this.firstEpisode = episode.name
          })
        this.character = data
      })
  }

  goToBack() {
    this.location.back()
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterData, Character } from '../models/character.model';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getAllCharacters(name: string = '') {
    console.log(`${this.apiUrl}/character/?name=${name}`);

    return this.http.get<CharacterData>(`${this.apiUrl}/character/?name=${name}`)
  }

  getOneCharacter(id: string) {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`)
  }

  getEpisodeName(url: string) {
    return this.http.get<Episode>(url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterData } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<CharacterData>('https://rickandmortyapi.com/api/character')
  }
}

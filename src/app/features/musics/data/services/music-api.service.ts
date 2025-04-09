import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MusicDTO } from '../dtos/music.DTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:8080/musics';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<MusicDTO[]> {
    return this.http.get<MusicDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<MusicDTO> {
    console.log(`Fetching music with ID: ${id}`);
    return this.http.get<MusicDTO>(`${this.baseUrl}/${id}`);
  }
  
  create(music: MusicDTO): Observable<MusicDTO> {
    return this.http.post<MusicDTO>(this.baseUrl, music);
  }

  update(id: number, music: MusicDTO): Observable<MusicDTO> {
    return this.http.put<MusicDTO>(`${this.baseUrl}/${id}`, music);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

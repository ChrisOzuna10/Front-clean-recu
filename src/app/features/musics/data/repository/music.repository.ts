import { Injectable } from '@angular/core';
import { Music } from '../models/muisc.model';
import { MusicDTO } from '../dtos/music.DTO';
import { MusicService } from '../services/music-api.service';
import { MusicMapper } from '../mappers/music.mapper';
import { Observable, map, lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicRepository {
  constructor(private musicService: MusicService) { }

  getAll(): Observable<Music[]> {
    return this.musicService.getAll().pipe(
      map(dtos => dtos.map(dto => MusicMapper.fromDTO(dto)))
    );
  }

  getById(id: number): Observable<Music> {
    return this.musicService.getById(id).pipe(
      map(response => {
        console.log('🎯 DTO fetched from service:', response);
        const dto = (response as any).music;
        return MusicMapper.fromDTO(dto);
      })
    );
  }
  
  async create(music: Music): Promise<MusicDTO | null> {
    const dto = MusicMapper.toDTO(music);
    try {
      const res = await lastValueFrom(this.musicService.create(dto));
      return res ?? null;
    } catch {
      return null;
    }
  }

  async update(id: number, music: Music): Promise<MusicDTO | null> {
    const dto = MusicMapper.toDTO(music);
    try {
      const res = await lastValueFrom(this.musicService.update(id, dto));
      return res ?? null;
    } catch {
      return null;
    }
  }

  delete(id: number): Promise<void> {
    return firstValueFrom(this.musicService.delete(id));
  }
}

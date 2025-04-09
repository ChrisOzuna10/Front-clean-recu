import { firstValueFrom } from "rxjs";
import { MusicDTO } from "../data/dtos/music.DTO";
import { MusicRepository } from "../data/repository/music.repository";
import { MusicService } from "../data/services/music-api.service";
import { Music } from "../data/models/muisc.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ViewAllMusicsUseCase {
    repo: MusicRepository
    
    constructor(service: MusicService){
        this.repo = new MusicRepository(service)
    }
    async execute(): Promise<MusicDTO[] | null> {
        const response: Music[] | null = await firstValueFrom(this.repo.getAll());
        
        if (response !== null) {
            const musicDTOs = response.map(music => 
                new MusicDTO(music.id, music.title, music.gender)
            );
    
            return musicDTOs;
        }
    
        return null;
    }
}
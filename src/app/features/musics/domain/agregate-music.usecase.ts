import { Music } from "../data/models/muisc.model";
import { MusicDTO } from "../data/dtos/music.DTO";
import { MusicRepository } from "../data/repository/music.repository";
import { MusicService } from "../data/services/music-api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AgregateMusicUseCase {
    repo: MusicRepository

    constructor(service: MusicService){
        this.repo = new MusicRepository(service)
    }
    async execute(music: Music): Promise<MusicDTO | null> {
        const response: MusicDTO | null = await this.repo.create(music)
        var data = null
        if (response != null){
            data = new MusicDTO(response.id, response.title, response.gender)
        }
        return data
    }
}
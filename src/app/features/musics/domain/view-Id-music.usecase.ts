import { firstValueFrom } from "rxjs";
import { MusicDTO } from "../data/dtos/music.DTO";
import { MusicRepository } from "../data/repository/music.repository";
import { MusicService } from "../data/services/music-api.service";
import { Injectable } from "@angular/core";
import { Music } from "../data/models/muisc.model";

@Injectable({
    providedIn: 'root'
})
export class ViewOneMusicUseCase {
    private repo: MusicRepository;

    constructor(service: MusicService) {
        this.repo = new MusicRepository(service);
    }
    async execute(id: number): Promise<MusicDTO | null> {
        const response: Music = await firstValueFrom(this.repo.getById(id));

        if (response) {
            const musicDTO = new MusicDTO(response.id, response.title, response.gender);
            return musicDTO;
        }

        return null;
    }

}

import { MusicRepository } from "../data/repository/music.repository";
import { MusicService } from "../data/services/music-api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class DeleteMusicUseCase {
    repo: MusicRepository

    constructor(service: MusicService){
        this.repo = new MusicRepository(service)
    }
    async execute(id: number): Promise<void> {
        try {
            await this.repo.delete(id);
            console.log(`Music with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting music with ID ${id}:`, error);
        }
    }
}
import { Music } from '../models/muisc.model';
import { MusicDTO } from '../dtos/music.DTO';

export class MusicMapper {
    static fromDTO(dto: MusicDTO): Music {
        return new Music(dto.id, dto.title, dto.gender);
    }
  
    static toDTO(music: Music): MusicDTO {
        return new MusicDTO(0, music.title, music.gender);
    }     
}
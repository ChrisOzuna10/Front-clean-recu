import { TestBed } from '@angular/core/testing';
import { MusicService } from './music-api.service';

describe('MusicApiService', () => {
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

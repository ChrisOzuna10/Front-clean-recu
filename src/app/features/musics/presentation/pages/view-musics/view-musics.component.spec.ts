import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicsComponent } from './view-musics.component';

describe('ViewMusicsComponent', () => {
  let component: ViewMusicsComponent;
  let fixture: ComponentFixture<ViewMusicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMusicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

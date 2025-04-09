import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneMusicComponent } from './view-one-music.component';

describe('ViewOneMusicComponent', () => {
  let component: ViewOneMusicComponent;
  let fixture: ComponentFixture<ViewOneMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOneMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

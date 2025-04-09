import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMusicsComponent } from './view-all-musics.component';

describe('ViewAllMusicsComponent', () => {
  let component: ViewAllMusicsComponent;
  let fixture: ComponentFixture<ViewAllMusicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllMusicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

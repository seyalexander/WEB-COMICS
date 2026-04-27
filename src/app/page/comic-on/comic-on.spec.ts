import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicOn } from './comic-on';

describe('ComicOn', () => {
  let component: ComicOn;
  let fixture: ComponentFixture<ComicOn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicOn],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicOn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

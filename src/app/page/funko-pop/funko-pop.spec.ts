import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoPop } from './funko-pop';

describe('FunkoPop', () => {
  let component: FunkoPop;
  let fixture: ComponentFixture<FunkoPop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoPop],
    }).compileComponents();

    fixture = TestBed.createComponent(FunkoPop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

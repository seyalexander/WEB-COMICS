import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponents } from './nav-components';

describe('NavComponents', () => {
  let component: NavComponents;
  let fixture: ComponentFixture<NavComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

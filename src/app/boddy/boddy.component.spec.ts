import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodDyComponent } from './boddy.component';

describe('BoddyComponent', () => {
  let component: BodDyComponent;
  let fixture: ComponentFixture<BodDyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodDyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodDyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

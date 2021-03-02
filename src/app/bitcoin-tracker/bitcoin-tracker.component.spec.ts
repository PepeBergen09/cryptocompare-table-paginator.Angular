import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinTrackerComponent } from './bitcoin-tracker.component';

describe('BitcoinTrackerComponent', () => {
  let component: BitcoinTrackerComponent;
  let fixture: ComponentFixture<BitcoinTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

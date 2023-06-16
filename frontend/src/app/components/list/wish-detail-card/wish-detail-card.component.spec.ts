import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishDetailCardComponent } from './wish-detail-card.component';

describe('WishDetailCardComponent', () => {
  let component: WishDetailCardComponent;
  let fixture: ComponentFixture<WishDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { CardPageComponent } from './card.component';

describe('CardPageComponent', () => {
  let component: CardPageComponent;
  let fixture: ComponentFixture<CardPageComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [CardPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

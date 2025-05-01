import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAppBarPageComponent } from './top-app-bar.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopAppBarPageComponent', () => {
  let component: TopAppBarPageComponent;
  let fixture: ComponentFixture<TopAppBarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAppBarPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopAppBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

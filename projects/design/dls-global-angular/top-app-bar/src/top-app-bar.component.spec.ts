import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopAppBarComponent } from './top-app-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('TopAppBarComponent', () => {
  let component: TopAppBarComponent;
  let fixture: ComponentFixture<TopAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopAppBarComponent, MatTabsModule, MatIconModule, MatButtonModule, MatToolbarModule],
      providers: [
        provideAnimations(),
        provideRouter([])
      ],  
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});

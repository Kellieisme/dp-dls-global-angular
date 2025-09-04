import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopAppBarComponent } from './top-app-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('TopAppBarComponent', () => {
  let component: TopAppBarComponent;
  let fixture: ComponentFixture<TopAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        BrowserAnimationsModule,
        TopAppBarComponent, 
        MatTabsModule, 
        MatIconModule, 
        MatButtonModule, 
        MatToolbarModule 
      ],
      providers: [
        provideAnimations(),
        provideRouter([]),
      ],  
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is truthy (exists)
  });

  it('should display the application name', () => {
    component.appName = 'Test App'; // Set the appName input property
    fixture.detectChanges(); // Trigger change detection to update the view
    const titleElement = fixture.debugElement.query(By.css('.top-app-bar__title-low')); // Query for the title element
    expect(titleElement.nativeElement.textContent).toContain('Test App'); // Assert that the title contains the expected text
  });

  it('should display the application logo when provided', () => {
    component.appLogo = 'test-logo'; // Set the appLogo input property
    fixture.detectChanges(); // Trigger change detection to update the view
    const logoElementDark = fixture.debugElement.query(By.css('.top-app-bar__app-icon--dark')); // Query for the dark logo element
    const logoElementLight = fixture.debugElement.query(By.css('.top-app-bar__app-icon--light')); // Query for the light logo element
    expect(logoElementDark.nativeElement.src).toContain('test-logo_TopAppBar_dark.svg'); // Assert that the dark logo source is correct
    expect(logoElementLight.nativeElement.src).toContain('test-logo_TopAppBar_light.svg'); // Assert that the light logo source is correct
  });

  it('should not display the logo when appLogo is empty', () => {
    component.appLogo = ''; // Set the appLogo input property to an empty string
    fixture.detectChanges(); // Trigger change detection to update the view
    const logoElement = fixture.debugElement.query(By.css('.top-app-bar__logo-section img')); // Query for the logo image element
    expect(logoElement).toBeNull(); // Assert that the logo element is null (not displayed)
  });

  it('should navigate to home route when logo is clicked', () => {
    component.homeRoute = '/home'; // Set the homeRoute input property
    fixture.detectChanges(); // Trigger change detection to update the view
    const logoLink = fixture.debugElement.query(By.css('.top-app-bar__logo-section a')); // Query for the logo link element
    expect(logoLink.nativeElement.getAttribute('ng-reflect-router-link')).toBe('/home'); // Assert that the router link is correct
  });

  it('should show hamburger menu button when hamburgerMenuOnly is true', () => {
    component.hamburgerMenuOnly = true; // Set the hamburgerMenuOnly input property to true
    fixture.detectChanges(); // Trigger change detection to update the view
    const hamburgerButton = fixture.debugElement.query(By.css('.top-app-bar__icon-menu-button')); // Query for the hamburger button element
    expect(hamburgerButton).toBeTruthy(); // Assert that the hamburger button is present
  });

  it('should not show hamburger menu button when hamburgerMenuOnly is false', () => {
    component.hamburgerMenuOnly = false; // Set the hamburgerMenuOnly input property to false
    fixture.detectChanges(); // Trigger change detection to update the view
    const hamburgerButton = fixture.debugElement.query(By.css('.top-app-bar__icon-menu-button')); // Query for the hamburger button element
    expect(hamburgerButton).toBeNull(); // Assert that the hamburger button is not present
  });

  it('should apply centered class when menuAlignCenter is true', () => {
    component.menuAlignCenter = true; // Set the menuAlignCenter input property to true
    fixture.detectChanges(); // Trigger change detection to update the view
    const tabsElement = fixture.debugElement.query(By.css('.top-app-bar__tabs')); // Query for the tabs element
    expect(tabsElement.nativeElement.classList).toContain('top-app-bar__tabs--centered'); // Assert that the centered class is applied
  });

  it('should not apply centered class when menuAlignCenter is false', () => {
    component.menuAlignCenter = false; // Set the menuAlignCenter input property to false
    fixture.detectChanges(); // Trigger change detection to update the view
    const tabsElement = fixture.debugElement.query(By.css('.top-app-bar__tabs')); // Query for the tabs element
    expect(tabsElement.nativeElement.classList).not.toContain('top-app-bar__tabs--centered'); // Assert that the centered class is not applied
  });

  it('should display tabs when topAppBarMenu has items', () => {
    component.hamburgerMenuOnly = false; // Ensure this is false to show tabs
    component.topAppBarMenu = [{ label: 'Tab 1', path: '/tab1' }, { label: 'Tab 2', path: '/tab2' }]; // Set the topAppBarMenu input property
    fixture.detectChanges(); // Trigger change detection to update the view
    
    const tabGroup = fixture.debugElement.query(By.css('mat-tab-group')); // Query for the tab group element
    expect(tabGroup).toBeTruthy(); // Ensure the tab group is present

    // Access the tab elements directly from the tabGroup's nativeElement
    const tabs = tabGroup.nativeElement.querySelectorAll('.mdc-tab'); // Query for divs with class mdc-tab
    
    expect(tabs.length).toBe(2); // Assert that there are 2 tabs
    expect(tabs[0].querySelector('.mdc-tab__text-label').textContent.trim()).toBe('Tab 1'); // Assert that the first tab label is correct
    expect(tabs[1].querySelector('.mdc-tab__text-label').textContent.trim()).toBe('Tab 2'); // Assert that the second tab label is correct
  });

  it('should not display more than 6 tabs', () => {
    component.topAppBarMenu = Array.from({ length: 10 }, (_, i) => ({ label: `Tab ${i + 1}`, path: `/tab${i + 1}` })); // Create 10 tabs
    fixture.detectChanges(); // Trigger change detection to update the view
    const tabGroup = fixture.debugElement.query(By.css('mat-tab-group')); // Query for the tab group element

    // Access the tab elements directly from the tabGroup's nativeElement
    const tabs = tabGroup.nativeElement.querySelectorAll('.mdc-tab'); // Query for divs with class mdc-tab
    
    expect(tabs.length).toBe(6); // Assert that only 6 tabs are displayed
  });

  it('should not display tabs when topAppBarMenu is empty', () => {
    component.topAppBarMenu = []; // Set the topAppBarMenu input property to an empty array
    fixture.detectChanges(); // Trigger change detection to update the view
    const tabGroup = fixture.debugElement.query(By.css('mat-tab-group')); // Query for the tab group element
    const tabs = tabGroup.nativeElement.querySelectorAll('.mdc-tab'); // Query for divs with class mdc-tab
    expect(tabs.length).toBe(0); // Assert that no tabs are displayed
  });
});
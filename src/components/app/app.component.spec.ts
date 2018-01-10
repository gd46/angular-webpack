import {TestBed, ComponentFixture, inject, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Component: Login', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
   
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

  });

  it('should create an instance of app component', () => {
    expect(component).toBeDefined();
  });

  it('should have an h1 title', () => {
     const h1El = fixture.debugElement.query(By.css('h1'));
     expect(h1El.nativeElement.innerText).toEqual('Welcome to Momentz4Ever');
  });

  it('should have an h3 subtitle', () => {
     const h3El = fixture.debugElement.query(By.css('h3'));
     expect(h3El.nativeElement.innerHTML).toEqual('Hello from app component');
  });

});
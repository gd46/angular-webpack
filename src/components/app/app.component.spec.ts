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

    // submitEl = fixture.debugElement.query(By.css('button'));
    // loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    // passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('should test specs is working', () => {
    expect(true).toEqual(true);
  });

});
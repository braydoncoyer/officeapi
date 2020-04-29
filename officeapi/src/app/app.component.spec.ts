import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component, Input} from '@angular/core';
import {ApiService} from './services/api.service';
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'prism-block',
  template: ' '
})
class MockPrismComponent {
  @Input() code: any;
}

class MockAPIService {
  get(url: string) {

  }
}

describe('AppComponent', () => {

  let service;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        AppComponent, MockPrismComponent
      ],
      providers: [{provide: ApiService, useClass: MockAPIService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ApiService);
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call the api service on ngOnInit', () => {
    const spy = spyOn(service, 'get').and.returnValue(of(null));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should populate the response property after calling the service on ngOnInit', () => {
    const dummyData = {
      value: 'some value'
    };

    spyOn(service, 'get').and.returnValue(of(dummyData));
    component.ngOnInit();
    expect(component.response).toEqual(dummyData);
  });

  it('should call the api Service when fetchData is called', () => {
    const spy = spyOn(service, 'get').and.returnValue(of(null));
    component.fetchData();
    expect(spy).toHaveBeenCalled();
  });

  it('should set the response property to the result if the result has less than 5 items', () => {
    const dummyData = [
      {
      value: 'some value'
      },
      {
      value: 'some other value'
      },
      {
        value: 'the third value'
      },
      {
        value: 'the forth value'
      },
    ];

    spyOn(service, 'get').and.returnValue(of(dummyData));
    component.fetchData();
    expect(component.response).toEqual(dummyData);
  });


  it('should set the response property to the first 5 results if the result has more than 10 items', () => {
    const dummyData = [
      {
        value: 'some value'
      },
      {
        value: 'some other value'
      },
      {
        value: 'the third value'
      },
      {
        value: 'the forth value'
      },
      {
        value: 'the fifth value'
      },
      {
        value: 'the sixth value'
      },
      {
        value: 'the seventh value'
      },
      {
        value: 'the 8th value'
      },
      {
        value: 'the 9th value'
      },
      {
        value: 'the 10th value'
      },
      {
        value: 'the 11th value'
      },
    ];

    spyOn(service, 'get').and.returnValue(of(dummyData));
    component.fetchData();
    expect(component.response).toEqual(dummyData.slice(0, 5));
  });

  it('should set the component properties to the appropriate values when suggestionClicked is called', () => {
    spyOn(service, 'get').and.returnValue(of(null));
    component.response = {name: 'test'};
    component.suggestionClicked('a string');
    expect(component.response).toBeNull();
    expect(component.inputValue).toBe('a string');
  });

  it('should call fetchData when suggestionClicked is called', () => {
    const spy = spyOn(component, 'fetchData');
    component.suggestionClicked('a string');
    expect(spy).toHaveBeenCalled();
  });
});

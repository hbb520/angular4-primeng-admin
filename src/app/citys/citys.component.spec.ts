import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitysComponent } from './citys.component';

describe('CitysComponent', () => {
  let component: CitysComponent;
  let fixture: ComponentFixture<CitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbasicsComponent } from './formbasics.component';

describe('FormbasicsComponent', () => {
  let component: FormbasicsComponent;
  let fixture: ComponentFixture<FormbasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

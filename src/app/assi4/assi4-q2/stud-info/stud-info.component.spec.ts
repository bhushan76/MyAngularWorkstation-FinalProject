import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudInfoComponent } from './stud-info.component';

describe('StudInfoComponent', () => {
  let component: StudInfoComponent;
  let fixture: ComponentFixture<StudInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknameComponent } from './bookname.component';

describe('BooknameComponent', () => {
  let component: BooknameComponent;
  let fixture: ComponentFixture<BooknameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

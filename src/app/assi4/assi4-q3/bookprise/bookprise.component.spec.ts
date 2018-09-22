import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpriseComponent } from './bookprise.component';

describe('BookpriseComponent', () => {
  let component: BookpriseComponent;
  let fixture: ComponentFixture<BookpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

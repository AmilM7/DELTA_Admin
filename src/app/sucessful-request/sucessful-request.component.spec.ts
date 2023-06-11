import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulRequestComponent } from './sucessful-request.component';

describe('SucessfulRequestComponent', () => {
  let component: SucessfulRequestComponent;
  let fixture: ComponentFixture<SucessfulRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

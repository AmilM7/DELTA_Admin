import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecificArticleComponent } from './update-specific-article.component';

describe('UpdateSpecificArticleComponent', () => {
  let component: UpdateSpecificArticleComponent;
  let fixture: ComponentFixture<UpdateSpecificArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpecificArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecificArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

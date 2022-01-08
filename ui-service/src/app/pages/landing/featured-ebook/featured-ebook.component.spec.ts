import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedEbookComponent } from './featured-ebook.component';

describe('FeaturedEbookComponent', () => {
  let component: FeaturedEbookComponent;
  let fixture: ComponentFixture<FeaturedEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAPIComponentComponent } from './news-apicomponent.component';

describe('NewsAPIComponentComponent', () => {
  let component: NewsAPIComponentComponent;
  let fixture: ComponentFixture<NewsAPIComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsAPIComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsAPIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

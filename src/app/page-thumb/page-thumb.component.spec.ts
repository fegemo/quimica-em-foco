import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThumbComponent } from './page-thumb.component';

describe('PageThumbComponent', () => {
  let component: PageThumbComponent;
  let fixture: ComponentFixture<PageThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

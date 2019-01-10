import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryQuestComponent } from './chemistry-quest.component';

describe('ChemistryQuestComponent', () => {
  let component: ChemistryQuestComponent;
  let fixture: ComponentFixture<ChemistryQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistryQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

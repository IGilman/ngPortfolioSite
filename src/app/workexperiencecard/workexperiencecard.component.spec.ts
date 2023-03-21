import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperiencecardComponent } from './workexperiencecard.component';

describe('WorkexperiencecardComponent', () => {
  let component: WorkexperiencecardComponent;
  let fixture: ComponentFixture<WorkexperiencecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkexperiencecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkexperiencecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

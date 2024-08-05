import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributePollsComponent } from './contribute-polls.component';

describe('ContributePollsComponent', () => {
  let component: ContributePollsComponent;
  let fixture: ComponentFixture<ContributePollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributePollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributePollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

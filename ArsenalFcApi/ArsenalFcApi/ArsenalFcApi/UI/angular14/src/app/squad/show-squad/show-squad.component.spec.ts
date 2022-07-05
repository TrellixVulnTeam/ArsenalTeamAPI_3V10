import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSquadComponent } from './show-squad.component';

describe('ShowSquadComponent', () => {
  let component: ShowSquadComponent;
  let fixture: ComponentFixture<ShowSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSquadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

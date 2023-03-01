import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtomComponent } from './toggle-buttom.component';

describe('ToggleButtomComponent', () => {
  let component: ToggleButtomComponent;
  let fixture: ComponentFixture<ToggleButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

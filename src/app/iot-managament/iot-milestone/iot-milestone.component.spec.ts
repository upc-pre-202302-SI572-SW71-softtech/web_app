import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotMilestoneComponent } from './iot-milestone.component';

describe('IotMilestoneComponent', () => {
  let component: IotMilestoneComponent;
  let fixture: ComponentFixture<IotMilestoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotMilestoneComponent]
    });
    fixture = TestBed.createComponent(IotMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsDeviceComponent } from './metrics-device.component';

describe('MetricsDeviceComponent', () => {
  let component: MetricsDeviceComponent;
  let fixture: ComponentFixture<MetricsDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricsDeviceComponent]
    });
    fixture = TestBed.createComponent(MetricsDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

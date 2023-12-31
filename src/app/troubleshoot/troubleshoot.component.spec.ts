import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootComponent } from './troubleshoot.component';

describe('TroubleshootComponent', () => {
  let component: TroubleshootComponent;
  let fixture: ComponentFixture<TroubleshootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroubleshootComponent]
    });
    fixture = TestBed.createComponent(TroubleshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

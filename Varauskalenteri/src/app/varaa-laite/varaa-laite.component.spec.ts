import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaraaLaiteComponent } from './varaa-laite.component';

describe('VaraaLaiteComponent', () => {
  let component: VaraaLaiteComponent;
  let fixture: ComponentFixture<VaraaLaiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaraaLaiteComponent]
    });
    fixture = TestBed.createComponent(VaraaLaiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

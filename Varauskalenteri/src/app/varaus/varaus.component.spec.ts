import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarausComponent } from './varaus.component';

describe('VarausComponent', () => {
  let component: VarausComponent;
  let fixture: ComponentFixture<VarausComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VarausComponent]
    });
    fixture = TestBed.createComponent(VarausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalenteriComponent } from './kalenteri.component';

describe('KalenteriComponent', () => {
  let component: KalenteriComponent;
  let fixture: ComponentFixture<KalenteriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KalenteriComponent]
    });
    fixture = TestBed.createComponent(KalenteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

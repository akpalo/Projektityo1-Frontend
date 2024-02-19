import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaitteetComponent } from './laitteet.component';

describe('LaitteetComponent', () => {
  let component: LaitteetComponent;
  let fixture: ComponentFixture<LaitteetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaitteetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaitteetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

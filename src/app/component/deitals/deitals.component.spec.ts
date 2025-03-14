import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeitalsComponent } from './deitals.component';

describe('DeitalsComponent', () => {
  let component: DeitalsComponent;
  let fixture: ComponentFixture<DeitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeitalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

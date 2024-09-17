import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLibComponent } from './pipe-lib.component';

describe('PipeLibComponent', () => {
  let component: PipeLibComponent;
  let fixture: ComponentFixture<PipeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

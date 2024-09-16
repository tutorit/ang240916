import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsMainComponent } from './basics-main.component';

describe('BasicsMainComponent', () => {
  let component: BasicsMainComponent;
  let fixture: ComponentFixture<BasicsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicsMainComponent]
    });
    fixture = TestBed.createComponent(BasicsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch3ComponentComponent } from './ch3-component.component';

describe('Ch3ComponentComponent', () => {
  let component: Ch3ComponentComponent;
  let fixture: ComponentFixture<Ch3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch3ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

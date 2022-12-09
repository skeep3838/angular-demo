import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch5PipeComponent } from './ch5-pipe.component';

describe('Ch5PipeComponent', () => {
  let component: Ch5PipeComponent;
  let fixture: ComponentFixture<Ch5PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch5PipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch5PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

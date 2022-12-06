import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch4DirectiveComponent } from './ch4-directive.component';

describe('Ch4DirectiveComponent', () => {
  let component: Ch4DirectiveComponent;
  let fixture: ComponentFixture<Ch4DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch4DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch4DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

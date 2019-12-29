import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextManagerComponent } from './text-manager.component';

describe('TextManagerComponent', () => {
  let component: TextManagerComponent;
  let fixture: ComponentFixture<TextManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVeOutputComponent } from './input-ve-output.component';

describe('InputVeOutputComponent', () => {
  let component: InputVeOutputComponent;
  let fixture: ComponentFixture<InputVeOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputVeOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputVeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

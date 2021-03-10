import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerhabaComponent } from './merhaba.component';

describe('MerhabaComponent', () => {
  let component: MerhabaComponent;
  let fixture: ComponentFixture<MerhabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerhabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerhabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

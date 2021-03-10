import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitFormComponent } from './kayit-form.component';

describe('KayitFormComponent', () => {
  let component: KayitFormComponent;
  let fixture: ComponentFixture<KayitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

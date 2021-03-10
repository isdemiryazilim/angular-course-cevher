import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciListelemeComponent } from './kullanici-listeleme.component';

describe('KullaniciListelemeComponent', () => {
  let component: KullaniciListelemeComponent;
  let fixture: ComponentFixture<KullaniciListelemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullaniciListelemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciListelemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

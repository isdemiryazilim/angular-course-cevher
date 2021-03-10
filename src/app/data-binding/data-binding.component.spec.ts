import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { By } from '@angular/platform-browser';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inputa yazılan değer ile gösterilen değer aynı olmalı', () => {
    const inp = fixture.debugElement.query(By.css('input')).nativeElement;
    inp.value = 'Ahmet';
    inp.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#mesaj')).nativeElement.textContent).toContain('Ahmet');
  });
});

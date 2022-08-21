import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionComponent } from './animacion.component';

describe('AnimacionComponent', () => {
  let component: AnimacionComponent;
  let fixture: ComponentFixture<AnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

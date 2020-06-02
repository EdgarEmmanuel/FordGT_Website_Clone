import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNavComponent } from './modal-nav.component';

describe('ModalNavComponent', () => {
  let component: ModalNavComponent;
  let fixture: ComponentFixture<ModalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

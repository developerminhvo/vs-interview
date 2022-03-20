import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsHomeComponent } from './vs-home.component';

describe('VsHomeComponent', () => {
  let component: VsHomeComponent;
  let fixture: ComponentFixture<VsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsHomeLayoutComponent } from './vs-home-layout.component';

describe('VsHomeLayoutComponent', () => {
  let component: VsHomeLayoutComponent;
  let fixture: ComponentFixture<VsHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsHomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

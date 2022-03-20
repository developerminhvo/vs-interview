import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsAboutUsLayoutComponent } from './vs-about-us-layout.component';

describe('VsAboutUsLayoutComponent', () => {
  let component: VsAboutUsLayoutComponent;
  let fixture: ComponentFixture<VsAboutUsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsAboutUsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsAboutUsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

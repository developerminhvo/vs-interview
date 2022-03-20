import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsAboutUsComponent } from './vs-about-us.component';

describe('VsAboutUsComponent', () => {
  let component: VsAboutUsComponent;
  let fixture: ComponentFixture<VsAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

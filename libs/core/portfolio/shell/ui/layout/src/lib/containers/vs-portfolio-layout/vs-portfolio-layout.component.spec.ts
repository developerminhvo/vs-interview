import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsPortfolioLayoutComponent } from './vs-portfolio-layout.component';

describe('VsPortfolioLayoutComponent', () => {
  let component: VsPortfolioLayoutComponent;
  let fixture: ComponentFixture<VsPortfolioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsPortfolioLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsPortfolioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

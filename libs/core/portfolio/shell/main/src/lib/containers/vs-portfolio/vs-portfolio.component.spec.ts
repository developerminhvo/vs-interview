import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsPortfolioComponent } from './vs-portfolio.component';

describe('VsPortfolioComponent', () => {
  let component: VsPortfolioComponent;
  let fixture: ComponentFixture<VsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

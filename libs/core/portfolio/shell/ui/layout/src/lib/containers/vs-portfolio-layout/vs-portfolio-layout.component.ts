import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-portfolio-layout',
  templateUrl: './vs-portfolio-layout.component.html',
  styleUrls: ['./vs-portfolio-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsPortfolioLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

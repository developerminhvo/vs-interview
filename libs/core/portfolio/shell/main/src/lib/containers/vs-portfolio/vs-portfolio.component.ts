import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-portfolio',
  templateUrl: './vs-portfolio.component.html',
  styleUrls: ['./vs-portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

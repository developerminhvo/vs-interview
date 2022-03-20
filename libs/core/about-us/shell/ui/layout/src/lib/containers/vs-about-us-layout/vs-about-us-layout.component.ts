import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-about-us-layout',
  templateUrl: './vs-about-us-layout.component.html',
  styleUrls: ['./vs-about-us-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsAboutUsLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-about-us',
  templateUrl: './vs-about-us.component.html',
  styleUrls: ['./vs-about-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsAboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

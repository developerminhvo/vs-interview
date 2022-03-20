import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-home-layout',
  templateUrl: './vs-home-layout.component.html',
  styleUrls: ['./vs-home-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsHomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

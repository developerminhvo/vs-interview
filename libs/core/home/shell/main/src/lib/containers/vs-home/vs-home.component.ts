import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-home',
  templateUrl: './vs-home.component.html',
  styleUrls: ['./vs-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

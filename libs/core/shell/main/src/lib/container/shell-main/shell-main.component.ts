import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vs-main-shell',
  templateUrl: './shell-main.component.html',
  styleUrls: ['./shell-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

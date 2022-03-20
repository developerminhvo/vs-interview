import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {} from '@core-home'
@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'vs-interview';
}

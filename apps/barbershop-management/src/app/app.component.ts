import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'bm-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}

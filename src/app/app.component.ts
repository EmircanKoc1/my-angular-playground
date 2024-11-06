import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample1Component } from './custom-card/samples/sample1/sample1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Sample1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-playground';
}

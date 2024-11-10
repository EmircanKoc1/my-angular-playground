import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Sample1Component } from './custom-modal/samples/sample1/sample1.component';
import { Sample1Component } from "./full-dynamic-dialog/samples/sample1/sample1.component";
import { AccordionComponent } from "./custom-accordion/components/accordion/accordion.component";
import { CardComponent } from "./custom-card/components/card/card.component";
// import { Sample1Component } from './custom-navbar/samples/sample1/sample1.component';
// import { Sample1Component } from './custom-card/samples/sample1/sample1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Sample1Component,
    AccordionComponent,
    CardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-playground';
}

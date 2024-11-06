import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardHeaderComponent } from "../../components/card-header/card-header.component";
import { CardContentComponent } from "../../components/card-content/card-content.component";
import { CardTitleComponent } from "../../components/card-title/card-title.component";
import { CardSubTitleComponent } from "../../components/card-sub-title/card-sub-title.component";
import { CardImageDirective } from '../../directives/card-image.directive';

@Component({
  selector: 'app-sample1',
  standalone: true,
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardTitleComponent,
    CardSubTitleComponent,
    CardImageDirective],
})
export class Sample1Component {

}

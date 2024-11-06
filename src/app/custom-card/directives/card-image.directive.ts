import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cCardImage]',
  standalone: true
})
export class CardImageDirective
  implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() size: 'small' | 'large' | 'medium' = 'medium';

  ngAfterViewInit(): void {

    let width: number;
    let heiht: number;

    switch (this.size) {
      case 'small':
        width = 100;
        heiht = 100;
        break;
      case 'medium':
        width = 200;
        heiht = 200;
        break;

      case 'large':
        width = 400;
        heiht = 400;
        break;

    }

    this.renderer.setStyle(this.elementRef.nativeElement, "width", `${width}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, "height", `${heiht}px`);

  }






}

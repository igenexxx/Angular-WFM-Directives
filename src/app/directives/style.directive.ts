import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'red';
  @Input() dStyle: {
    border?: string;
    borderRadius?: string;
    fontWeight?: string;
  };

  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostBinding('style.color') elColor = null;

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.elColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight);
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.elColor = null;
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
  }
}

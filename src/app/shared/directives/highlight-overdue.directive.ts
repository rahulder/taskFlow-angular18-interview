import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOverdue]',
  standalone: true,
})
export class HighlightOverdueDirective {
  @Input() highLightOverdue!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (new Date(this.highLightOverdue) < new Date()) {
      this.el.nativeElement.style.backgroundColor = '#ffe6e6'; // light red color
    }
  }
}

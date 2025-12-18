import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true,
})
export class PriorityColorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value === 'High'
      ? 'danger'
      : value === 'Medium'
      ? 'warning'
      : 'success';
  }
}

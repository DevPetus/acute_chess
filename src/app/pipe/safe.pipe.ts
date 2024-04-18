import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  /** WARNING: HTML CONTEXT ONLY */
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.sanitizer.sanitize(SecurityContext.HTML, value ?? '');
  }

}

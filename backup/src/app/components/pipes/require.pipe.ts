import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'require'
})
export class RequirePipe implements PipeTransform {

  transform(value: string): string {
    return `${value}*`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(strangerthings:Content[], typeInput?: string): Content[] {
    return  strangerthings.filter(character =>{
      return !character.type?.length || character.type =="Superhuman" || character.type =="Human" || character.type =="All" ;

    })
  }

}

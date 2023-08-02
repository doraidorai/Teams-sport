import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

// function Reverse Chaine de characters. (appel via name, in this Case is: reverse (line 4(look up :))))

  transform(ch:string) {
    let result='';
    for (let i = 0; i < ch.length; i++) {
      result= ch[i]+ result;
      
    }
    return result;
  }

}

/*   or
---or----
let i= ch.length -1 ; i>0; i--
result= result+ ch[i];
*/

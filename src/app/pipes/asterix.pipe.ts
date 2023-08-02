import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
  // nice name-_- , meaning like Transform voyelles into star symbol *
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    let result= '';
    let voy=['a','o','i','u','y','e','A','O','I','U','Y'];
    for (let i = 0; i < ch.length; i++) {
      let x= ch[i];

      for (let j = 0; j < voy.length; j++) {
        if (ch[i] == voy[j]) {
          x='*';
          break;
        }
        result= result + x; 
      }
      
    }
    return result;
  }

}
// function suppEspace(ch) {
//   let result="";
//   let X=["  hello coroco coder "];
//   let Y=["hello.coroco.coder."];
//   for (let i = 0; i < ch.length; i++) {
//     if (ch[i]==X) {
//       result=Y[i];
//     }
    
//   }
// }


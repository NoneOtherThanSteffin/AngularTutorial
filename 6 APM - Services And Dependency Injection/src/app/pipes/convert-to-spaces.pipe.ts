import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
/*Need to register this pipe in AppModule Declaration to use it across child of AppModule*/
export class ConvertToSpaces implements PipeTransform {
  /* Method takes String value from HTML as a first parameter */
  /* 2nd Parameter takes value which needs to be converted to space */
  /* Method can contain more than 2 parameter. Need to use string[] for multiple args*/
  transform(value: string, character: string): string {
    value = value.replace(character, ' ');
    return value;
  }

}

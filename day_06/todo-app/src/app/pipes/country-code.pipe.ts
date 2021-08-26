import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  pure : true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: string, countryName : string): string {
    switch (countryName) {
      case 'USA':
        return "+1 " + value
      case 'AUS':
        return "+12 " + value
      case 'EUR':
        return "+3 " + value
      default:
        return "+91" + value;
    }
  }

}

// filtering the array
// sorting the data

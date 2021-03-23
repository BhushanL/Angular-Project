import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bhushSearch'
})
export class BhushSearchPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {





    return value.filter(function (search: any) {
      return search.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

  }



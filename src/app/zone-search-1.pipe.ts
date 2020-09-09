import { Pipe, PipeTransform } from '@angular/core';
import { ZoneModel } from './zone-model';

@Pipe({
  name: 'zoneSearch1'
})
export class ZoneSearch1Pipe implements PipeTransform {

  transform(zones: ZoneModel[], searchText: string): any[] {
    if (!zones) return [];
    if (!searchText) return zones;
    searchText = searchText.toLowerCase();
    return zones.filter(
      (data: ZoneModel) => {
        return data.zonename.toLowerCase().includes(searchText);
      }
    );
  }

}

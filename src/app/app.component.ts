import { Component } from '@angular/core';
import { ZoneModel } from './zone-model';
import { ZoneService } from './zone.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp5';
  searchTextInput = new FormControl('');
  zones: ZoneModel[] = [];
  tablezones: ZoneModel[] = [];

  constructor(private zoneService: ZoneService) {
  }

  ngOnInit() {
    this.zoneService.GetAllZone().subscribe((data: ZoneModel[]) => {
      this.zones = data;
      this.tablezones = data;
    });
    this.searchTextInput.valueChanges.subscribe((data: string) => {
      console.log(data);
      if (data.toString().trim() === '') {
        this.tablezones = this.zones;
      } else {
        if (this.zones.filter(element => element.zonename.toLowerCase().includes(data.toLowerCase())).length === 0) {
          this.tablezones = this.zones;
        } else {
          this.tablezones = this.zones.filter(element => element.zonename.toLowerCase().includes(data.toLowerCase()));
        }
      }
    });
  }
}

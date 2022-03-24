import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  geoData:any = {}
  errorMsg: string = "";
  data : any = {ip:""}
  constructor(
		private APIService : APIService
  ) {}

  ngOnInit(): void {
    this.get_geo_data(this.data.ip);
  }

  get_geo_data(ip:string) {
    this.errorMsg=""
    this.APIService.get_geo_data(ip).then(response => {
      this.geoData = response;
    }, err => {
      this.errorMsg = err.message;
    });
  }
  

}

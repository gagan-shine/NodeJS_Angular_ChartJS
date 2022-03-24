import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})


  export class APIService{

  private baseURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) { }


  get_geo_data(ip: string) {
    var url = this.baseURL + 'get_geo_location'
    url  = (ip && ip!='') ? url+'/'+ip : url
    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
        .subscribe(
          (response: any) => {
            if (response.status == "200") {
              resolve(response.data);
            } else {
              reject(response.data);
              return;
            }
          },
          (err) => {
            console.log("error ------- ", err);
            reject(err);
            return;
          }
        );
    });
  }

  get_population() {
    var url = this.baseURL + 'get_population'
    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
        .subscribe(
          (response: any) => {
            if (response.status == "200") {
              resolve(response.data);
            } else {
              reject(response.data);
              return;
            }
          },
          (err) => {
            console.log("error ------- ", err);
            reject(err);
            return;
          }
        );
    });
  }

  get_exchange_rates() {
    var url = this.baseURL + 'get_exchange_rates'
    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
        .subscribe(
          (response: any) => {
            if (response.status == "200") {
              resolve(response.data);
            } else {
              reject(response.data);
              return;
            }
          },
          (err) => {
            console.log("error ------- ", err);
            reject(err);
            return;
          }
        );
    });
  }

  logout() {
    localStorage.removeItem('adminAccessToken');
    localStorage.removeItem('admin');
  }
}
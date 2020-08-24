import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ZoneModel } from './zone-model';
import { MaxCodeModel } from './max-code-model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ZoneService {

  API_PROTOCOL: string = 'http';
  API_HOST: string = 'localhost';
  API_PORT: string = '3000';
  BASE_URL: string = this.API_PROTOCOL + '://' + this.API_HOST + ':' + this.API_PORT;
  GET_ALL_ZONE_URL: string = this.BASE_URL + '/zone/get/all';
  GET_ONE_ZONE_URL: string = this.BASE_URL + '/zone/put/one/';
  GET_ZONE_MAX_CODE_URL: string = this.BASE_URL + '/zone/get/maxadvzonecode';
  POST_ONE_ZONE_URL: string = this.BASE_URL + '/zone/post/one';
  PUT_ONE_ZONE_URL: string = this.BASE_URL + '/zone/put/one/';
  DELETE_ONE_ZONE_URL: string = this.BASE_URL + '/zone/delete/one/';

  constructor(private httpClient: HttpClient) { }

  GetAllZone() {
    return this.httpClient.get<ZoneModel[]>(this.GET_ALL_ZONE_URL);
  }

  GetOneZone(code: number) {
    return this.httpClient.get<ZoneModel>(this.GET_ONE_ZONE_URL + code);
  }

  // DeleteOneZone(code: number) {
  //   return this.httpClient.delete<ZoneModel[]>(this.DELETE_ONE_ZONE_URL + code);
  // }

  CreateOneZone(newZone: ZoneModel) {
    return this.httpClient.post<ZoneModel>(this.POST_ONE_ZONE_URL, newZone, headerOption);
  }

  // UpdateOneZone(newZone: ZoneModel) {
  //   return this.httpClient.put<ZoneModel[]>(this.PUT_ONE_ZONE_URL, newZone, headerOption);
  // }

  GetMaxCode(){
    return this.httpClient.get<MaxCodeModel>(this.GET_ZONE_MAX_CODE_URL);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44336/api"
  readonly PhotoUrl = "https://localhost:44336/Photos/"
  constructor(private http:HttpClient) {}

  getSquadList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Squad/GetAllSquads');
  }

  getPositionList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Position/GetAllPositions');
  }
  
  getPlayerList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Player');
  }

  addPlayer(val:any) {
    return this.http.post(this.APIUrl+'/Player', val)
  }

  updatePlayer(val:any) {
    return this.http.put(this.APIUrl+'/Player', val)
  }
  
  deletePlayer(val:any) {
    return this.http.delete(this.APIUrl+'/Player/'+ val)
  }

  UploadPhoto(val:any) {
    return this.http.post(this.APIUrl+'/Player/SaveFile', val);
  }

  getAllSquadNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Player/GetAllSquadNames');
  }
}

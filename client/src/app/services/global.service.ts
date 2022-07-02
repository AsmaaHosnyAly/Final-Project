import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag : boolean = true
  url = "http://localhost:3000"
  constructor(private http : HttpClient) { }

  getEvents():Observable<any>{
    return this.http.get(`${this.url}/event/all`)
  }
  getAllService():Observable<any>{
    return this.http.get(`${this.url}/service/all`)
  }
  getManyService():Observable<any>{
    return this.http.get(`${this.url}/service/manyServices`)
  }
  getMyService():Observable<any>{
    return this.http.get(`${this.url}/service/myServices`)
  }
  register(obj: any):Observable<any> {
    return this.http.post(`${this.url}/user/register`, obj)
  }
  login(obj : any):Observable<any>{
    return this.http.post(`${this.url}/user/login`, obj )
  }

  editProfileImage(obj:any) :Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/StoreAccountImages" , obj)
  }
  getGallery():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}

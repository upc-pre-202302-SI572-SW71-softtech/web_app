import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/entities/user";
import {catchError, map, Observable, of} from "rxjs";
import {SignInResponse} from "../model/responses/sign-in-response";
import {AuthRequest} from "../model/requests/auth-request";



@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<SignInResponse>{

  constructor(private httpClient:HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/authentication/sign-in';
  }

  login(user:AuthRequest){
    return super.create(user);
  }
}

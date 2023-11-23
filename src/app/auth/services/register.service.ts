import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {SignInResponse} from "../model/responses/sign-in-response";
import {RegisterResponse} from "../model/responses/register-response";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../model/requests/register-request";

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<RegisterResponse> {

  constructor(private httpClient:HttpClient) {
    super(httpClient);
    this.resourceEndpoint = '/authentication/sign-up';
  }
  register(user:RegisterRequest){
    return super.create(user);
  }
}

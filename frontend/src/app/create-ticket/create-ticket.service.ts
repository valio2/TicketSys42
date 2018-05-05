import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/app.config';
import { IGetCreateTicketResponse } from '../models/responses/get-create-ticket-res';
import { IDecodedToken } from '../models/users/DecodedToken';

@Injectable()
export class CreateTicketService {
  constructor(private http: HttpClient, private appConfig: AppConfig) { }

  public getProjectsAndUsers(username: string): Observable<IGetCreateTicketResponse> {
    return this.http.get(`${this.appConfig.apiUrl}/createTicket?username=${username}`).map((x) => x as IGetCreateTicketResponse);

  }

  public createTicket(ticket: NgForm, user: IDecodedToken): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/createTicket`, {ticket, user});
  }
}

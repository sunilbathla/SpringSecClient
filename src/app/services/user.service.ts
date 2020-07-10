import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Constants } from 'src/constants';
import { Observable } from 'rxjs';
import { ApiReponse } from '../models/api-response';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() :Observable<ApiReponse>{
        return this.http.get<ApiReponse>(`${Constants.baseURL}/person/details`);
    }

    register(user: User) {
        return this.http.post(`${Constants.baseURL}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${Constants.baseURL}/users/${id}`);
    }
}
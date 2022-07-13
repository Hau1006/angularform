import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceName } from './http.service';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
    constructor(private Httpservice: ServiceName) { }
    API = ''
    token = ''
    getdata = (param: string): Observable<any> => {
        return this.Httpservice.getdata(this.API + 'search?q=' + param, {
            token: this.token
        })

    }

}
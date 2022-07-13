// a-service-httpclient
// appmodule => route ( child module ) => module component 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceName {
    constructor(private httpClient: HttpClient) { }

    getdata = (url: string, params: any = {}): Observable<any> => {
        return this.httpClient.get<any>(url, { params })

    }
}
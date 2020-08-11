import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { MockRoute } from './contracts/mock-route';
import { Observable, Subscriber } from 'rxjs';
import { StatusCode } from './enums/status-codes';
import { MockSettings } from './contracts/mock-settings';

@Injectable({
    providedIn: 'root'
})
export class HttpMockService {

    public constructor(@Inject('routes') private readonly routes: MockRoute[], @Inject('config') private readonly config: MockSettings) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const mock = this.getMock(request);
        if (!mock) {
            return next.handle(request);
        }

        if (this.config.shouldLog) {
            console.log('mock found:', mock);
        }
        
        return new Observable<any>((creator: Subscriber<any>) => {
            creator.next(new HttpResponse({
                body: mock.response,
                status: mock.status,
                statusText: StatusCode[mock.status],
                url: request.url
            }));
            creator.complete();
        });
    }

    private getMock(request: HttpRequest<any>): MockRoute | undefined {
        return this.routes.find((mockRoute: MockRoute) => {
            if (mockRoute.method !== request.method) {
                return false;
            }
            return request.url.match(mockRoute.url)[0].length === request.url.length;
        });
    }
}

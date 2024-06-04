import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { MockRoute, MockSettings } from './httpmock';
import { Observable, of } from 'rxjs';
import { StatusCode } from './statuscodes';

@Injectable({
  providedIn: 'root'
})
export class HttpMockService {

  public constructor(@Inject('routes') private readonly routes: MockRoute[], @Inject('config') private readonly config: MockSettings) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mock = this.getMock(request);
    if (!mock) {
      this.log('Http Mock - No mock found');
      return next.handle(request);
    }

    if (this.config.enableLogging) {
      this.log('Http Mock - Mocking Request :', mock);
    }

    return of(new HttpResponse({
      body: mock.response,
      status: mock.status,
      statusText: StatusCode[mock.status],
      url: request.url
    }));
  }

  private getMock(request: HttpRequest<any>): MockRoute | undefined {
    return this.routes.find(mock => mock.method === request.method && request.url.match(mock.url));
  }

  private log(message?: any, ...optionalParams: any[]): void {
    if (this.config.enableLogging) {
      console.log(message, ...optionalParams);
    }
  }
}

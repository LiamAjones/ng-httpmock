import { NgModule, ModuleWithProviders } from '@angular/core';
import { MockSettings } from './contracts/mock-settings';
import { MockRoute } from './contracts/mock-route';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockService } from './ng-httpmock.service';
import { Rx } from 'rxjs/Rx';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpMockService,
            multi: true
        }
    ]
})
export class HttpMockModule {
    public static forRoot(routes: MockRoute[]): ModuleWithProviders;
    public static forRoot(routes: MockRoute[], settings: MockSettings = new MockSettings()): ModuleWithProviders {
        return {
            ngModule: HttpMockModule,
            providers: [
                {
                    provide: 'routes',
                    useValue: routes
                },
                {
                    provide: 'config',
                    useValue: settings
                }
            ]
        }
    }
}


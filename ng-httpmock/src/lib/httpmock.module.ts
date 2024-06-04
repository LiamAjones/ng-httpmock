import { ModuleWithProviders, NgModule } from "@angular/core";
import { MockRoute, MockSettings } from "./httpmock";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpMockService } from "./httpmock.service";

const DEFAULT_SETTINGS : MockSettings = {
  enableLogging: true
}

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
  public static forRoot(routes: MockRoute[], settings: MockSettings) : ModuleWithProviders<HttpMockModule>;
  public static forRoot(routes: MockRoute[], settings: MockSettings = DEFAULT_SETTINGS): ModuleWithProviders<HttpMockModule> {
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

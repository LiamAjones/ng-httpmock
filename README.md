# ng-httpmock

This is a library for mocking http requests in angular.

# Usage
Install the package
```cli
npm i ng-httpmock
```

Declare an array of mock routes
and import the module into your AppModule
```typescript
import { StatusCodes } from 'ng-httpmock';

const ROUTES: MockRoute[] = [
    {
        url: 'api/values',
        method: 'GET',
        response: ['value 1', 'value 2'],
        status: StatusCode.OK,
    }
];

@Module({
    imports: [
        HttpMockModule.forRoot(ROUTES)
    ]
})
```
The response can be any object
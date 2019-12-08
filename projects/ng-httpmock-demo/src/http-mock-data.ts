import { MockRoute, StatusCode } from 'ng-httpmock';

export const routes: MockRoute[] = [
    {
        url: 'api/values',
        response: '1',
        method: 'GET',
        status: StatusCode.OK
    }
];

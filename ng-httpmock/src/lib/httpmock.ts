import { StatusCode } from './statuscodes';

export interface MockRoute {
    url: string | RegExp;
    response: any;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    status: StatusCode;
    delay?: number;
}

export interface MockSettings {
  enableLogging: boolean;
}

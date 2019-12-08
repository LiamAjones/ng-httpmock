import { StatusCode } from '../enums/status-codes';

export interface MockRoute {
    url: string | RegExp;
    response: any;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    status: StatusCode;
    delay?: number;
}

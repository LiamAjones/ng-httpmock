import { TestBed } from '@angular/core/testing';

import { HttpMockService } from './ng-httpmock.service';

describe('NgHttpmockService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: HttpMockService = TestBed.get(HttpMockService);
        expect(service).toBeTruthy();
    });
});

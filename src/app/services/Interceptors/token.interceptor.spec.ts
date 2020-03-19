import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
    let tokenInterceptor: TokenInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        tokenInterceptor = TestBed.inject(TokenInterceptor);
    });

    it('should be created', () => {
        expect(tokenInterceptor).toBeTruthy();
    });
});

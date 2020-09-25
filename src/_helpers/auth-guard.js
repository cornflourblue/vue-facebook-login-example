import { accountService } from '@/_services';

export function authGuard(to, from, next) {
    const account = accountService.accountValue;

    if (!account) {
        // not logged in so redirect to login page with the return url
        return next({ path: '/login', query: { returnUrl: to.fullPath } });
    }

    next();
}
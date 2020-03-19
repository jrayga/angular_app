import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
            headers: req.headers.set(
                "Authorization", `Bearer ${localStorage.getItem("o__token")}`
            )
        });
        return next.handle(cloneReq);
    }
}
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { environment } from "@environments/environment.development";
import { Observable } from "rxjs";

export function requestInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {

  const newReq = req.clone({
    headers: req.headers
      .append('Authorization', `Bearer ${environment.API_KEY}`)
      .append('accept', 'application/json'),
  });

  return next(newReq);
}

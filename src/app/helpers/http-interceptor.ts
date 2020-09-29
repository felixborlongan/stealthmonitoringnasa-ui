import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class StealthMonitoringHttpInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private spinnerService: NgxSpinnerService) {
    
  }      
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    request = request.clone({
        url: environment["apiUrl"] + request.url,
      setHeaders: {
        //Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request).pipe(finalize(() => {
      this.spinnerService.hide();
    }));
  }
}
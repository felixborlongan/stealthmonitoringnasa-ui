import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NASAPhotoExplorerComponent } from './nasaphoto-explorer/nasaphoto-explorer.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StealthMonitoringHttpInterceptor } from './helpers/http-interceptor';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NASAPhotoExplorerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFileUploadModule,
    NgxGalleryModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: StealthMonitoringHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

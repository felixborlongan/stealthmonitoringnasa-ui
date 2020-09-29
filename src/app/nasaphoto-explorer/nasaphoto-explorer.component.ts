import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';    
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nasaphoto-explorer',
  templateUrl: './nasaphoto-explorer.component.html',
  styleUrls: ['./nasaphoto-explorer.component.css']
})
export class NASAPhotoExplorerComponent implements OnInit {
  inputFile: File = null;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
 
  ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailsRemainingCount: true,
                imageAutoPlay: true,
                previewDownload: true,
                previewBullets: true
            }
        ];
 
        this.galleryImages = [];

        this.httpClient.get("test/getimages").toPromise().then(paths => this.galleryImages = _.map(paths, (path) => {
          return { 
            small: `${environment.url}DownloadedImages/${path}`, 
            medium: `${environment.url}DownloadedImages/${path}`,  
            big: `${environment.url}DownloadedImages/${path}`
          }
        }));
    }

  constructor(private httpClient: HttpClient) {


  }
  OnUploadButtonClick(): void {
    let formData = new FormData();
    formData.append("textFile", this.inputFile);

    this.httpClient.post("test/upload", formData).toPromise().then(a => {
      Swal.fire("Success", "Success uploading!", "success");
    }).catch(r => {
      Swal.fire("Error", r, "error");
    }).finally(() => {
      this.ngOnInit();
    });
  }
  OnFileInputChange(files: FileList): void {
    this.inputFile = files.item(0);
  }
}

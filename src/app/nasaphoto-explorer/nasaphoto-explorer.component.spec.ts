import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NASAPhotoExplorerComponent } from './nasaphoto-explorer.component';

describe('NASAPhotoExplorerComponent', () => {
  let component: NASAPhotoExplorerComponent;
  let fixture: ComponentFixture<NASAPhotoExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NASAPhotoExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NASAPhotoExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

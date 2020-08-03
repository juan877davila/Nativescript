import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';


@NgModule({
    imports: [NativeScriptCommonModule, PhotosRoutingModule],
    declarations: [PhotosComponent ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]    
})
export class PhotosModule { }
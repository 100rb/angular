import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SibblingComponentComponent } from './sibbling-component/sibbling-component.component';
import { SibblingComponent1Component } from './sibbling-component1/sibbling-component1.component';
import { FormsModule } from '@angular/forms';
import { ConvertStringPipe } from './pipe/convert-string.pipe';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { SearchPipe } from './pipe/search.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomStyleDirectiveDirective } from './directives/custom-style-directive.directive';
import { RequestInterceptor } from './interceptor/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    SibblingComponentComponent,
    SibblingComponent1Component,
    ConvertStringPipe,
    PipeComponentComponent,
    SearchPipe,
    CustomStyleDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

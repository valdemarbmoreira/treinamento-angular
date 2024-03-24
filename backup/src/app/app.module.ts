import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { OneWayComponent } from './components/one-way/one-way.component';
import { InputComponent } from './components/input/input.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './components/output/output.component';
import { AttributeComponent } from './components/diretivas/angular/attribute/attribute.component';
import { StructuralComponent } from './components/diretivas/angular/structural/structural.component';
import { CustomDirective } from './components/diretivas/custom/custom.directive';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './services/movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { RequirePipe } from './components/pipes/require.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    OneWayComponent,
    InputComponent,
    TwoWayComponent,
    OutputComponent,
    AttributeComponent,
    StructuralComponent,
    CustomDirective,
    MovieComponent,
    NotFoundComponent,
    RequirePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MapperService } from './services/mapper.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificarComponent } from './components/verificar/verificar.component';

import { AppRoutingModule } from './app-routing.module';
import { ConfigurarComponent } from './components/configurar/configurar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerificarComponent,
    ConfigurarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MapperService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CargoControllerService } from './services/cargo-controller.service';
import { CargosEmpleadoControllerService } from './services/cargos-empleado-controller.service';
import { CodigoTrabajoControllerService } from './services/codigo-trabajo-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EmpleadoCargosControllerService } from './services/empleado-cargos-controller.service';
import { EmpleadoVacacionesControllerService } from './services/empleado-vacaciones-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { VacacionesControllerService } from './services/vacaciones-controller.service';
import { VacacionesEmpleadoControllerService } from './services/vacaciones-empleado-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CargoControllerService,
    CargosEmpleadoControllerService,
    CodigoTrabajoControllerService,
    EmpleadoControllerService,
    EmpleadoCargosControllerService,
    EmpleadoVacacionesControllerService,
    PingControllerService,
    VacacionesControllerService,
    VacacionesEmpleadoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

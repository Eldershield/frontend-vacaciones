/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'id'>, 'cargosId'>, schemaOptions: { title: 'NewEmpleadoInCargos', exclude: [ 'id' ], optional: [ 'cargosId' ] })
 */
export interface NewEmpleadoInCargos {
  cargoId: string;
  cargosId?: string;
  disponible?: boolean;
  fechaIngreso: string;
  nombre: string;
}

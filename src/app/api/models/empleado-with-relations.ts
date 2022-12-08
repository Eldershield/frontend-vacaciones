/* tslint:disable */
/* eslint-disable */
import { CargosWithRelations } from './cargos-with-relations';
import { VacacionesWithRelations } from './vacaciones-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  cargoId: string;
  cargos?: CargosWithRelations;
  cargosId?: string;
  disponible?: boolean;
  fechaIngreso: string;
  id: string;
  nombre: string;
  vacaciones?: Array<VacacionesWithRelations>;
}

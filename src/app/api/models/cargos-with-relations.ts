/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: CargosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CargosWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  id?: string;
  nombre: string;
}

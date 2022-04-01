import { Proceso } from "./Proceso";

export class FuenteFinanciamiento{
  nombre: String;
  procesos: Proceso[];

  constructor(nombre: string, procesos: Proceso[]){
    this.nombre = nombre;
    this.procesos = procesos;
  }

}


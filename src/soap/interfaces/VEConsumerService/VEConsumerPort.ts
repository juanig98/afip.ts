import { Client } from "soap";
import { SoapAsyncFunc } from "../../../types";

/* tslint:disable:max-line-length no-empty-interface */
export interface IconsultarComunicacionesInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
    filter: VEConsumerPortTypes.Ifilter;
}
/**
 * ***RespuestaPaginada***
 * - **pagina** *(number)*: Página recuperada.
 * - **totalPaginas** *(number)*: Total de páginas requeridas para obtener los resultados completos de la consulta solicitada.
 * - **itemsPorPagina** *(number)*: Cantidad de resultados que devuelve el Sistema por página. El valor máximo permitido es de 500 resultados, pudiendo variar en el tiempo según el rendimiento del Sistema. Debe utilizar “itemsPorPagina” como variable para paginar si totalItems es mayor a itemsPorPagina. Por otro lado el elemento “totalPaginas” le permite controlar cuantas páginas debe recuperar para obtener el total. Se deben realizar tantos Requests Soap como páginas se requieren recuperar.
 * - **totalItems** *(number)*: Cantidad de resultados encontrados para la consulta.
 *
 * ***ItemContainer***
 * - **idComunicacion** *(number)* Id de la Comunicación.
 * - **cuitDestinatario** *(number)*: Cuit del destinatario de la Comunicación.
 * - **fechaPublicacion** *(string)*: Fecha en que se realizo la publicación.
 * - **fechaVencimiento** *(string)*: Fecha que vence la Comunicación.
 * - **sistemaPublicador** *(int)*: Sistema que realizó la publicación.
 * - **sistemaPublicadorDesc** *(string)*: Nombre del Sistema Publicador Si Mis facilidades.
 * - **estado** *(int)*: Estado de la Comunicación (1, 2). 1=No leida, 2=Leida.
 * - **estadoDesc** *(string)*: Descripción del estado de la Comunicación.
 * - **asunto** *(string)*: Asunto de la Comunicación. Solo si la Comunicación no tiene un “asunto” asociado se devuelven los primeros 50 caracteres del mensaje.
 * - **prioridad** *(int)*: Priorización dada por el Publicador. 1=Alta, 2=Media, 3=Baja.
 * - **tieneAdjunto** *(boolean)*: Indica si la Comunicación tiene un adjunto asociado.
 */
export interface IconsultarComunicacionesOutput {
    RespuestaPaginada: VEConsumerPortTypes.IRespuestaPaginada;
}

export interface IconsultarSistemasPublicadoresInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
    /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
    idSistemaPublicador: number;
}

/**
 * ***Sistemas <Sistema>***
 * - **id** *(Integer)*: Identificación del Sistema.
 * - **descripcion** *(String)*: Nombre del Sistema.
 * - **certCN** *(String)*: Common Name para autenticación por SSL cruzado 
 * 
 * ***Subservicios<Subservicio>***
 * - **nombre** *(String)*: Nombre del servicio habilitado
 * - **descripcion** *(String)*: Descripción
 */
export interface IconsultarSistemasPublicadoresOutput {
    Sistemas: VEConsumerPortTypes.ISistemas;
}

export interface IdummyInput { }

export interface IdummyOutput {
    DummyResult: VEConsumerPortTypes.IDummyResult;
}

export interface IconsumirComunicacionInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
    /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
    idComunicacion: number;
    /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:boolean(undefined) */
    incluirAdjuntos: boolean;
}
/**
 * - ***Comunicacion*** {
 * - - **idComunicacion** *(number)*: Id de la Comunicación Si 123456789
 * - - **cuitDestinatario** *(number)*: Cuit del destinatario de la Comunicación.
 * - - **fechaPublicacion** *(string)*: Fecha en que se realizo la publicación.
 * - - **fechaVencimiento** *(string)*: Fecha en que vence la Comunicación.
 * - - **sistemaPublicador** *(number)*: Sistema que realizó la publicación.
 * - - **sistemaPublicadorDesc** *(string)*: Nombre del Sistema Publicador.
 * - - **estado** *(number)*: Estado de la Comunicación (1, 2).
 * - - **estadoDesc** *(string)*: Descripción del estado de la comunicación (No leida, Leida).
 * - - **asunto** *(string)*: Asunto de la Comunicación.
 * - - **Prioridad** *(number)*: Priorizacion dada por el Publicador.
 * - - **tieneAdjunto** *(Boolean)*: Indica si la Comunicación tiene un adjunto asociado.
 * - - **Mensaje** *(string)*: Mensaje contenido en la Comunicación 
 * }
 */
export interface IconsumirComunicacionOutput {
    Comunicacion: VEConsumerPortTypes.IComunicacion;
}

export interface IconsultarEstadosInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
}

/**
 * - **id** *(number)*: Identificación del Estado
 * - **descripcion** *(string)*: Descripción del Estado de la Comunicación 
 */
export interface IconsultarEstadosOutput {
    Estados: VEConsumerPortTypes.IEstados;
}

export interface IVEConsumerPortSoap extends Client {
    consultarComunicaciones: (input: IconsultarComunicacionesInput, cb: (err: any | null, result: IconsultarComunicacionesOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarSistemasPublicadores: (input: IconsultarSistemasPublicadoresInput, cb: (err: any | null, result: IconsultarSistemasPublicadoresOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consumirComunicacion: (input: IconsumirComunicacionInput, cb: (err: any | null, result: IconsumirComunicacionOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarEstados: (input: IconsultarEstadosInput, cb: (err: any | null, result: IconsultarEstadosOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarComunicacionesAsync: SoapAsyncFunc<IconsultarComunicacionesInput, IconsultarComunicacionesOutput>,
    consultarSistemasPublicadoresAsync: SoapAsyncFunc<IconsultarSistemasPublicadoresInput, IconsultarSistemasPublicadoresOutput>,
    dummyAsync: SoapAsyncFunc<IdummyInput, IdummyOutput>,
    consumirComunicacionAsync: SoapAsyncFunc<IconsumirComunicacionInput, IconsumirComunicacionOutput>,
    consultarEstadosAsync: SoapAsyncFunc<IconsultarEstadosInput, IconsultarEstadosOutput>,
}

export namespace VEConsumerPortTypes {
    export interface IauthRequest {
        /** http://core.tecno.afip.gov.ar/model/ws/types#xs:string(undefined) */
        token: string;
        /** http://core.tecno.afip.gov.ar/model/ws/types#xs:string(undefined) */
        sign: string;
        /** http://core.tecno.afip.gov.ar/model/ws/types#xs:long(undefined) */
        cuitRepresentada: number;
    }
    /**
     * Ifilter. 
     * Atributos:
     * 
     * - Estado *(number)* (1): Estado de la Comunicación.
     * - fechaDesde *(string)*: Fecha limite inferior de las Comunicaciones a buscar. No debe ser inferior a 360 días desde la fecha actual. Se debe utilizar el formato de fecha “yyyy-MM-dd”.
     * - fechaHasta *(string)*: Fecha limite superior de las Comunicaciones a buscar. Se debe utilizar el formato de fecha “yyyy-MM-dd”. Debe ser superior a fechaDesde.
     * - comunicacionIdDesde *(number)*: Nro de id de la Comunicación. Rango inferior. La Comunicación no debe ser con fecha de publicación inferior a 360 días desde la fecha actual.
     * - comunicacionIdHasta *(number)*: Nro de id de la Comunicación. Rango superior. La Comunicación no debe ser con fecha de publicación inferior a 360 días desde la fecha actual.
     * - tieneAdjunto *(boolean)*: Devuelve solo las Comunicaciones que tienen asociado un archivo adjunto.
     * - sistemaPublicadorId *(number)* (3): Identificación del sistema publicador. Ver flujo “Consultar Sistemas Publicadores” 
     * - pagina *(number)*: Numero de pagina a obtener. 
     * - resultadosPorPagina *(number)*: Limite de filas a recuperar por consulta 
     * - Referencia1 *(string)* (255): Valor seteado por el usuario/sistema al momento publicar la comunicación con el objeto de distinguirla o identificarla. 
     * - Referencia2 *(string)* (255): Valor seteado por el usuario/sistema al momento de realizar la publicación de la comunicación con el objeto 
     */
    export interface Ifilter {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        estado: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaDesde: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaHasta: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        comunicacionIdDesde: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        comunicacionIdHasta: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:boolean(undefined) */
        tieneAdjunto: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        sistemaPublicadorId: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        pagina: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        resultadosPorPagina: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia1: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia2: string;
    }
    export interface IComunicacionSimplificada {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        idComunicacion: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        cuitDestinatario: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaPublicacion: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaVencimiento: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        sistemaPublicador: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        sistemaPublicadorDesc: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        estado: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        estadoDesc: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        asunto: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        prioridad: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:boolean(undefined) */
        tieneAdjunto: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia1: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia2: string;
    }
    export interface Iitems {
        ComunicacionSimplificada: VEConsumerPortTypes.IComunicacionSimplificada;
    }
    export interface IRespuestaPaginada {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        pagina: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        totalPaginas: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        itemsPorPagina: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        totalItems: number;
        items: VEConsumerPortTypes.Iitems;
    }
    export interface ISubservicio {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        nombre: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        descripcion: string;
    }
    export interface Isubservicios {
        Subservicio: VEConsumerPortTypes.ISubservicio;
    }
    export interface ISistema {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        id: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        descripcion: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        certCNs: string;
        subservicios: VEConsumerPortTypes.Isubservicios;
    }
    export interface ISistemas {
        Sistema: VEConsumerPortTypes.ISistema;
    }
    export interface IDummyResult {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        dbserver: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        appserver: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        authserver: string;
    }
    export interface Iadjunto {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:string(undefined) */
        filename: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:base64Binary(undefined) */
        content: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:boolean(undefined) */
        compressed: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:boolean(undefined) */
        signed: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:boolean(undefined) */
        encrypted: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:boolean(undefined) */
        processed: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:boolean(undefined) */
        public: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:string(undefined) */
        md5: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws#xs:long(undefined) */
        contentSize: number;
    }
    export interface Iadjuntos {
        adjunto: VEConsumerPortTypes.Iadjunto[];
    }
    export interface IComunicacion {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        idComunicacion: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        cuitDestinatario: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaPublicacion: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        fechaVencimiento: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        sistemaPublicador: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        sistemaPublicadorDesc: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        estado: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        estadoDesc: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        asunto: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        prioridad: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:boolean(undefined) */
        tieneAdjunto: boolean;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia1: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        referencia2: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        mensaje: string;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:int(undefined) */
        tiempoDeVida: number;
        adjuntos: VEConsumerPortTypes.Iadjuntos;
    }
    export interface IEstado {
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
        id: number;
        /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:string(undefined) */
        descripcion: string;
    }
    export interface IEstados {
        Estado: VEConsumerPortTypes.IEstado;
    }
}

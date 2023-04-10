import { Client} from "soap";
import { SoapAsyncFunc } from "../../../types";

/* tslint:disable:max-line-length no-empty-interface */
export interface IconsultarComunicacionesInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
    filter: VEConsumerPortTypes.Ifilter;
}

export interface IconsultarComunicacionesOutput {
    RespuestaPaginada: VEConsumerPortTypes.IRespuestaPaginada;
}

export interface IconsultarSistemasPublicadoresInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
    /** http://ve.tecno.afip.gov.ar/domain/service/ws/types#xs:long(undefined) */
    idSistemaPublicador: number;
}

export interface IconsultarSistemasPublicadoresOutput {
    Sistemas: VEConsumerPortTypes.ISistemas;
}

export interface IdummyInput {}

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

export interface IconsumirComunicacionOutput {
    Comunicacion: VEConsumerPortTypes.IComunicacion;
}

export interface IconsultarEstadosInput {
    authRequest: VEConsumerPortTypes.IauthRequest;
}

export interface IconsultarEstadosOutput {
    Estados: VEConsumerPortTypes.IEstados;
}

export interface IVEConsumerPortSoap extends Client {
    consultarComunicaciones: (input: IconsultarComunicacionesInput, cb: (err: any | null, result: IconsultarComunicacionesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarSistemasPublicadores: (input: IconsultarSistemasPublicadoresInput, cb: (err: any | null, result: IconsultarSistemasPublicadoresOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consumirComunicacion: (input: IconsumirComunicacionInput, cb: (err: any | null, result: IconsumirComunicacionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarEstados: (input: IconsultarEstadosInput, cb: (err: any | null, result: IconsultarEstadosOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
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

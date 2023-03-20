import { Client } from "soap";
import { SoapAsyncFunc } from "../../../types";

/* tslint:disable:max-line-length no-empty-interface */
export interface IComprobantesModalidadConsultarInput {
    Auth: ServiceSoap12Types.IAuth;
}

export interface IComprobantesModalidadConsultarOutput {
    ComprobantesModalidadConsultarResult: ServiceSoap12Types.IComprobantesModalidadConsultarResult;
}

export interface IComprobantesTipoConsultarInput {
    Auth: ServiceSoap12Types.IAuth;
}

export interface IComprobantesTipoConsultarOutput {
    ComprobantesTipoConsultarResult: ServiceSoap12Types.IComprobantesTipoConsultarResult;
}

export interface IDocumentosTipoConsultarInput {
    Auth: ServiceSoap12Types.IAuth;
}

export interface IDocumentosTipoConsultarOutput {
    DocumentosTipoConsultarResult: ServiceSoap12Types.IDocumentosTipoConsultarResult;
}

export interface IOpcionalesTipoConsultarInput {
    Auth: ServiceSoap12Types.IAuth;
}

export interface IOpcionalesTipoConsultarOutput {
    OpcionalesTipoConsultarResult: ServiceSoap12Types.IOpcionalesTipoConsultarResult;
}

export interface IComprobanteConstatarInput {
    Auth: ServiceSoap12Types.IAuth;
    CmpReq: ServiceSoap12Types.ICmpReq;
}

export interface IComprobanteConstatarOutput {
    ComprobanteConstatarResult: ServiceSoap12Types.IComprobanteConstatarResult;
}

export interface IComprobanteDummyInput { }

export interface IComprobanteDummyOutput {
    ComprobanteDummyResult: ServiceSoap12Types.IComprobanteDummyResult;
}

export interface IServiceSoap12Soap extends Client {
    ComprobantesModalidadConsultar: (input: IComprobantesModalidadConsultarInput, cb: (err: any | null, result: IComprobantesModalidadConsultarOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobantesModalidadConsultarAsync: SoapAsyncFunc<IComprobantesModalidadConsultarInput, IComprobantesModalidadConsultarOutput>
    ComprobantesTipoConsultar: (input: IComprobantesTipoConsultarInput, cb: (err: any | null, result: IComprobantesTipoConsultarOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobantesTipoConsultarAsync: SoapAsyncFunc<IComprobantesTipoConsultarInput, IComprobantesTipoConsultarOutput>
    DocumentosTipoConsultar: (input: IDocumentosTipoConsultarInput, cb: (err: any | null, result: IDocumentosTipoConsultarOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    DocumentosTipoConsultarAsync: SoapAsyncFunc<IDocumentosTipoConsultarInput, IDocumentosTipoConsultarOutput>
    OpcionalesTipoConsultar: (input: IOpcionalesTipoConsultarInput, cb: (err: any | null, result: IOpcionalesTipoConsultarOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    OpcionalesTipoConsultarAsync: SoapAsyncFunc<IOpcionalesTipoConsultarInput, IOpcionalesTipoConsultarOutput>
    ComprobanteConstatar: (input: IComprobanteConstatarInput, cb: (err: any | null, result: IComprobanteConstatarOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobanteConstatarAsync: SoapAsyncFunc<IComprobanteConstatarInput, IComprobanteConstatarOutput>
    ComprobanteDummy: (input: IComprobanteDummyInput, cb: (err: any | null, result: IComprobanteDummyOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobanteDummyAsync: SoapAsyncFunc<IComprobanteDummyInput, IComprobanteDummyOutput>
}

export namespace ServiceSoap12Types {
    export interface IAuth {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Token: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Sign: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:long(undefined) */
        Cuit: number;
    }
    export interface IFacModTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Cod: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        FchDesde: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        FchHasta: string;
    }
    export interface IErr {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Code: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Msg: string;
    }
    export interface IErrors {
        Err: ServiceSoap12Types.IErr[];
    }
    export interface IEvt {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Code: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Msg: string;
    }
    export interface IEvents {
        Evt: ServiceSoap12Types.IEvt[];
    }
    export interface IComprobantesModalidadConsultarResult {
        ResultGet: {
            FacModTipo: ServiceSoap12Types.IFacModTipo[];
        };
        Errors: ServiceSoap12Types.IErrors;
        Events: ServiceSoap12Types.IEvents;
    }
    export interface ICbteTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Id: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IComprobantesTipoConsultarResult {
        ResultGet: {
            CbteTipo: ServiceSoap12Types.ICbteTipo[];
        };
        Errors: ServiceSoap12Types.IErrors;
        Events: ServiceSoap12Types.IEvents;
    }
    export interface IDocTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IDocumentosTipoConsultarResult {
        ResultGet: {
            DocTipo: ServiceSoap12Types.IDocTipo[];
        };
        Errors: ServiceSoap12Types.IErrors;
        Events: ServiceSoap12Types.IEvents;
    }
    export interface IOpcionalTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IOpcionalesTipoConsultarResult {
        ResultGet: {
            OpcionalTipo: ServiceSoap12Types.IOpcionalTipo[];
        };
        Errors: ServiceSoap12Types.IErrors;
        Events: ServiceSoap12Types.IEvents;
    }
    export interface IOpcional {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Valor: string;
    }
    export interface IOpcionales {
        Opcional: ServiceSoap12Types.IOpcional[];
    }
    export interface ICmpReq {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CbteModo: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:long(undefined) */
        CuitEmisor: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        PtoVta: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        CbteTipo: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:long(undefined) */
        CbteNro: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CbteFch: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:double(undefined) */
        ImpTotal: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CodAutorizacion: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        DocTipoReceptor: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        DocNroReceptor: string;
        Opcionales: ServiceSoap12Types.IOpcionales;
    }
    export interface ICmpResp {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CbteModo: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:long(undefined) */
        CuitEmisor: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        PtoVta: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        CbteTipo: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:long(undefined) */
        CbteNro: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CbteFch: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:double(undefined) */
        ImpTotal: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        CodAutorizacion: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        DocTipoReceptor: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        DocNroReceptor: string;
        Opcionales: ServiceSoap12Types.IOpcionales;
    }
    export interface IObs {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Code: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Msg: string;
    }
    export interface IObservaciones {
        Obs: ServiceSoap12Types.IObs[];
    }
    export interface IComprobanteConstatarResult {
        CmpResp: ServiceSoap12Types.ICmpResp;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Resultado: string;
        Observaciones: ServiceSoap12Types.IObservaciones;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        FchProceso: string;
        Events: ServiceSoap12Types.IEvents;
        Errors: ServiceSoap12Types.IErrors;
    }
    export interface IComprobanteDummyResult {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        AppServer: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        DbServer: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        AuthServer: string;
    }
}

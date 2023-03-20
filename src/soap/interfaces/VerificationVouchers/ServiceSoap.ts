/* tslint:disable:max-line-length no-empty-interface */
export interface IComprobantesModalidadConsultarInput {
    Auth: ServiceSoapTypes.IAuth;
}

export interface IComprobantesModalidadConsultarOutput {
    ComprobantesModalidadConsultarResult: ServiceSoapTypes.IComprobantesModalidadConsultarResult;
}

export interface IComprobantesTipoConsultarInput {
    Auth: ServiceSoapTypes.IAuth;
}

export interface IComprobantesTipoConsultarOutput {
    ComprobantesTipoConsultarResult: ServiceSoapTypes.IComprobantesTipoConsultarResult;
}

export interface IDocumentosTipoConsultarInput {
    Auth: ServiceSoapTypes.IAuth;
}

export interface IDocumentosTipoConsultarOutput {
    DocumentosTipoConsultarResult: ServiceSoapTypes.IDocumentosTipoConsultarResult;
}

export interface IOpcionalesTipoConsultarInput {
    Auth: ServiceSoapTypes.IAuth;
}

export interface IOpcionalesTipoConsultarOutput {
    OpcionalesTipoConsultarResult: ServiceSoapTypes.IOpcionalesTipoConsultarResult;
}

export interface IComprobanteConstatarInput {
    Auth: ServiceSoapTypes.IAuth;
    CmpReq: ServiceSoapTypes.ICmpReq;
}

export interface IComprobanteConstatarOutput {
    ComprobanteConstatarResult: ServiceSoapTypes.IComprobanteConstatarResult;
}

export interface IComprobanteDummyInput {}

export interface IComprobanteDummyOutput {
    ComprobanteDummyResult: ServiceSoapTypes.IComprobanteDummyResult;
}

export interface IServiceSoapSoap {
    ComprobantesModalidadConsultar: (input: IComprobantesModalidadConsultarInput, cb: (err: any | null, result: IComprobantesModalidadConsultarOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobantesTipoConsultar: (input: IComprobantesTipoConsultarInput, cb: (err: any | null, result: IComprobantesTipoConsultarOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    DocumentosTipoConsultar: (input: IDocumentosTipoConsultarInput, cb: (err: any | null, result: IDocumentosTipoConsultarOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    OpcionalesTipoConsultar: (input: IOpcionalesTipoConsultarInput, cb: (err: any | null, result: IOpcionalesTipoConsultarOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobanteConstatar: (input: IComprobanteConstatarInput, cb: (err: any | null, result: IComprobanteConstatarOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ComprobanteDummy: (input: IComprobanteDummyInput, cb: (err: any | null, result: IComprobanteDummyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace ServiceSoapTypes {
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
        Err: ServiceSoapTypes.IErr[];
    }
    export interface IEvt {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Code: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Msg: string;
    }
    export interface IEvents {
        Evt: ServiceSoapTypes.IEvt[];
    }
    export interface IComprobantesModalidadConsultarResult {
        ResultGet: {
            FacModTipo: ServiceSoapTypes.IFacModTipo[];
        };
        Errors: ServiceSoapTypes.IErrors;
        Events: ServiceSoapTypes.IEvents;
    }
    export interface ICbteTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Id: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IComprobantesTipoConsultarResult {
        ResultGet: {
            CbteTipo: ServiceSoapTypes.ICbteTipo[];
        };
        Errors: ServiceSoapTypes.IErrors;
        Events: ServiceSoapTypes.IEvents;
    }
    export interface IDocTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IDocumentosTipoConsultarResult {
        ResultGet: {
            DocTipo: ServiceSoapTypes.IDocTipo[];
        };
        Errors: ServiceSoapTypes.IErrors;
        Events: ServiceSoapTypes.IEvents;
    }
    export interface IOpcionalTipo {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Desc: string;
    }
    export interface IOpcionalesTipoConsultarResult {
        ResultGet: {
            OpcionalTipo: ServiceSoapTypes.IOpcionalTipo[];
        };
        Errors: ServiceSoapTypes.IErrors;
        Events: ServiceSoapTypes.IEvents;
    }
    export interface IOpcional {
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Id: string;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Valor: string;
    }
    export interface IOpcionales {
        Opcional: ServiceSoapTypes.IOpcional[];
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
        Opcionales: ServiceSoapTypes.IOpcionales;
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
        Opcionales: ServiceSoapTypes.IOpcionales;
    }
    export interface IObs {
        /** http://servicios1.afip.gob.ar/wscdc/#s:int(undefined) */
        Code: number;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Msg: string;
    }
    export interface IObservaciones {
        Obs: ServiceSoapTypes.IObs[];
    }
    export interface IComprobanteConstatarResult {
        CmpResp: ServiceSoapTypes.ICmpResp;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        Resultado: string;
        Observaciones: ServiceSoapTypes.IObservaciones;
        /** http://servicios1.afip.gob.ar/wscdc/#s:string(undefined) */
        FchProceso: string;
        Events: ServiceSoapTypes.IEvents;
        Errors: ServiceSoapTypes.IErrors;
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

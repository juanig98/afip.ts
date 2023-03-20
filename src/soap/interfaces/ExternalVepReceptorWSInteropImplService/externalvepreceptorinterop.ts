import { Client } from "soap";
import { SoapAsyncFunc } from "../../../types";

/* tslint:disable:max-line-length no-empty-interface */
export interface IdummyInput { }

export interface IdummyOutput {
    dummyReturn: externalvepreceptorinteropTypes.IdummyReturn;
}

export interface IcreateVEPInput {
    /** xs:string(undefined) */
    token: string;
    /** xs:string(undefined) */
    sign: string;
    /** xs:int(undefined) */
    entidadDePago: number;
    vep: externalvepreceptorinteropTypes.Ivep;
}

export interface IcreateVEPOutput {
    /** xs:long(undefined) */
    createVEPReturn: number;
}

export interface IfindMyVEPByNroVEPInput {
    /** xs:string(undefined) */
    token: string;
    /** xs:string(undefined) */
    sign: string;
    /** xs:long(undefined) */
    owner: number;
    /** xs:long(undefined) */
    nroVep: number;
}

export interface IfindMyVEPByNroVEPOutput {
    findMyVEPByNroVEPReturn: externalvepreceptorinteropTypes.IfindMyVEPByNroVEPReturn;
}

export interface IfindMyVEPByTransactionIdInput {
    /** xs:string(undefined) */
    token: string;
    /** xs:string(undefined) */
    sign: string;
    /** xs:long(undefined) */
    owner: number;
    /** xs:long(undefined) */
    ownerTransactionId: number;
}

export interface IfindMyVEPByTransactionIdOutput {
    findMyVEPByTransactionIdReturn: externalvepreceptorinteropTypes.IfindMyVEPByTransactionIdReturn;
}

export interface IExternalvepreceptorinteropSoap extends Client {
    dummy: (input: IdummyInput,
        cb: (err: any | null, result: IdummyOutput, raw: string, soapHeader: { [k: string]: any; }) => any,
        options?: any,
        extraHeaders?: any
    ) => void;
    dummyAsync: SoapAsyncFunc<IdummyInput, IdummyOutput>;
    createVEP: (input: IcreateVEPInput, cb: (err: any | null, result: IcreateVEPOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    createVEPAsync: SoapAsyncFunc<IcreateVEPInput, IcreateVEPOutput>;
    findMyVEPByNroVEP: (input: IfindMyVEPByNroVEPInput, cb: (err: any | null, result: IfindMyVEPByNroVEPOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    findMyVEPByNroVEPAsync: SoapAsyncFunc<IfindMyVEPByNroVEPInput, IfindMyVEPByNroVEPOutput>;
    findMyVEPByTransactionId: (input: IfindMyVEPByTransactionIdInput, cb: (err: any | null, result: IfindMyVEPByTransactionIdOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    findMyVEPByTransactionIdAsync: SoapAsyncFunc<IfindMyVEPByTransactionIdInput, IfindMyVEPByTransactionIdOutput>;
}

export namespace externalvepreceptorinteropTypes {
    export interface IdummyReturn {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        appserver: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        authserver: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        dbserver: string;
    }
    export interface IDetalle {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        campo: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        campoTipo: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        campoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        contenido: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        contenidoDesc: string;
    }
    export interface IDetalles {
        Detalle: externalvepreceptorinteropTypes.IDetalle[];
    }
    export interface IObligacion {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        impuesto: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        impuestoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:double(undefined) */
        importe: number;
    }
    export interface IObligaciones {
        Obligacion: externalvepreceptorinteropTypes.IObligacion[];
    }
    export interface Ivep {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        nroVEP: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaHoraCreacion: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaExpiracion: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaVencimiento: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        nroFormulario: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        orgRecaudDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        codTipoPago: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        pagoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        pagoDescExtracto: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        usuarioCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        autorizanteCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        contribuyenteCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        establecimiento: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        concepto: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        conceptoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        subConcepto: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        subConceptoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        periodoFiscal: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        anticipoCuota: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:double(undefined) */
        importe: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        ownerCuit: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        ownerTransactionId: number;
        Detalles: externalvepreceptorinteropTypes.IDetalles;
        Obligaciones: externalvepreceptorinteropTypes.IObligaciones;
    }
    export interface IVEP {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        nroVEP: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaHoraCreacion: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaExpiracion: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaVencimiento: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        nroFormulario: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        orgRecaudDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        codTipoPago: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        pagoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        pagoDescExtracto: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        usuarioCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        autorizanteCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        contribuyenteCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        establecimiento: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        concepto: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        conceptoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        subConcepto: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        subConceptoDesc: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        periodoFiscal: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        anticipoCuota: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:double(undefined) */
        importe: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        ownerCuit: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        ownerTransactionId: number;
        Detalles: externalvepreceptorinteropTypes.IDetalles;
        Obligaciones: externalvepreceptorinteropTypes.IObligaciones;
    }
    export interface ICP {
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        cpId: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        nroVEP: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        contribuyenteCUIT: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:double(undefined) */
        importe: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        sucursal: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        tipoSucursal: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        terminal: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        operador: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        formaPago: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        moneda: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        bancoPagador: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        entidadDePago: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        codControl: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        nroTransaccion: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:decimal(undefined) */
        nroTarjeta: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:long(undefined) */
        posEstablecimiento: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        posNombre: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:decimal(undefined) */
        cbu: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        codTipoPago: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:int(undefined) */
        codRechazoDebDir: number;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaHoraPago: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaAnulacion: string;
        /** http://interoperable.cpvep.model.domain.pago.seti.osiris.afip.gov#xs:string(undefined) */
        fechaPosting: string;
    }
    export interface IfindMyVEPByNroVEPReturn {
        VEP: externalvepreceptorinteropTypes.IVEP;
        CP: externalvepreceptorinteropTypes.ICP;
    }
    export interface IfindMyVEPByTransactionIdReturn {
        VEP: externalvepreceptorinteropTypes.IVEP;
        CP: externalvepreceptorinteropTypes.ICP;
    }
}

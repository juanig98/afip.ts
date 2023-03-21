import { EndpointsEnum } from "../enums";
import { IComprobanteConstatarOutput, IDocumentosTipoConsultarOutput, IOpcionalesTipoConsultarOutput } from "../soap/interfaces/VerificationVouchers/ServiceSoap";
import { IComprobantesModalidadConsultarOutput, IComprobantesTipoConsultarOutput, IServiceSoap12Soap, ServiceSoap12Types } from "../soap/interfaces/VerificationVouchers/ServiceSoap12"
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";
import { AfipContext } from "../types";
import { AfipService } from "./afip.service";

export class VerificationVouchersService extends AfipService<IServiceSoap12Soap> {

    constructor(context: AfipContext) {
        super(context, {
            url: EndpointsEnum.WSCDC,
            url_test: EndpointsEnum.WSCDC_TEST,
            wsdl: WsdlPathEnum.WSCDC,
            wsdl_test: WsdlPathEnum.WSCDC_TEST,
            serviceName: ServiceNamesEnum.WSCDC,
            v12: true,
        });
    }

    /** Document: https://www.afip.gob.ar/ws/WSCDCV1/WSCDC_manual_desarrollador_v.2.pdf  */

    /**
     * Asks to web service for servers status
     *
     * @return object { appserver : Web Service status,
     * dbserver : Database status, authserver : Autentication
     * server status}
     **/
    async dummy() {
        const client = await this.getClient();
        const { Auth } = await this.getAuthTokens();
        const [output] = await client.ComprobanteDummyAsync({});
        return output;
    }


    /**
     *  Asks to AFIP servers for complete information of voucher that you want to verify
     * 
     * @param CmpReq object { CbteModo: string, CuitEmisor: number, PtoVta: number,
     *  CbteTipo: number, CbteNro: number, CbteFch: string, ImpTotal: number,
     *  CodAutorizacion: string, DocTipoReceptor: string, DocNroReceptor: string }
     * 
     * @returns object { CmpResp: ServiceSoapTypes.ICmpResp, Resultado: string, 
     *  Observaciones: ServiceSoapTypes.IObservaciones, FchProceso: string,
     *  Events: ServiceSoapTypes.IEvents, Errors: ServiceSoapTypes.IErrors }
     */
    async comprobanteConstatar(CmpReq: ServiceSoap12Types.ICmpReq): Promise<IComprobanteConstatarOutput> {
        const client = await this.getClient();
        const { Auth } = await this.getAuthTokens();
        const [output] = await client.ComprobanteConstatarAsync({ Auth, CmpReq });
        return output;
    }

    /**
     * Asks to web service for types of authorization 
     * 
     * @returns object { ResultGet: { FacModTipo: ServiceSoap12Types.IFacModTipo[] },   
     *  Errors: ServiceSoap12Types.IErrors, Events: ServiceSoap12Types.IEvents }
     */
    async comprobantesModalidadConsultar(): Promise<IComprobantesModalidadConsultarOutput> {
        const client = await this.getClient();
        const { Auth } = await this.getAuthTokens();
        const [output] = await client.ComprobantesModalidadConsultarAsync({ Auth });
        return output;
    }

    /**
     * Asks to web service for types of vouchers enabled.
     * 
     * @returns object { ResultGet: { CbteTipo: ServiceSoap12Types.ICbteTipo[] }, 
     *  Errors: ServiceSoap12Types.IErrors, Events: ServiceSoap12Types.IEvents }
     */
    async comprobantesTipoConsultar(): Promise<IComprobantesTipoConsultarOutput> {
        const client = await this.getClient();
        const { Auth } = await this.getAuthTokens();
        const [output] = await client.ComprobantesTipoConsultarAsync({ Auth });
        return output;
    }

    /**
     * Asks to web service for types of documents enabled. 
     * 
     * @returns object { ResultGet: { DocTipo: ServiceSoap12Types.IDocTipo[] };
     *  Errors: ServiceSoap12Types.IErrors,  Events: ServiceSoap12Types.IEvents }
    */
   async documentosTipoConsultar(): Promise<IDocumentosTipoConsultarOutput> {
       const client = await this.getClient();
       const { Auth } = await this.getAuthTokens();
       const [output] = await client.DocumentosTipoConsultarAsync({ Auth });
       return output;
    }
    
    /**
     * Asks to web service for codes and descriptions of data types that are optional.
     * 
     * @returns object { ResultGet: { OpcionalTipo: ServiceSoap12Types.IOpcionalTipo[] },
     *  Errors: ServiceSoap12Types.IErrors, Events: ServiceSoap12Types.IEvents }
     */
    async opcionalesTipoConsultar(): Promise<IOpcionalesTipoConsultarOutput> {
        const client = await this.getClient();
        const { Auth } = await this.getAuthTokens();
        const [output] = await client.OpcionalesTipoConsultarAsync({ Auth })
        return output;
    }
}

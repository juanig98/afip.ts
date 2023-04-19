
import { IMTOMAttachments } from "soap";
import { EndpointsEnum } from "../enums";
import { IVEConsumerPortSoap, IconsultarComunicacionesOutput, IconsultarEstadosOutput, IconsultarSistemasPublicadoresOutput, IconsumirComunicacionOutput, VEConsumerPortTypes } from "../soap/interfaces/VEConsumerService/VEConsumerPort";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";
import { AfipContext } from "../types";
import { AfipService } from "./afip.service";

export class VEConsumerService extends AfipService<IVEConsumerPortSoap> {

    constructor(context: AfipContext) {
        super(context, {
            url: EndpointsEnum.VECONSUMER,
            url_test: EndpointsEnum.VECONSUMER_TEST,
            wsdl: WsdlPathEnum.VECONSUMER,
            wsdl_test: WsdlPathEnum.VECONSUMER_TEST,
            serviceName: ServiceNamesEnum.WSVECOSUMER,
            options: { parseReponseAttachments: true }
        });
    }

    private async authRequest(): Promise<VEConsumerPortTypes.IauthRequest> {
        const { Auth } = await this.getAuthTokens();
        return { cuitRepresentada: Auth.Cuit, token: Auth.Token, sign: Auth.Sign }
    }

    /** Document: https://www.afip.gob.ar/ws/WSCDCV1/WSCDC_manual_desarrollador_v.2.pdf  */

    /**
     * Asks to web service for servers status
     *
     * @return object { appserver : Web Service status,
     * dbserver : Database status, authserver : Autentication
     * server status}
     **/
    async status() {
        const client = await this.getClient();
        const [output] = await client.dummyAsync({});
        return output;
    }

    /**
     * El Sistema sólo mostrará las Comunicaciones destinadas a Contribuyentes filtrando las Comunicaciones realizadas por Sistemas que se encuentren 
     * relacionados con el Subservicio “e-ventanilla-int-2”. Para identificar los Sistemas publicadores permitidos para exponer consultas de Comunicaciones 
     * vía Web Services podrá invocar el mensaje ConsultarSistemas (ver seccion Consultar Sistemas). El Sistema sólo consultará Comunicaciones con una 
     * antigüedad máxima de 360 días a la fecha de la invocación evitando así generar consultas de alto costo. El Sistema filtrará aquellas Comunicaciones 
     * no pertenecientes a la Cuit indicada en el elemento AuthRequest.cuitRepresentada. Por razones de performance el Sistema devolverá un máximo de 
     * Comunicaciones por respuesta, permitiendo obtener todos los resultados realizando varias llamadas al Webservice. Para esto el Sistema cliente deberá 
     * implementar un algoritmo de Paginación (http://ui-patterns.com/patterns/Pagination).    
     * 
     * @param {VEConsumerPortTypes.Ifilter} filter Filtro sobre paginación
     * @returns {Promise<IconsultarComunicacionesOutput>} Resultado de la consulta 
     */
    async consultarComunicaciones(filter: VEConsumerPortTypes.Ifilter): Promise<IconsultarComunicacionesOutput> {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarComunicacionesAsync({ authRequest, filter });
        return output;
    }

    /**
     * Consulta sobre sistemas publicadores 
     * 
     * @param {number} idSistemaPublicador Id del sistema publicador
     * @returns {Promise<IconsultarSistemasPublicadoresOutput>} resultado
     */
    async consultarSistemasPublicadores(idSistemaPublicador: number): Promise<IconsultarSistemasPublicadoresOutput> {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarSistemasPublicadoresAsync({ authRequest, idSistemaPublicador });
        return output;
    }

    /**
     * El Sistema sólo recupera Comunicaciones que cumplan con las siguientes restricciones:
     * - La Comunicación debe ser realizada por un Sistema publicador que no se encuentre asociado al servicio “e-ventanilla-int-2” es decir a Comunicaciones 
     * internas de AFIP. Para identificar los Sistemas publicadores permitidos para exponer y consumir Comunicaciones vía Web Services puede ver más 
     * información del uso del mensaje ConsultarSistemas (ver seccion “Consultar Sistemas”).
     * - La Comunicación debe tener como máxima antigüedad 360 días.
     * - La Comunicación solicitada debe pertenecer a la Cuit indicada en AuthRequest.cuitRepresentada.
     * 
     * **NO INCLUYE ATTACHMENTS**
     * 
     * @param {number} idComunicacion Id de la Comunicación
     * @param {number} incluirAdjuntos Indica si deben incluirse los Adjuntos vía MTOM (Ver el apéndice Documentos Relacionados) en la respuesta
     * @returns {Promise<IconsumirComunicacionOutput>} resultado
    */
    async consumirComunicacion(idComunicacion: number, incluirAdjuntos: boolean): Promise<IconsumirComunicacionOutput> {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consumirComunicacionAsync({ authRequest, idComunicacion, incluirAdjuntos });
        return output;
    }

    /** 
     * 
     * El Sistema sólo recupera Comunicaciones que cumplan con las siguientes restricciones:
     * - La Comunicación debe ser realizada por un Sistema publicador que no se encuentre asociado al servicio “e-ventanilla-int-2” es decir a Comunicaciones 
     * internas de AFIP. Para identificar los Sistemas publicadores permitidos para exponer y consumir Comunicaciones vía Web Services puede ver más 
     * información del uso del mensaje ConsultarSistemas (ver seccion “Consultar Sistemas”).
     * - La Comunicación debe tener como máxima antigüedad 360 días.
     * - La Comunicación solicitada debe pertenecer a la Cuit indicada en AuthRequest.cuitRepresentada.
     * 
     * **INCLUYE ATTACHMENTS**
     * 
     * @param {number} idComunicacion Id de la Comunicación
     * @param {number} incluirAdjuntos Indica si deben incluirse los Adjuntos vía MTOM (Ver el apéndice Documentos Relacionados) en la respuesta
     * @returns {Promise<IconsumirComunicacionOutput>} resultado
     */
    async consumirComunicacionWithAttachments(idComunicacion: number): Promise<{ Comunicacion: VEConsumerPortTypes.IComunicacion, attachments: IMTOMAttachments }> {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consumirComunicacionAsync({ authRequest, idComunicacion, incluirAdjuntos: true });
        return { Comunicacion: output.Comunicacion, attachments: client.lastResponseAttachments };
    }

    /**
     * Consulta de estados
     * 
     * @returns {Promise<IconsultarEstadosOutput>}
     */
    async consultarEstados(): Promise<IconsultarEstadosOutput> {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarEstadosAsync({ authRequest });
        return output;
    }
}
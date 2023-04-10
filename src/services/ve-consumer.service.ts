import { EndpointsEnum } from "../enums";
import { IVEConsumerPortSoap, VEConsumerPortTypes } from "../soap/interfaces/VEConsumerService/VEConsumerPort";
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
    async status() {
        const client = await this.getClient();
        const [output] = await client.dummyAsync({});
        return output;
    }

    private async authRequest(): Promise<VEConsumerPortTypes.IauthRequest> {
        const { Auth } = await this.getAuthTokens();
        return { cuitRepresentada: Auth.Cuit, token: Auth.Token, sign: Auth.Sign }
    }

    async consultarComunicaciones(filter: VEConsumerPortTypes.Ifilter) {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarComunicacionesAsync({ authRequest, filter });
        return output;
    }

    async consultarSistemasPublicadores(idSistemaPublicador: number) {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarSistemasPublicadoresAsync({ authRequest, idSistemaPublicador });
        return output;
    }

    async consumirComunicacion(idComunicacion: number, incluirAdjuntos: boolean) {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consumirComunicacionAsync({ authRequest, idComunicacion, incluirAdjuntos });
        return output;
    }

    async consultarEstados() {
        const client = await this.getClient();
        const authRequest = await this.authRequest();
        const [output] = await client.consultarEstadosAsync({ authRequest });
        return output;
    }


}

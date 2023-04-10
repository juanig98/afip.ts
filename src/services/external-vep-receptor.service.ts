import { EndpointsEnum } from "../enums";
import { IExternalvepreceptorinteropSoap, IcreateVEPOutput, IfindMyVEPByNroVEPOutput, IfindMyVEPByTransactionIdOutput, externalvepreceptorinteropTypes } from "../soap/interfaces/ExternalVepReceptorWSInteropImplService/externalvepreceptorinterop";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";
import { AfipContext } from "../types";
import { AfipService } from "./afip.service";

export class ExternalVepReceptorService extends AfipService<IExternalvepreceptorinteropSoap> {
    constructor(context: AfipContext) {
        super(context, {
            url: EndpointsEnum.EXTERNALVEPRECEPTOR,
            url_test: EndpointsEnum.EXTERNALVEPRECEPTOR_TEST,
            wsdl: WsdlPathEnum.EXTERNALVEPRECEPTOR,
            wsdl_test: WsdlPathEnum.EXTERNALVEPRECEPTOR_TEST,
            serviceName: ServiceNamesEnum.EXTERNALVEPRECEPTOR,
            v12: true,
        });
    }

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
     * Generate a VEP from an organization external to AFIP.
     * 
     * The code of the payment entity must also be included. 
     * 
     * @param vep externalvepreceptorinteropTypes.IVEP
     * @param entidadDePago Number of payment entity 
     * @returns object { createVEPReturn: number } Number given to the VEP 
     */
    async createVEP(vep: externalvepreceptorinteropTypes.IVEP, entidadDePago: number): Promise<IcreateVEPOutput> {
        try {

            const { Auth } = await this.getAuthTokens();
            const client = await this.getClient();
            const [output] = await client.createVEPAsync({
                vep,
                sign: Auth.Sign,
                token: Auth.Token,
                entidadDePago
            },)

            return output;
        } catch (error) {
            console.log(error);
            
            throw new Error("");
            
        }
    }

    /**
     * Asks to web service for VEP previously generated
     * 
     * @param nroVep Number of VEP
     * @param owner CUIT
     * @returns object { VEP: externalvepreceptorinteropTypes.IVEP, CP: externalvepreceptorinteropTypes.ICP }
     */
    async findMyVEPByNroVEP(nroVep: number, owner: number): Promise<IfindMyVEPByNroVEPOutput> {
        const { Auth } = await this.getAuthTokens();
        const client = await this.getClient();
        const [output] = await client.findMyVEPByNroVEPAsync({
            nroVep,
            owner,
            sign: Auth.Sign,
            token: Auth.Token
        })
        return output;
    }

    /**
     * Asks to web service for VEP previously generated 
     * 
     * @param ownerTransactionId Id of Transaction
     * @param owner CUIT
     */
    async findMyVEPByTransactionId(ownerTransactionId: number, owner: number): Promise<IfindMyVEPByTransactionIdOutput> {
        const { Auth } = await this.getAuthTokens();
        const client = await this.getClient();
        const [output] = await client.findMyVEPByTransactionIdAsync({
            ownerTransactionId,
            owner,
            sign: Auth.Sign,
            token: Auth.Token
        })
        return output;
    }

}
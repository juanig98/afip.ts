import fs from "fs";
import moment from "moment";
import { Afip } from "../src/afip";
import { externalvepreceptorinteropTypes } from "../src/soap/interfaces/ExternalVepReceptorWSInteropImplService/externalvepreceptorinterop";
import { ENV } from "./env";

describe("Services Test", () => {

    const afip: Afip = new Afip({
        key: fs.readFileSync(ENV.pathKey, { encoding: "utf8" }),
        cert: fs.readFileSync(ENV.pathCert, { encoding: "utf8" }),
        cuit: ENV.cuit,
        ticketPath: ENV.pathTA,
        production: false
    });

    let nroVep = 0;

    beforeAll(async () => { });
    afterAll(async () => { });

    describe("External VEP Receptor - dummy", () => {
        it("should status server", async () => {
            const result = await afip.externalVepReceptorService.getServerStatus();
            expect(result.dummyReturn).not.toBeNull();
        })
    });


    describe("External VEP Receptor - createVep", () => {
        it("should create a vep from correct params", async () => {
            const importe = (Math.floor(Math.random() * 100000) + 1) / 100;
            const today = new Date();
            const tomorrow = new Date(today).setDate(today.getDate() + 1)

            const result = await afip.externalVepReceptorService.createVEP(<externalvepreceptorinteropTypes.Ivep>{
                fechaHoraCreacion: moment().format('yyyy-MM-DD hh:mm:ss'),
                fechaExpiracion: moment(tomorrow).format('yyyy-MM-DD'),
                anticipoCuota: 0,
                nroFormulario: 6090,
                usuarioCUIT: 27555555550,
                contribuyenteCUIT: 27555555550,
                periodoFiscal: 202207,
                importe,
                ownerCuit: ENV.cuit,
                ownerTransactionId: 50,
                codTipoPago: 760,
                pagoDesc: '(TEST) Pago de VEP - Tasa General Inmobiliaria (TEST)',
                concepto: 19,
                conceptoDesc: 'Concepto (Test)',
                subConcepto: 19,
                subConceptoDesc: '(TEST) Pago de VEP - Tasa General Inmobiliaria (TEST)',
                Obligaciones: {
                    Obligacion: [
                        {
                            importe: importe,
                            impuesto: 6090,
                            impuestoDesc: "Impuesto test"
                        }
                    ]
                },
                Detalles: {
                    Detalle: [
                        {
                            campo: 3,
                            campoTipo: "N",
                            campoDesc: "VENCIMIENTO DE PAGO",
                            contenido: moment().format('DD/MM/yyyy'),
                            contenidoDesc: "VENCIMIENTO DE PAGO"
                        },
                        {
                            campo: 4,
                            campoTipo: "N",
                            campoDesc: "NUM COMP",
                            contenido: "123",
                            contenidoDesc: "NUM COMP"
                        }
                    ]
                }
            }, 1001) //     1001 RED LINK   |  1002 BANELCO   |   1003 INTERBANKING 

            nroVep = result.createVEPReturn;
            expect(result).not.toBeNull();
        })
    })

    describe("External VEP Receptor - findVEPByNroVep", () => {
        it("should ask for vep created", async () => {
            if (!nroVep) throw new Error("nroVep undefined");
            const result = await afip.externalVepReceptorService.findMyVEPByNroVEP(nroVep, ENV.cuit);
            expect(result).not.toBeNull();
        });
    })
});
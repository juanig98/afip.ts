import { resolve } from "path";
import { data } from "./mock-data/voucher";
import { Afip } from "../src/afip";
import fs from "fs";
import moment from "moment";
import { externalvepreceptorinteropTypes } from "../src/soap/interfaces/ExternalVepReceptorWSInteropImplService/externalvepreceptorinterop";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname.substring(0, __dirname.search("dist/")).concat(".env") });




describe("Services Test", () => {
    console.log(new Date());

    if (!process.env.CUIT) throw new Error("Add CUIT env.");

    const key = fs.readFileSync(resolve(__dirname, "./test-files/afip_test_private_key.key"), { encoding: "utf8" })
    const cert = fs.readFileSync(resolve(__dirname, "./test-files/afip_test_cert.crt"), { encoding: "utf8" })
    const ticketPath = resolve(__dirname, "./test-files/ta");

    let afip: Afip = new Afip({ key, cert, cuit: parseInt(process.env.CUIT), ticketPath });

    beforeAll(async () => { });
    afterAll(async () => { });


    describe("External VEP Receptor - createVep", () => {
        it("should create a vep from correct params", async () => {
            const importe = 1889.35;
            const today = new Date();
            const tomorrow = new Date(today).setDate(today.getDate() + 1)

            const detalle: externalvepreceptorinteropTypes.IDetalle[] = []
            detalle.push({
                campo: 3, campoTipo: "N", campoDesc: "VENCIMIENTO DE PAGO",
                contenido: moment().format('DD/MM/yyyy'),
                contenidoDesc: "VENCIMIENTO DE PAGO"
            })
            detalle.push({
                campo: 4, campoTipo: "N", campoDesc: "NUM COMP",
                contenido: "123",
                contenidoDesc: "NUM COMP"
            })


            const obligaciones: externalvepreceptorinteropTypes.IObligacion[] = [];
            obligaciones.push({ importe: importe, impuesto: 123, impuestoDesc: "Impuesto test" });

            const fechaHoraCreacion = moment().format('yyyy-MM-DD hh:mm:ss');
            const fechaExpiracion = moment(tomorrow).format('yyyy-MM-DD');
 

            const nroVep = await afip.externalVepReceptorService.createVEP(<externalvepreceptorinteropTypes.Ivep>{
                fechaHoraCreacion,
                fechaExpiracion,
                anticipoCuota: 0,
                nroFormulario: 6090,
                usuarioCUIT: 20408050414,
                contribuyenteCUIT: 20408050414,
                periodoFiscal: 202207,
                importe,
                ownerCuit: 30999011728,
                ownerTransactionId: 50,
                codTipoPago: 760,
                pagoDesc: '(TEST) Pago de VEP - General Inmobiliaria (TEST)',
                concepto: 19,
                conceptoDesc: 'Concepto (Test)',
                subConcepto: 19,
                subConceptoDesc: '(TEST) Pago de VEP - General Inmobiliaria (TEST)',
                Obligaciones: { Obligacion: obligaciones },
                Detalles: { Detalle: detalle }
            }, 1001)

            expect(nroVep).not.toBeNull();
        })
    })
});
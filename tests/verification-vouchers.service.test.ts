import fs from "fs";
import { Afip } from "../src/afip";
import { ENV } from './env';

describe("Services Test", () => {
    const afip: Afip = new Afip({
        key: fs.readFileSync(ENV.pathKey, { encoding: "utf8" }),
        cert: fs.readFileSync(ENV.pathCert, { encoding: "utf8" }),
        cuit: ENV.cuit,
        ticketPath: ENV.pathTA,
        production: false
    });

    beforeAll(async () => { });
    afterAll(async () => { });

    describe("Verification vouchers - dummy", () => {
        it("should status server", async () => {
            const result = await afip.verificationVouchersService.dummy();
            expect(result.ComprobanteDummyResult).not.toBeNull();
        })
    });

    describe("Verification vouchers - ComprobantesTipos", () => {
        it("should get ComprobantesTipos", async () => {
            const types = await afip.verificationVouchersService.comprobantesTipoConsultar();
            console.dir(types.ComprobantesTipoConsultarResult, { depth: 50 });
            expect(types.ComprobantesTipoConsultarResult.Errors).toBeNull();
            expect(types.ComprobantesTipoConsultarResult.ResultGet).not.toBeNull();
        })
    })

    describe("Verification vouchers - ComprobantesModalidad", () => {
        it("should get ComprobantesModalidad", async () => {
            const types = await afip.verificationVouchersService.comprobantesModalidadConsultar();
            console.dir(types.ComprobantesModalidadConsultarResult, { depth: 50 });
            expect(types.ComprobantesModalidadConsultarResult.Errors).toBeNull();
            expect(types.ComprobantesModalidadConsultarResult.ResultGet).not.toBeNull();
        })
    })

    describe("Verification vouchers - DocumentosTipos", () => {
        it("should get DocumentosTipos", async () => {
            const types = await afip.verificationVouchersService.documentosTipoConsultar();
            console.dir(types.DocumentosTipoConsultarResult, { depth: 50 });
            expect(types.DocumentosTipoConsultarResult.Errors).toBeNull();
            expect(types.DocumentosTipoConsultarResult.ResultGet).not.toBeNull();
        })
    })
});
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

    describe("Consumir comunicacion", () => {
        it("Existencia el adjunto", async () => {
            const result = await afip.veConsumerService.consumirComunicacion(14805819, true);
            
            
            expect(result).not.toBeNull();
        })
    });
});
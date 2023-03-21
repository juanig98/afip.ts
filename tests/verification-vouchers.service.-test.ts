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


    describe("Verification vouchers - ComprobantesTipos", () => {
        it("should get ComprobantesTipos", async () => {
            const types = await afip.verificationVouchersService.comprobantesTipoConsultar();
            console.dir(types, { depth: 50 });
            expect(types).not.toBeNull();
        })
    })
});
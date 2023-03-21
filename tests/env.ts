import { resolve } from "path";

export const ENV = {
    pathKey: resolve(__dirname, './test-files/wsafiptest.key'),
    pathCert: resolve(__dirname, './test-files/wsafiptest.crt'),
    pathTA: resolve(__dirname, './test-files/tickets'),
    cuit: 30999011728,
}
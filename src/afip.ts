import { resolve } from "path";
import { Client } from "soap";
import { AfipService } from "./services/afip.service";
import { ElectronicBillingService } from "./services/electronic-billing.service";
import { RegisterScopeFiveService } from "./services/register-scope-five.service";
import { RegisterScopeFourService } from "./services/register-scope-four.service";
import { RegisterScopeTenService } from "./services/register-scope-ten.service";
import { RegisterScopeThirteenService } from "./services/register-scope-thirteen.service";
import { AfipContext, Context, AfipServiceSoapParam } from "./types";
import { ExternalVepReceptorService } from "./services/external-vep-receptor.service";
import { VerificationVouchersService } from "./services/verification-vouchers.service";

export class Afip {
  private readonly _electronicBillingService: ElectronicBillingService;
  private readonly _registerScopeFourService: RegisterScopeFourService;
  private readonly _registerScopeFiveService: RegisterScopeFiveService;
  private readonly _registerScopeTenService: RegisterScopeTenService;
  private readonly _registerScopeTThirteenService: RegisterScopeThirteenService;
  private readonly _externalVepReceptorService: ExternalVepReceptorService;
  private readonly _verificationVouchersService: VerificationVouchersService;
  private readonly context: AfipContext;

  constructor(context: Context) {
    this.context = {
      ...context,
      ticketPath: context.ticketPath ?? resolve(__dirname, "auth", "tickets"),
    };

    this._electronicBillingService = new ElectronicBillingService(this.context);
    this._registerScopeFourService = new RegisterScopeFourService(this.context);
    this._registerScopeFiveService = new RegisterScopeFiveService(this.context);
    this._registerScopeTenService = new RegisterScopeTenService(this.context);
    this._registerScopeTThirteenService = new RegisterScopeThirteenService(this.context);
    this._externalVepReceptorService = new ExternalVepReceptorService(this.context);
    this._verificationVouchersService = new VerificationVouchersService(this.context);

  }

  get electronicBillingService(): ElectronicBillingService {
    return this._electronicBillingService;
  }

  get registerScopeFourService(): RegisterScopeFourService {
    return this._registerScopeFourService;
  }

  get registerScopeFiveService(): RegisterScopeFiveService {
    return this._registerScopeFiveService;
  }

  get registerScopeTenService(): RegisterScopeTenService {
    return this._registerScopeTenService;
  }

  get registerScopeTThirteenService(): RegisterScopeThirteenService {
    return this._registerScopeTThirteenService;
  }

  get externalVepReceptorService(): ExternalVepReceptorService {
    return this._externalVepReceptorService;
  }

  get verificationVouchersService(): VerificationVouchersService {
    return this._verificationVouchersService;
  }


  public genericService<T extends Client = any>(
    soapConfig: AfipServiceSoapParam
  ): AfipService<T> {
    return new AfipService(this.context, soapConfig);
  }
}

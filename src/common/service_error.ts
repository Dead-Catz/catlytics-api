import { publicDecrypt } from "crypto";

export class ServiceError {
    constructor(public readonly code: number, public readonly error: string) {

    }
    public static AccessDenied(): ServiceError { return new ServiceError(401, 'access denied'); }
    public static AuthRequired(): ServiceError { return new ServiceError(403, 'auth required'); }
    public static BadParameters(): ServiceError { return new ServiceError(400, 'bad parameters'); }
    public static NotAcceptable(): ServiceError { return new ServiceError(406, 'not acceptable'); }
    public static NotFound(): ServiceError { return new ServiceError(404, 'object not found'); }
}
/*
BadParameters400   = NewServiceMessage(http.StatusBadRequest, "bad parameters")
    AccessDenied401    = NewServiceMessage(http.StatusUnauthorized, "access denied")
    PaymentRequired402 = NewServiceMessage(http.StatusPaymentRequired, "payment required")
    Forbidden403       = NewServiceMessage(http.StatusForbidden, "forbidden")
    NotFound404        = NewServiceMessage(404, "not found")
    NotAcceptable406   = NewServiceMessage(406, "not accpetable")
*/
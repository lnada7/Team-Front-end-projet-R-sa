import {local} from "../assets/lang/fr_fr";

export class BadRequest extends Error {}
export class ErrorForbidden extends Error {}
export class ErrorLogin extends Error {}
export class ErrorNotFound extends Error {}
export class ErrorNotAllowed extends Error {}
export class ErrorProxyGateway extends Error {}
export class ErrorServerFail extends Error {}
export class Redirect extends Error {}


// Test Error matching
export const rematchError = (error) => (
    Promise.reject(error)
        .catch(error => Promise.reject(error.response && error.response.status === 300 ? new Redirect(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 400 ? new BadRequest(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 405 ? new ErrorNotAllowed(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 500 ? new ErrorServerFail(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 502 ? new ErrorProxyGateway(error.response.data) : error))
);

export const getDefaultErrorMessage = (err, language = local) => {
    switch(true){
    case (err instanceof BadRequest):
        return language.Request.error.BadRequest;
    case (err instanceof ErrorLogin):
        return language.Request.error.ErrorLogin;
    case (err instanceof ErrorForbidden):
        return language.Request.error.ErrorForbidden;
    case (err instanceof ErrorNotFound):
        return language.Request.error.ErrorNotFound;
    default:
        console.error(err);
        return language.Request.error.Default;
    }
};

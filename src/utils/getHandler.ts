import GetRequest from "../dtos/getRequest";
import GetResponse from "../dtos/getResponse";
import BemVindoHelper from "../helpers/bemVindoHelper";

export default class GetHandler {
    static buildResponse(input: GetRequest): GetResponse {
        const response: GetResponse = {
            mensagem: BemVindoHelper.obterMensagem(input),
        };
        return response;
    }
}
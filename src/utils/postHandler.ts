import PostRequest from "../dtos/postRequest";
import PostResponse from "../dtos/postResponse";
import DataHelper from "../helpers/dateHelper";
import IdadeHelper from "../helpers/idadeHelper";

export default class PostHandler {
    static buildResponse(input: PostRequest): PostResponse {
        const response: PostResponse = {
            id: Math.random().toString(),
            nome: input.nome,
            email: input.email,
            ehAdulto: IdadeHelper.ehAdulto(parseInt(input.idade)),
            dataCadastro: DataHelper.obterDataAtual(),
        };
        return response;
    }
}

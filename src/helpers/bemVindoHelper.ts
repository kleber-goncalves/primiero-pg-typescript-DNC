import GetRequest from "../dtos/getRequest";
import IdadeHelper from "./idadeHelper";

export default class BemVindoHelper {
    static obterMensagem(input: GetRequest): string {
        let mensagem = "Boas Vindas ";

        if (input.nome) {
            mensagem += input.nome + ", ";
        } else {
            mensagem += "Visitante, ";
        }

        if (input.idade) {
            const ehAdulto = IdadeHelper.ehAdulto(parseInt(input.idade));

            if (ehAdulto) {
                mensagem += "de " + input.idade + " anos";
            } else {
                mensagem += "Por causa das nossas diretrizes, você é menor de idade, neste caso alguns recursos serão limitados";
            }
        } else {
            mensagem += "não conseguimos identificar sua idade";
        }
        return mensagem;
    }
}

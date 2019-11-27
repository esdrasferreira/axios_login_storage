import ObjectNotFoundError from "./error.js";

export class Produto {
  getProdutos = async (token) => {

    const acessToken = {
      'access-token': token
    }

    const response = await axios.get(
      "https://javaworld.com.br/produtos", { headers: acessToken }
    );
    const status = response.status;
    console.log("Chamou o servidor");
    if (status === 200) {
      return response;
    } else if (status === 404) {
      throw new ObjectNotFoundError("Local não encontrado");
    } else {
      throw new ObjectNotFoundError("Erro" + response.message);
    }
  };



  //fim classe produto.js
}

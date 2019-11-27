import ObjectNotFoundError from "./error.js";

export class Categoria {
  getCategorias = async () => {
    var instanciaDoAxios = axios.create({
      validateStatus: status => {
        return status >= 200 && status <= 503;
      }
    });

    const response = await instanciaDoAxios.get(
      "https://javaworld.com.br/categorias"
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

  cadastrar = async categoria => {
    const response = await axios.post("https://javaworld.com.br/categoria", {
      nome: categoria
    });

    const status = response.status;

    if (status === 200) {
      return response;
    } else if (status === 404) {
      throw new ObjectNotFoundError("Local não encontrado");
    } else {
      throw new ObjectNotFoundError("Erro" + response.message);
    }
  };

  atualizar = async categoria => {
    // const response = await axios.post(`https://localhost:8080/algo.html`, {id: id, nome: categoria});
    const response = await axios.put(
      `https://javaworld.com.br/categoria/edit/${categoria.id}`,
      { nome: categoria.nome }
    );

    const status = response.status;

    if (status === 200) {
      return response;
    } else if (status === 404) {
      throw new ObjectNotFoundError("Local não encontrado");
    } else {
      throw new ObjectNotFoundError("Erro" + response.message);
    }
  };

  deletar = async id => {
    const response = await axios.put(
      `https://javaworld.com.br/categoria/delete/${id}`
    );
  };

  //fim classe categoria.js
}

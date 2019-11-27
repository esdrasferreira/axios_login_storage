import ObjectNotFoundError from "./error.js";

export class Usuario {
  login = async (login, senha) => {
    const dados = {
      usuario: login,
      senha: senha
    };



    const response = await axios.post("https://javaworld.com.br/logar", dados);
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





  cadastrar = async (login, senha) => {
    const dados = {
      nome: login,
      usuario: login,
      email: login + "@gmail.com",
      senha: senha
    };



    const response = await axios.post("https://javaworld.com.br/usuario", dados);
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




}

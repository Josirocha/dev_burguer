export const validaCampoVazio = (input) => {
    if (Object.values(input).includes("")) {
        return true;
    } else {
        return false;
    }
};

export const validaEmail = (email) => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (email.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
};

export const validaSenha = (senha) => {
  if (senha.length >= 8 && senha.length <= 15) {
    return true
  } else{
    return false
  }
}

export const validaSenhaIgual = (senha, repeteSenha) => {
  if (senha === repeteSenha) {
    return true
  } else {
    return false
  }
}

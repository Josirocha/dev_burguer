export function validate(){
        if(!usuario.nome) return setStatus({type: 'error', msg: 'Erro: Necessário preencher o campo nome!'});
        if(!usuario.email) return setStatus({type: 'error', msg: 'Erro: Necessário preencher o campo e-mail!'});
        if(!usuario.senha) return setStatus({type: 'error', msg: 'Erro: Necessário preencher o campo senha!'});
        if(usuario.senha.length < 8) return setStatus({type: 'error', msg: 'Erro: A senha precisa ter pelo menos oito caracteres!'});
        if(usuario.validaSenha != senha) return setStatus({type: 'error', msg: 'Erro: As senhas não são iguais'}) 
    
        return true;
      }

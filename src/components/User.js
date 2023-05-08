import { useState } from "react"

export default function User(props) {

  const [nomeDoUsuario, setNomeDoUsuario] = useState(props.nome)
  const [fotoDoUsuario, setFotoDoUsuario] = useState(props.imagem)

  function alterarNomeDoUsuario() {
    const novoNome = prompt("Qual o seu nome?")
    setNomeDoUsuario(!novoNome ? nomeDoUsuario : novoNome)

  }


  function alterarFotoDoUsuario() {
    const novaFoto =  prompt('Insira o link da sua imagem')
    setFotoDoUsuario(!novaFoto ? fotoDoUsuario : novaFoto)
   }

  return (
    <div class="usuario">
      <img src={fotoDoUsuario} alt="imagem de perfil" onClick={alterarFotoDoUsuario} data-test="profile-image" />
      <div class="texto">
        <span>
          <strong data-test="name">{nomeDoUsuario}</strong>
          <ion-icon name="pencil" onClick={alterarNomeDoUsuario} data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  )
}


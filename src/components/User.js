export default function User(props) {
    return (
      <div class="usuario">
      <img src={props.imagem} alt="imagem de perfil" onClick={clickImg}  />
      <div class="texto">
        <span>
          <strong>{props.nome}</strong>
          <ion-icon name="pencil" onClick={clickPencil}></ion-icon>
        </span>
      </div>
    </div>
    )

    

    function clickImg() {
      prompt('Insira o link da sua imagem')
    }
    
    function clickPencil () {
      prompt('Qual seu nome?')
    }
}


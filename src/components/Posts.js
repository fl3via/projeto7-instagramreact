export default function Posts() {
  const post = [

    {
      imagemUsuario: "assets/img/meowed.svg",
      nome: "meowed",
      imgConteudo: "assets/img/gato-telefone.svg",
      imgLike: "assets/img/respondeai.svg",
      texto: "respondeai",
      numLike: 101.523
    },

    {
      imagemUsuario: "assets/img/barked.svg",
      nome: "barked",
      imgConteudo: "assets/img/dog.svg",
      imgLike: "assets/img/adorable_animals.svg",
      texto: "adorable_animals",
      numLike: 99.159
    },

    {
      imagemUsuario: "assets/img/meowed.svg",
      nome: "meowed",
      imgConteudo: "assets/img/gato-telefone.svg",
      imgLike: "assets/img/respondeai.svg",
      texto: "respondeai",
      numLike: 101.523
    }
  ]



  return (
    <div class="posts">
      {post.map((p) => <Post
        imagemUsuario={p.imagemUsuario}
        nome={p.nome}
        imgConteudo={p.imgConteudo}
        imgLike={p.imgLike}
        texto={p.texto}
        numLike={p.numLike}
      />)}
    </div>


  )
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} alt={props.nome} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgConteudo} alt={props.nome} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgLike} alt={props.nome} />
          <div class="texto">
            Curtido por <strong>{props.texto}</strong> e <strong>outras {props.numLike} pessoas</strong>
          </div>
        </div>
      </div>
    </div>

  )
}
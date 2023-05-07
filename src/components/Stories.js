export default function Stories() {
  const stories = [
    { imagem: "assets/img/9gag.svg", texto: "9gag", user: "9gag" },
    { imagem: "assets/img/meowed.svg", texto: "meowed", user: "meowed" },
    { imagem: "assets/img/barked.svg", texto: "barked", user: "barked" },
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", texto: "nathanwpylestrangeplanet", user:"nathanwpylestrangeplanet" },
    { imagem: "assets/img/wawawicomics.svg", texto: "wawawicomics", user: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", texto: "respondeai", user: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", texto: "filomoderna", user: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", texto: "memeriagourmet", user: "memeriagourmet" }
  ]


  return (
    <ul class="stories">
      {stories.map((s) => <Story imagem={s.imagem} texto={s.texto} user={s.user}  />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </ul>
  )
}

function Story(props) {
  return (
    <li class="story">
      <div class="imagem">
        <img src={props.imagem} alt={props.texto} />
      </div>
      <div class="usuario"> {props.user}
      </div>
    </li>
  )
}
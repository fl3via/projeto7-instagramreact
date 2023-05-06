export default function Stories() {
  return (
    <div class="stories">

      <Story imagem="assets/img/9gag.svg" texto="9gag" user="9gag" />
      <Story imagem="assets/img/meowed.svg" texto=" meowed" user=" meowed" />
      <Story imagem="assets/img/barked.svg" texto="barked" user="  barked" />
      <Story imagem="assets/img/nathanwpylestrangeplanet.svg" texto=" nathanwpylestrangeplanet" user=" nathanwpylestrangeplanet" />
      <Story imagem="assets/img/wawawicomics.svg" texto="  wawawicomics" user="  wawawicomics" />
      <Story imagem="assets/img/respondeai.svg" texto="respondeai" user="respondeai" />
      <Story imagem="assets/img/filomoderna.svg" texto="filomoderna" user="  filomoderna" />
      <Story imagem="assets/img/memeriagourmet.svg" texto="memeriagourmet" user="memeriagourmet" />
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>
  )
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} alt={props.texto} />
      </div>
      <div class="usuario"> {props.user}
      </div>
    </div>
  )
}
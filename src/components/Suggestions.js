export default function Suggestions() {
  const sugestoes = [
    { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", status: "Segue você" },
    { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", status: "Segue você" },
    { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", status: "Novo no Instagram" },
    { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", status: "Segue você" },
    { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", status: "Segue você" }

  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => <Sugestoes nome={s.nome} imagem={s.imagem} status={s.status} />)}
    </div>
  )
}

function Sugestoes(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} alt={props.nome} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}
export default function repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Carlos',
    'Bia',
    'Daniel',
    'Laura',
  ]

  function renderizarLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
  }

  return (
    <>
      <ul>
        {renderizarLista()}
      </ul>
    </>
  )
}

// const itens = []
    
//     for (let i = 0; i < listaAprovados.length; i++) {
//       itens.push(<li key={i} >{listaAprovados[i]}</li>)
//     }

//     return itens 
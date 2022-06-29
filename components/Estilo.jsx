export default function Estilo(props) {
  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero > 0 ? '#2D2' : props.numero == 0 ? '#fa0' : '#D22',
        color: props.color,
        textAlign: props.direita ? 'right' : props.esquerda ? 'left' : 'center'
        }}>
        Texto
      </h1>
    </div>
  )
}
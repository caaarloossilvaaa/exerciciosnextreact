export default function Filho(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h3 style={{ marginRight: '5px' }}>{props.nome}</h3>
      <h2>{props.familia}</h2>
    </div>
  )
}

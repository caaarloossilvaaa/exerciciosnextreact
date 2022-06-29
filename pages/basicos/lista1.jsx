let items = []
function lista(maxItems) {
  items = []
  for (let i = 0; i <= maxItems; i++){
    items.push(i)
  }
}

export default function lista1() {
  lista(50)
  return (
    <div>
      {items.map((item) => <span key={item} style={{ display: "block" }}>{item}</span>)}
    </div>
  )
}
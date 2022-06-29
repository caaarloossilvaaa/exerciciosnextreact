import Filho from "./Filho"

export default function Pai(props) {
  return (
    <div>
      <Filho nome='Carlos' familia={props.familia} />
      <Filho nome='Andre' familia={props.familia} />
      <Filho nome='Pedro' familia={props.familia} />
    </div>
  )
}

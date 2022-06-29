import { Tabuleiro1, Tabuleiro2 } from '../../components/Tabuleiro'

export default function tabuleiroXadrez() {
  return (
    <div className='tabuleiro'>
      <span>Tabuleiro 8x8</span>
      <div className="area">
        <div className="linha">
          <Tabuleiro1 />
        </div>
        <div className="linha">
          <Tabuleiro2 />
        </div>
        <div className="linha">
          <Tabuleiro1 />
        </div>
        <div className="linha">
          <Tabuleiro2 />
        </div>
        <div className="linha">
          <Tabuleiro1 />
        </div>
        <div className="linha">
          <Tabuleiro2 />
        </div>
        <div className="linha">
          <Tabuleiro1 />
        </div>
        <div className="linha">
          <Tabuleiro2 />
        </div>
      </div>
    </div>
  )
}
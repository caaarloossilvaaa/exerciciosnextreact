import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <>
      <Estilo numero={1} color='#f00' esquerda />
      <Estilo numero={0} color='#fff' />
      <Estilo numero={-1} color='#00f' direita />
    </>
  )
}
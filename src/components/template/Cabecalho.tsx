import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}


export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div>
            <Titulo titulo={props.subtitulo} subtitulo={props.subtitulo}/>
        </div>

    )
}
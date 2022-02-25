import Menulateral from './MenuLateral'

interface TituloProps {
    titulo: string
    subtitulo: string
}


export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`
            font-black text-xl text-gray-900`}>
                {props.titulo}
            </h1>
            <h2 className={`
            font-light text-sm text-gray-500`}>
                {props.subtitulo}
            </h2>
        </div>

    )
}
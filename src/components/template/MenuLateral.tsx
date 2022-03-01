import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900 
        `}>

            
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-orange-200  to-orange-400
            h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificacões" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeSair}
                onClick={() => console.log('logout')}
                className={`
                text-red-700 dark:text-red-700 dark:hover:bg-gray-700
                hover:bg-orange-400 hover:text-white
                `}
                />
            </ul>
        </aside>
    )
}
import { IconeAjustes, IconeCasa, IconeSino } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <div className={`
            bg-gradient-to-r from-indigo-400 via-slate-100 to-purple-800
            h-20 w-20
            `}>
            </div>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificacões" icone={IconeSino} />
            </ul>
        </aside>
    )
}
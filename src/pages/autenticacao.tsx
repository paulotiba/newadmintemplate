import { useState } from "react";
import AuthInput from "../components/auth/Authinput";
import Image from "next/image";
import { IconeAtencao } from "../components/icons";

export default function Autenticacao() {

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg, tempoEmSegundos = 5) {
            setErro(msg)
            setTimeout(() => setErro(null), tempoEmSegundos * 1000)        
    }

    function submeter() {
        if(modo === 'login') {
            console.log('login')
            exibirErro('Ocorreu um erro no login!')
        } else {
            console.log('cadastrar')
            exibirErro('erro de cadastro!')
        }
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="hidden md:w-1/2 md:block lg:w-2/3">
                <img src="./img/logonav.png" alt="imagem da netzdu" 
                className="object-cover w-full h-screen"
                />
            </div>
            
        <div className="w-full m-10 md:w-1/2 lg:w-1/3">
            <h1 className={`
            text-3xl font-bold mb-5
            `}>
                {modo === 'login' ? 'Entre com sua Conta' : 
                'Cadastre-se na Plataforma'}
            </h1>

            {erro ? (
            <div className={` 
            flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
            `}>
               {IconeAtencao()}
               <span className="ml-3 text-lg">{erro}</span> 
            </div>
                
            ) : false}


            
            <AuthInput
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
            />

            <AuthInput
            label="Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
            />

            <button onClick={submeter}
            className={`
            w-full bg-gradient-to-r from-indigo-300 to-indigo-500 hover:bg-indigo-400
            rounded-lg px-4 py-3 mt-6
            text-white
            `}
            >
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
            
            <hr  className="my-6 border-separate"/>
            
            <button onClick={submeter}
            className={`
            w-full bg-gradient-to-r from-red-300 to-red-500 hover:bg-red-600
            rounded-lg px-4 py-3 
            text-white
            `}
            >
                Entrar Com Google.
            </button>

            {modo === 'login' ? (
                <p className="mt-8">
                    Novo por aqui?
                    <a onClick={() => setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer`}> <br /> Criar uma Conta Gratuitamente </a>
                </p>
            ) : (
                <p className="mt-8">
                    Já faz parte da Comunidade?
                    <a onClick={() => setModo('login')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer`}>  <br /> Entre com sua Conta </a>
                </p>
            )}
                </div>
        </div>
    )
}
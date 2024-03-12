import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [ nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou!")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("A media mudou para " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alterarNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizarResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        }else {
            return(
                <p>Olá {nome}, você reprovou!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alterarNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizarResultado()}
        </form>
    )
}

export default Formulario
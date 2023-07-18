import { useState } from 'react';

const IMCTable = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(0);

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    };

    const handleAlturaChange = (event) => {
        setAltura(event.target.value);
    };

    const handleCalcularClick = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setIMC(imcCalculado.toFixed(2));
    };

    return (
        <table>
            {/* ...conteúdo da tabela... */}
            <tbody>
                <tr>
                    <td>
                        <input type="number" placeholder='Digite seu peso em KG' value={peso} onChange={handlePesoChange} />
                    </td>
                    <td>
                        <input type="number" placeholder='Digite sua altura em cm' value={altura} onChange={handleAlturaChange} />
                    </td>
                    <td>{imc}</td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <button onClick={handleCalcularClick}>Calcular IMC</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default IMCTable;

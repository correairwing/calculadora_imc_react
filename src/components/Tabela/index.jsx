import { useState } from 'react';

const IMCTable = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(0);
    const [feedback, setFeedback] = useState('');

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
        setFeedback(getFeedbackMessage(imcCalculado));
    };

    const getFeedbackMessage = (imc) => {
        if (imc < 18.5) {
            return 'Você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Seu peso está normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Você está acima do peso';
        } else if (imc > 30) {
            return 'Obeso'
        } else {
            return 'Preencha os campos corretamente';
        }
    };

    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Peso (kg)</th>
                        <th>Altura (cm)</th>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" value={peso} onChange={handlePesoChange} />
                        </td>
                        <td>
                            <input type="number" value={altura} onChange={handleAlturaChange} />
                        </td>
                        <td>{imc}</td>
                        <td>{feedback}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <button onClick={handleCalcularClick}>Calcular IMC</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
};

export default IMCTable;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './CostumerOpinion.css'

const CostumerOpinion = () => {
    const navigate = useNavigate(); // Hook do React Router v6 para navegação

    const handleAddOpinion = () => {
        navigate('/contato'); 
    }

    return (
        <div className='costumer-opinion'>
            <h2>Opinião dos clientes</h2>
            <div className='opinions'>
                <div className='opinion'>
                    <img src={assets.opinion1} alt='Opinião 1' />
                    <h3>Carla Madeira</h3>
                    <p>"Muito fácil de usar e encontrei ótimos livros. Adorei!"</p>
                </div>
                <div className='opinion'>
                    <img src={assets.opinion2} alt='Opinião 2' />
                    <h3>Júlio Verne</h3>
                    <p>"A entrega foi rápida e os livros chegaram em perfeito estado. Recomendo!"</p>
                </div>
                <div className='opinion'>
                    <img src={assets.opinion3} alt='Opinião 3' />
                    <h3>Christina Lauren</h3>
                    <p>"Gostei muito da plataforma, troquei meus livros sem complicação."</p>
                </div>
            </div>
            <button className='add-opinion-button' onClick={handleAddOpinion}>
                Escreva sua opinião também!
            </button>
        </div>
    )
}

export default CostumerOpinion;

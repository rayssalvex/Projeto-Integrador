import React from 'react';
import { assets } from '../../assets/assets';
import './Services.css';

const Services = () => {
    return (
        <div id="services"><br />
            {/* <h1>SERVIÇOS</h1> */}
            <div className="card-container">
                <div className="card">
                    <img src={assets.service1} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">PAGAMENTO SEGURO</h2>
                        <p className="text">Pagamento 100% seguro usando Stripe.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={assets.service2} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">FRETE FIXO</h2>
                        <p className="text">Apenas R$10,00 para todos os Estados.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={assets.service3} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">Suporte 24/7</h2>
                        <p className="text">Nós contate a qualquer momento.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services;
// Pacontes do React
import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
//CSS
import './styles.css'
//Pages
import herosImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

function Login() {
    const [id, setId] = useState('');
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id })
            
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }
    return (
        <div className="longon-conrainer">
            <section className="form">
                <img src={logo} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" tipe="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heroes" />
        </div>

    );
}

export default Login;
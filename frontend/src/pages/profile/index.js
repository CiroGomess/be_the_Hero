import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

import api from '../../services/api'

export default function Profile(params) {
    const [incidents, setIncidents] = useState([])
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])


    async function hanfleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be the Hero" />
                <span>Bem Vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.Title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidents.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                        <button onClick={()=> hanfleDeleteIncident(incidents.id)} type="button">
                            <FiTrash2 size={20} color="#E02041" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
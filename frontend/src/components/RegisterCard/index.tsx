import axios from 'axios';
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Client } from "../../models/client";
import { BASE_URL } from "../../utils/request";
import EditButton from '../EditButton';

import "./styles.css";

function RegisterCard() {

  const { data: clientes, isFetching } = useFetch<Client[]>(`${BASE_URL}/clientes`)

  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes`)
        .then(response => response.data)
        .then(converted_return => setClients(converted_return))
  }, [])

  const selectClient = (indice) => {
    setClients(clients[indice])
  }

  const put = () => {
    const data = {
      nome: "Dave",
      endereco: "Av. 21",
      telefone: 1,
      email: "null"
    }
    axios.put(`${BASE_URL}/clientes/1`, data)
      .then((response) => {
        alert("Cliente alterado")
      })
      .catch (error => console.log(error))
  }

  return (
    <>
    <div className="divTabela">

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th className="acao">Editar</th>
            <th className="acao">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {clientes?.map((cadastro, key) => {
            return (
              <tr key={cadastro.id}>
                <td>{cadastro.id}</td>
                <td>{cadastro.nome}</td>
                <td>{cadastro.endereco}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.email}</td>
                  <td>
                    <EditButton />
                  </td>
                  <td>
                    <button className="btn-delete">Excluir</button>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

    { isFetching && <p>Carregando...</p> }
    </>
  );
}

export default RegisterCard;

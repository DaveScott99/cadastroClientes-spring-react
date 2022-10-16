import axios from "axios";
import { useEffect, useState } from "react";
import { Client } from "../../models/client";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

function RegisterCard() {

  const [ cadastro, setPosts ] = useState<Client[]>([])

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes`)
      .then(response => {
        setPosts(response.data)
      })
      .catch(() => {
        console.log("Deu erro!")
      })
  }, [])

  return (
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
          {cadastro.map((cadastro, key) => {
            return (
              <tr key={cadastro.id}>
                <td>{cadastro.id}</td>
                <td>{cadastro.nome}</td>
                <td>{cadastro.endereco}</td>
                <td>{cadastro.telefone}</td>
                <td>{cadastro.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RegisterCard;

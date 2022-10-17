import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import { BASE_URL } from "./utils/request";

function App() {

  // Objeto cliente
  const cliente = {
    id : 0,
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setClientes] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente)

  // UseEffect
  // REQUISIÇÃO DOS DADOS
  useEffect(() => {
    fetch(`${BASE_URL}/clientes`)
    .then(response => response.json())
    .then(converted_response => setClientes(converted_response))
    .catch(err => {
      alert("Erro: " + err)
    })
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjCliente({...objCliente, [e.target.name]:e.target.value});
  }

  // Cadastrar cliente
  const cadastrar = () => {
    fetch(`${BASE_URL}/clientes`, {
      method: 'post',
      body: JSON.stringify(objCliente),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(converted_response => {
      
      if (converted_response.mensagem !== undefined){
        alert(converted_response.mensagem);
      }
      else {
        setClientes([...clientes, converted_response]);
        alert('Cliente cadastrado com sucesso!');
        limparFormulario();
      }

    })
    .catch(err => {
      alert("Erro: " + err)
    })
  }

  // Alterar cliente
  const alterar = () => {
    fetch(`${BASE_URL}/clientes/${objCliente.id}`, {
      method: 'put',
      body: JSON.stringify(objCliente),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(converted_response => {
      
      if (converted_response.mensagem !== undefined){
        alert(converted_response.mensagem);
      }
      else {

        // Mensagem
        alert('Cliente alterado com sucesso!');

        // Cópia do vetor de clientes
        let vetorTemp = [...clientes];

        // Índice 
        let indice = vetorTemp.findIndex((c) => {
          return c.id === objCliente.id;
        });
  
        // Alterar produto do vetorTemp
        vetorTemp[indice] = objCliente;
  
        // Atualizar o vetor de clientes
        setClientes(vetorTemp);

        // Limpar formulário
        limparFormulario();
      }

    })
    .catch(err => {
      alert("Erro: " + err)
    })
  }

  // Remover cliente
  const remover = () => {
    fetch(`${BASE_URL}/clientes/${objCliente.id}`, {
      method: 'delete',
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then((response) => {
        // Mensagem
        alert("Cliente removido com sucesso!");
  
        // Cópia do vetor de clientes
        let vetorTemp = [...clientes];
  
        // Índice 
        let indice = vetorTemp.findIndex((c) => {
          return c.id === objCliente.id;
        });
  
        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);
  
        // Atualizar o vetor de clientes
        setClientes(vetorTemp);
  
        // Limpar formulário
        limparFormulario();
    })
    .catch(err => {
      alert("Erro: " + err)
    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjCliente(cliente);
    setBtnCadastrar(true);
  }

  // Selecionar cliente
  const selecionarCliente = (indice) => {
    setObjCliente(clientes[indice]);
    setBtnCadastrar(false);
  } 

  // Retorno
  return (
    <>
      <div>
        <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} alterar={alterar} remover={remover} obj={objCliente} cancelar={limparFormulario} />
        <Tabela vetorClientes={clientes} selecionar={selecionarCliente}/>
      </div>
    </>
  );
}

export default App;

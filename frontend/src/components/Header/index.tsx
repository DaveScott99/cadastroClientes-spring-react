import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { Client } from "../../models/client";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

Modal.setAppElement("#root");



function Header() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseMOdal() {
    setIsOpen(false);
  }

  // CRIAR UM OBJETO PARA O POST
  const initialValue = {
    nome: '',
    endereco: '',
    telefone: 0,
    email: '',
  }

  const [ values, setValues ] = useState(initialValue)

  function onChange(ev) {
    const { name, value } = ev.target

    setValues({...values, [name]: value})
  }

  function onSubmit(ev) {
    ev.preventDefault()

    axios.post(` ${ BASE_URL }/clientes`, values)
    .then((response) => {
      console.log(response.data)
    })
    .catch(error => console.log("Erro ao cadastrar um cliente!"))

  }

  return (
    <header>
      <div className="header">
        <span>Cadastro de Clientes</span>
        <button onClick={handleOpenModal} id="new">
          Incluir
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseMOdal}
          contentLabel="Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modal">
            <form onSubmit={onSubmit}>
              <label htmlFor="m-nome">Nome</label>
              <input id="m-nome" type="text" name="nome" required  onChange={onChange}/>

              <label htmlFor="m-endereco">Endereço</label>
              <input id="m-endereco" type="text" name="endereco" required onChange={onChange}/>

              <label htmlFor="m-telefone">Telefone</label>
              <input id="m-telefone" type="number" name="telefone" required onChange={onChange}/>

              <label htmlFor="m-email">Email</label>
              <input id="m-email" type="text" name="email" required onChange={onChange}/>

              <button id="btnSalvar" type="submit">Salvar</button>
            </form>
          </div>
        </Modal>
      </div>
    </header>
  );
}

export default Header;


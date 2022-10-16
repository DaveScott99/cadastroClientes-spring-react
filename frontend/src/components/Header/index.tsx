import Modal from "react-modal";
import { useState } from "react";

import "./styles.css";

Modal.setAppElement("#root");

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseMOdal() {
    setIsOpen(false);
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
            <form>
              <label htmlFor="m-nome">Nome</label>
              <input id="m-nome" type="text" required />

              <label htmlFor="m-endereco">Endereço</label>
              <input id="m-endereco" type="text" required />

              <label htmlFor="m-telefone">Telefone</label>
              <input id="m-telefone" type="number" required />

              <label htmlFor="m-email">Email</label>
              <input id="m-email" type="text" required />

              <button id="btnSalvar">Salvar</button>
            </form>
          </div>
        </Modal>
      </div>
    </header>
  );
}

export default Header;

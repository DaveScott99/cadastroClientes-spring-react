import Modal from "react-modal";
import { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../utils/request";

import "./styles.css";

Modal.setAppElement("#root");

function EditButton() {

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




  return (
    <>
        <button className="btn-edit" onClick={() => { selectClient(key) }}>Editar</button>

                
    </>
  );
}

export default EditButton;


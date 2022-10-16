import "./styles.css";

function RegisterCard() {
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

            <tr>
                <td>1</td>
                <td>Davi Santos</td>
                <td>Rua 1</td>
                <td>960181150</td>
                <td>davicalixto2077@gmail.com</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
}

export default RegisterCard;

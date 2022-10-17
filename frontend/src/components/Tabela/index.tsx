function Tabela({ vetorClientes, selecionar }) {
  return (
    <table className="table">

      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Selecionar</th>
        </tr>
      </thead>

      <tbody>
        {
          vetorClientes.map((obj, indice) => (
            <tr key={indice}>
              <td>{obj.id}</td>
              <td>{obj.nome}</td>
              <td>{obj.endereco}</td>
              <td>{obj.telefone}</td>
              <td>{obj.email}</td>
              <td><button className="btn btn-success" onClick={() => {selecionar(indice)}}>Selecionar</button></td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
}

export default Tabela;

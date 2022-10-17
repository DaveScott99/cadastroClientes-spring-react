function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, alterar ,remover}) {
    return (
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name='nome' placeholder="Nome" className='form-control' />
            <input type="text" value={obj.endereco} onChange={eventoTeclado} name='endereco' placeholder="Endereço" className='form-control'/>
            <input type="number" value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder="Telefone" className='form-control'/>
            <input type="text" value={obj.email} onChange={eventoTeclado} name='email' placeholder="Email" className='form-control'/>

            {
                botao 
                ? 
                    <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary"></input> 
                : 
                <div> 
                    <input type='button' value='Alterar' onClick={alterar} className="btn btn-warning"></input>
                    <input type='button' value='Remover' onClick={remover} className="btn btn-danger"></input>
                    <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary"></input>
                </div>
            }

        </form>
    )
}

export default Formulario;
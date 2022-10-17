package com.astro.cadastroclientes.repository;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.astro.cadastroclientes.model.Cliente;

@Repository
public class ClienteRepository {
    
    private List<Cliente> clientes = new ArrayList<>();
    private Long ultimoId = (long) 0;

    /**
     * Método para retornar uma lista de clientes.
     * @return Retorna uma lista de clientes.
     */
    public List<Cliente> obterTodos(){
        return clientes;
    }

    /**
     * Método que retorna o cliente pelo seu id.
     * @param id do cliente que será localizado.
     * @return Retorna um cliente caso tenha sido encontrado.
     */
    public Optional<Cliente> obterPorId(Long id) {
        return clientes 
                .stream()
                .filter(cliente -> cliente.getId() == id)
                .findFirst();
    }

    
    /**
     * Método para adicionar um cliente na lista.
     * @param cliente que será adicioando.
     * @return Rertorna o cliente que foi adicionado na lista.
     */
    public Cliente adicionar(Cliente cliente){

        ultimoId++;
        cliente.setId(ultimoId);
        clientes.add(cliente);

        return cliente;
    }

    /**
     * Método para deletar um cliente por id.
     * @param id do cliente que será deletado.
     */
    public void deletar(Long id) {
        clientes.removeIf(cliente -> cliente.getId() == id);
    }

    /**
     * Método para atualizar o cliente na lista.
     * @param cliente que será atualizado.
     * @return Retorna o cliente após atualizar a lista.
     */
    public Cliente atualizar(Cliente cliente){

        Optional<Cliente> clienteEncontrado = obterPorId(cliente.getId());

        if (clienteEncontrado.isEmpty()) {
            throw new InputMismatchException("Cliente não encontrado!");
        }

        deletar(cliente.getId());

        clientes.add(cliente);

        return cliente;

    }

}

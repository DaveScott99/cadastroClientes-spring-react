package com.astro.cadastroclientes.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.astro.cadastroclientes.model.Cliente;
import com.astro.cadastroclientes.repository.ClienteRepository;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;

    /**
     * Método para retornar uma lista de clientes.
     * @return Retorna uma lista de clientes.
     */
    public List<Cliente> obterTodos(){
        return clienteRepository.obterTodos();
    }

    /**
     * Método que retorna o cliente pelo seu id.
     * @param id do cliente que será localizado.
     * @return Retorna um cliente caso tenha sido encontrado.
     */
    public Optional<Cliente> obterPorId(Long id) {
        return clienteRepository.obterPorId(id);
    }

    
    /**
     * Método para adicionar um cliente na lista.
     * @param cliente que será adicioando.
     * @return Rertorna o cliente que foi adicionado na lista.
     */
    public Cliente adicionar(Cliente cliente){
        return clienteRepository.adicionar(cliente);
    }

    /**
     * Método para deletar um cliente por id.
     * @param id do cliente que será deletado.
     */
    public void deletar(Long id) {
        clienteRepository.deletar(id);
    }

    /**
     * Método para atualizar o cliente na lista.
     * @param cliente que será atualizado.
     * @return Retorna o cliente após atualizar a lista.
     */
    public Cliente atualizar(Long id, Cliente cliente){

        cliente.setId(id);

        return clienteRepository.atualizar(cliente);
    }

}

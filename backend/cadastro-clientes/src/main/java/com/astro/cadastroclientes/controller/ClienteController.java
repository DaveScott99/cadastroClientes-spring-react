package com.astro.cadastroclientes.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.astro.cadastroclientes.model.Cliente;
import com.astro.cadastroclientes.service.ClienteService;

@RestController
@RequestMapping(value = "api/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> obterTodos(){
        return clienteService.obterTodos();
    }

   @GetMapping("/{id}")
    public Optional<Cliente> obterPorId(@PathVariable Long id) {
        return clienteService.obterPorId(id);
    }
    
    @PostMapping
    public Cliente adicionar(@RequestBody Cliente cliente){
        return clienteService.adicionar(cliente);
    }

   @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {
        clienteService.deletar(id);

        return "Cliente com id: " + id + " foi deletado com sucesso!";
    }

   @PutMapping("/{id}")
    public Cliente atualizar(@RequestBody Cliente cliente, @PathVariable Long id){
        return clienteService.atualizar(id, cliente);
    }
    
}

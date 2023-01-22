package ies.projetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ies.projetoFinal.model.*;
import ies.projetoFinal.service.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class controller {

    // Controladores de Reuniões
    @Autowired
    private MeetService meetService;

    // Controladores de Contatos
    @Autowired
    private ContactService contactService;

    // Lista de Reuniões
    @GetMapping("/meetings")
    public List<Meet> getMeetings() {
        return meetService.getMeetings();
    }

    // Reunião por ID
    @GetMapping("/meetings/{id}")
    public Meet getMeetingByName(@PathVariable String title) {
        return meetService.getMeetingByTitle(title);
    }

    // Exclui reunião por ID
    @DeleteMapping("/meetings/{id}/delete")
    public Integer deleteMeetingByName(@PathVariable String title) {
        return meetService.deleteMeetingByTitle(title);
    }

    // ========================== Contatos ==========================

    // Lista de Contatos
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getContacts();
    }

    // Contato por ID
    @GetMapping("/contacts/{id}")
    public Contact getContactById(@PathVariable String name) {
        return contactService.getContactByName(name);
    }

    // Exclui contato por ID
    @DeleteMapping("/contacts/{id}/delete")
    public Integer deleteContactById(@PathVariable String name) {
        return contactService.deleteContactByName(name);
    }
}

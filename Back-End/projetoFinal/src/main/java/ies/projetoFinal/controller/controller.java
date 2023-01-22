package ies.projetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ies.projetoFinal.model.*;
import ies.projetoFinal.service.*;


@RestController
public class controller {

    // Controladores de Reuniões
    @Autowired
    private MeetService meetService;

    // Controladores de Contatos
    @Autowired
    private ContactService contactService;

    // Lista de Reuniões
    @CrossOrigin
    @GetMapping("/meetings")
    public List<Meet> getMeetings() {
        return meetService.getMeetings();
    }

    // Reunião por ID
    @CrossOrigin
    @GetMapping("/meetings_id")
    public Meet getMeetingByName(@RequestBody String title) {
        return meetService.getMeetingByTitle(title);
    }

    // Exclui reunião por ID
    @CrossOrigin
    @DeleteMapping("/meetings_delete")
    public Integer deleteMeetingByName(@RequestBody String title) {
        return meetService.deleteMeetingByTitle(title);
    }

    // ========================== Contatos ==========================

    // Lista de Contatos
    @CrossOrigin
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getContacts();
    }

    // Contato por ID
    @CrossOrigin
    @GetMapping("/contacts/{id}")
    public Contact getContactById(@PathVariable String name) {
        return contactService.getContactByName(name);
    }

    // Exclui contato por ID
    @CrossOrigin
    @DeleteMapping("/contacts/{id}/delete")
    public Integer deleteContactById(@PathVariable String name) {
        return contactService.deleteContactByName(name);
    }
}

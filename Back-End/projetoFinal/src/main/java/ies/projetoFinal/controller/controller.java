package ies.projetoFinal.controller;

import java.util.List;
import java.util.Map;

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
    @GetMapping("/meetings")
    public List<Meet> getMeetings() {
        return meetService.getMeetings();
    }

    // Cria reunião
    @PostMapping("/meetings/create")
    public @ResponseBody Map<String, String> createMeeting(@RequestBody Meet meet) {
        return meetService.createMeeting(meet);
    }

    // Reunião por ID
    @GetMapping("/meetings/{id}")
    public Meet getMeetingById(@PathVariable int id) {
        return meetService.getMeetingById(id);
    }

    // Exclui reunião por ID
    @DeleteMapping("/meetings/{id}/delete")
    public Integer deleteMeetingById(@PathVariable int id) {
        return meetService.deleteMeetingById(id);
    }

    // ========================== Contatos ==========================

    // Lista de Contatos
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getContacts();
    }

    // Cria contato
    @PostMapping("/contacts/create")
    public @ResponseBody Map<String, String> createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    // Contato por ID
    @GetMapping("/contacts/{id}")
    public Contact getContactById(@PathVariable int id) {
        return contactService.getContactById(id);
    }

    // Exclui contato por ID
    @DeleteMapping("/contacts/{id}/delete")
    public Integer deleteContactById(@PathVariable int id) {
        return contactService.deleteContactById(id);
    }
}

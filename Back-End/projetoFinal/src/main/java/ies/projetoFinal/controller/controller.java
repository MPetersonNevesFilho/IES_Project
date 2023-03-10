package ies.projetoFinal.controller;

import java.util.List;
import java.util.Optional;

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
        List<Meet> teste = meetService.getMeetings();
        return teste;
    }

    // Reunião por ID
    @GetMapping("/meetings/id")
    public Optional<Meet> getMeetingByName(@RequestBody String id) {
        return meetService.getMeetingByTitle(id);
    }

    // Atualiza reunião por ID
    @PutMapping("/meetings/{id}")
    public Meet updateMeetingByName(@PathVariable String id, @RequestBody Meet meet) {
        return meetService.updateMeetingByTitle(id, meet);
    }

    // Cria reunião
    @PostMapping("/meetings")
    public Meet createMeeting(@RequestBody Meet meet) {
        Meet teste = meetService.createMeeting(meet);
        return teste;
    }

    // Exclui reunião por ID
    @DeleteMapping("/meetings")
    public void deleteMeetingByName(@RequestBody String id) {
        meetService.deleteMeetingByTitle(id);
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

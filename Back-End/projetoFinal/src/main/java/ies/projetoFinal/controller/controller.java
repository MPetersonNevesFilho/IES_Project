package ies.projetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    // Controladores de Reuniões
    @Autowired
    private MeetService meetService;

    // Lista de Reuniões
    @GetMapping("/meetings")
    public List<Meet> getMeetings() {
        return meetService.getMeetings();
    }

    // Reunião por ID
    @GetMapping("/meetings/{id}")
    public Meet getMeetingById(@PathVariable int id) {
        return meetService.getMeetingById(id);
    }

    // Exclui reunião por ID
    @GetMapping("/meetings/{id}/delete")
    public Integer deleteMeetingById(@PathVariable int id) {
        return meetService.deleteMeetingById(id);
    }

    // Controladores de Contatos
    @Autowired
    private ContactService contactService;

    // Lista de Contatos
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getContacts();
    }

    // Exclui contato por ID
    @GetMapping("/contacts/{id}/delete")
    public Integer deleteContactById(@PathVariable int id) {
        return contactService.deleteContactById(id);
    }
}

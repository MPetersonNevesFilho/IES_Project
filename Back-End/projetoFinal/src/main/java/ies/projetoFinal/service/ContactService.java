package ies.projetoFinal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ies.projetoFinal.Repository.ContactRepository;
import ies.projetoFinal.model.Contact;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }

    public Contact getContactByName(String name) {
        return contactRepository.findByName(name);
    }

    public Integer deleteContactByName(String name) {
        return contactRepository.deleteByName(name);
    }

}

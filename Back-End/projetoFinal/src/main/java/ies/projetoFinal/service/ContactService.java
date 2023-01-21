package ies.projetoFinal.service;

import java.util.List;
import java.util.Map;

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

    public Map<String, String> createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Contact getContactById(int id) {
        return contactRepository.findById(id);
    }

    public Integer deleteContactById(int id) {
        return contactRepository.deleteById(id);
    }

}

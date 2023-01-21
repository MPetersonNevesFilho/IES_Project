package ies.projetoFinal.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import ies.projetoFinal.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {

    List<Contact> findAll();

    Contact findByName(String name);

    Integer deleteByName(String name);


}

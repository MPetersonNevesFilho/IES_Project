package ies.projetoFinal.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import ies.projetoFinal.model.Meet;

public interface MeetRepository extends MongoRepository<Meet, String> {

    List<Meet> findAll();

    Meet findById(int id);

    Integer deleteById(int id);

}


package ies.projetoFinal.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import ies.projetoFinal.model.Meet;

public interface MeetRepository extends MongoRepository<Meet, String> {

    List<Meet> findAll();

    Optional<Meet> findById(String title);

    Meet save(Meet meet);

    void deleteById(String title);

}


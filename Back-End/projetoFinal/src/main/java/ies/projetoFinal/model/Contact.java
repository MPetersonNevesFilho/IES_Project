package ies.projetoFinal.model;

import javax.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document("contact")
public class Contact {

    @Id
    private int _id;

    public String name;
    public String email;

    public Contact(String name, String email) {
        this.name = name;
        this.email = email;
    }

}

package ies.projetoFinal.model;

import javax.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document("contact")
public class Contact {

    @Id
    private int _id;
    private String name;
    private String email;

    public Contact(int _id, String name, String email) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }

}

package ies.projetoFinal.model;

import javax.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "contact")
public class Contact {

    @Id
    private String _id;

    public String name;
    public String email;

    public Contact(String id, String name, String email) {
        this._id = id;
        this.name = name;
        this.email = email;
    }

}

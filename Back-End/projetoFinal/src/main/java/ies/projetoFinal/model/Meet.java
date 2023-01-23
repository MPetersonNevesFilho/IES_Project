package ies.projetoFinal.model;

import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.*;
import lombok.Data;

@Data
@Document(collection = "meet")
public class Meet {

    @Id
    private String _id;

    private String title;
    private String dia;
    private String horaInicial;
    private String horaFinal;
    private String senha;

    public Meet(String id, String title, String dia, String horaInicial, String horaFinal, String senha) {
        this._id = id;
        this.title = title;
        this.dia = dia;
        this.horaInicial = horaInicial;
        this.horaFinal = horaFinal;
        this.senha = senha;
    }

}

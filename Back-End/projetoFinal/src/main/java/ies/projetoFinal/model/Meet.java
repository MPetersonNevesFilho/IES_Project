package ies.projetoFinal.model;

import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.*;
import lombok.Data;

@Data
@Document("meet")
public class Meet {

    @Id
    private int _id;
    private String title;
    private String dia;
    private String hora;
    private String duracaoHoras;
    private String duracaoMinutos;
    private String senha;

    public Meet(int _id, String title, String dia, String hora, String duracaoHoras, String duracaoMinutos, String senha) {
        this._id = _id;
        this.title = title;
        this.dia = dia;
        this.hora = hora;
        this.duracaoHoras = duracaoHoras;
        this.duracaoMinutos = duracaoMinutos;
        this.senha = senha;
    }

}

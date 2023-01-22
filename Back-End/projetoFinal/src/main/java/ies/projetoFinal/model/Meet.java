package ies.projetoFinal.model;

import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.*;
import lombok.Data;

@Data
@Document(collection = "meet")
public class Meet {

    @Id
    private int _id;

    private String title;
    private String dia;
    private String hora;
    private String duracaoHoras;
    private String duracaoMinutos;
    private String senha;

    public Meet(String title, String dia, String hora, String duracaoHoras, String duracaoMinutos, String senha) {
        this.title = title;
        this.dia = dia;
        this.hora = hora;
        this.duracaoHoras = duracaoHoras;
        this.duracaoMinutos = duracaoMinutos;
        this.senha = senha;
    }

}

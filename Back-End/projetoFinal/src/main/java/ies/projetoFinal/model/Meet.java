package ies.projetoFinal.model;

import javax.annotation.Generated;
import javax.annotation.sql.DataSourceDefinition;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Indexed;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "table_meet")
public class Meet {

    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String dia;
    private String hora;
    private String duracaoHoras;
    private String duracaoMinutos;
    private String senha;

}
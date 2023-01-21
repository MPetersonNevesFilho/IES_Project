package ies.projetoFinal.model;

import javax.annotation.Generated;
import javax.annotation.sql.DataSourceDefinition;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Indexed;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "table_contact")
public class Contact {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String email;
}

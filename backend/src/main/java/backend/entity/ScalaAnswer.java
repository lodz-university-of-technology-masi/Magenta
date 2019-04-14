package backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "scala")
public class ScalaAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int min;
    private int max;

    @OneToOne
    private Question question;
}

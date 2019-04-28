package backend.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Data
@EqualsAndHashCode(exclude = {"question"})
@ToString(exclude = {"question"})
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

    @OneToOne(cascade = CascadeType.ALL)
    private Question question;
}

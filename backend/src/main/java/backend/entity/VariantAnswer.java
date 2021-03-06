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
@Table(name = "variants")
public class VariantAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;
    @ManyToOne
    private Question question;
}

package backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Data
@EqualsAndHashCode(exclude = {"variants", "scalaAnswer", "test"})
@ToString(exclude = {"variants", "scalaAnswer", "test"})
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "questions")
public class Question {
    public static final String TYPE_OPEN = "open";
    public static final String TYPE_VARIANT = "variant";
    public static final String TYPE_SCALA = "scala";
    public static final String TYPE_NUMERIC = "numeric";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String question;
    private String type;

    @ManyToOne
    private Test test;

    @OneToOne(cascade = CascadeType.ALL)
    private ScalaAnswer scalaAnswer;

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "question",
            orphanRemoval = true)
    private Set<VariantAnswer> variants;
}

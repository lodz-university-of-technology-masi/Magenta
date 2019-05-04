package backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Data
@EqualsAndHashCode(exclude = {"questions"})
@ToString(exclude = {"questions"})
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "tests")
public class Test {
    public static final String LANGUAGE_PL = "pl";
    public static final String LANGUAGE_EN = "en";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String language;

    @ManyToOne
    private Position position;

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "test",
            orphanRemoval = true)
    @OrderBy("id")
    private Set<Question> questions;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_tests",
            joinColumns = @JoinColumn(name = "owner_id"),
            inverseJoinColumns = @JoinColumn(name = "test_id"))
    private Set<User> owners;

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "test",
            orphanRemoval = true)
    private Set<UserTestSolution> answers;
}

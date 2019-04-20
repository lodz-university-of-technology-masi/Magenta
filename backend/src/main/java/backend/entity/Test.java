package backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Data
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

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "test",
            orphanRemoval = true)
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

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "test",
            orphanRemoval = true)
    private Set<Standpoint> standpoints;
}

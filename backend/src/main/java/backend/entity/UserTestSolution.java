package backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Data
@EqualsAndHashCode(exclude = {"answers", "test", "user"})
@ToString(exclude = {"answers", "test", "user"})
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "user_test_solutions")
public class UserTestSolution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Test test;

    @ManyToOne
    private User user;

    private double score;
    private boolean checked;

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "test",
            orphanRemoval = true)
    private Set<UserAnswer> answers;
}

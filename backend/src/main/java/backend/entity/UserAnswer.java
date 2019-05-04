package backend.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Data
@EqualsAndHashCode(exclude = {"test"})
@ToString(exclude = {"test"})
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "user_answers")
public class UserAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String question;
    private String answer;

    @ManyToOne
    private UserTestSolution test;
}

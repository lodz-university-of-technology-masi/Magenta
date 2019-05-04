package backend.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "positions")
public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private boolean active;

    @OneToOne
    private Test test;

    public Position withActive(boolean active) {
        this.active = active;
        return this;
    }

    public Position withTest(Test test) {
        this.test = test;
        return this;
    }
}

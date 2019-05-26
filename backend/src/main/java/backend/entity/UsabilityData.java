package backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "USABILITY_DATA")
public class UsabilityData {

    @Id
    @Column(name = "M_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "RES_W")
    private String width;

    @Column(name = "RES_H")
    private String height;

    @Column(name = "MC")
    private String clickCount;

    @Column(name = "TIME")
    private int time;

    @Column(name = "FAIL")
    private boolean failed;

}

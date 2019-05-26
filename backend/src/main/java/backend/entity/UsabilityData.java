package backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@Entity
@Table(name = "USABILITY_DATA")
public class UsabilityData {

    @Id
    @Column(name = "M_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "IP")
    private String ipAddress;

    @Column(name = "BROWSER")
    @Enumerated(EnumType.STRING)
    private Browser browser;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "SAVETIME")
    private Timestamp saveTime;

    @Column(name = "RES_W")
    private String width;

    @Column(name = "RES_H")
    private String height;

    @Column(name = "MC")
    private String clickCount;

    @Column(name = "TIME")
    private int time;

    @Column(name = "DIST")
    private int distance;

    @Column(name = "FAIL")
    private boolean failed;

    @Column(name = "ERROR")
    private String errorTypeNumber;

}

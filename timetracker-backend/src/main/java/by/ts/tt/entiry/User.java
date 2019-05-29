package by.ts.tt.entiry;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "u_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "u_name")
    private String name;


    @Column(name = "u_vacation")
    private int vacation;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getVacation() {
        return vacation;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setVacation(int vacation) {
        this.vacation = vacation;
    }
}

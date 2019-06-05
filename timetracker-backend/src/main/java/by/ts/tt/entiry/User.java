package by.ts.tt.entiry;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

import static by.ts.tt.utilities.UserTableConstants.*;

@Entity
@Table(name = USER_TABLE)
public class User implements Serializable {

    public User(){}

    public User(int id, String name){
        this.id = id;
        this.name = name;
    };

    @Id
    @Column(name = USER_ID)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = USER_NAME)
    private String name;

    @Column(name = USER_VACATION)
    private int vacation;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "u_id", insertable = false, updatable = false)
    @Fetch(FetchMode.JOIN)
    private Vacation userVacation;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getVacation() {
        return vacation;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setVacation(int vacation) {
        this.vacation = vacation;
    }

    public Vacation getVac() {
        return userVacation;
    }

    public void setVac(Vacation vac) {
        this.userVacation = vac;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id &&
                vacation == user.vacation &&
                name.equals(user.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, vacation);
    }

    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", vacation=" + vacation +
                '}';
    }
}

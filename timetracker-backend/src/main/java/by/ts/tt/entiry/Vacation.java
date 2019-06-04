package by.ts.tt.entiry;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;
import static by.ts.tt.utilities.VacationTableContsants.*;

@Entity
@Table(name = VACATION_TABLE)
public class Vacation implements Serializable {

    public Vacation(){}

    public Vacation(int userId, Date startDate, Date endDate, int duration, int dayOffType, String comment){
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.dayOffType = dayOffType;
        this.comment = comment;
    }

    @Id
    @Column(name = VACATION_ID)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = VACATION_USER_ID)
    private int userId;

    @Column(name = VACATION_START_DATE)
    private Date startDate;

    @Column(name = VACATION_END_DATE)
    private Date endDate;

    @Column(name = VACATION_DURATION)
    private int duration;

    @Column(name = VACATION_DAY_OFF_TYPE)
    private int dayOffType;

    @Column(name = VACATION_COMMENT)
    private String comment;

    @OneToOne(targetEntity = User.class, mappedBy = "userVacation",orphanRemoval = false, fetch = FetchType.LAZY )
    private User user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getDayOffType() {
        return dayOffType;
    }

    public void setDayOffType(int dayOffType) {
        this.dayOffType = dayOffType;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vacation vacation = (Vacation) o;
        return id == vacation.id &&
                userId == vacation.userId &&
                duration == vacation.duration &&
                dayOffType == vacation.dayOffType &&
                Objects.equals(startDate, vacation.startDate) &&
                Objects.equals(endDate, vacation.endDate) &&
                Objects.equals(comment, vacation.comment) &&
                Objects.equals(user, vacation.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, startDate, endDate, duration, dayOffType, comment, user);
    }

    @Override
    public String toString() {
        return "Vacation{" +
                "id=" + id +
                ", userId=" + userId +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", duration=" + duration +
                ", dayOffType=" + dayOffType +
                ", comment=" + comment +
                ", user=" + user +
                '}';
    }

}

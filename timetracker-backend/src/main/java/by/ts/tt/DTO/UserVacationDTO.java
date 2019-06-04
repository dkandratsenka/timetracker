package by.ts.tt.DTO;

import by.ts.tt.entiry.User;
import by.ts.tt.entiry.Vacation;
import lombok.AllArgsConstructor;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@AllArgsConstructor
public class UserVacationDTO implements Serializable {

    private int id;
    private String name;
    private Date startDate;
    private Date endDate;
    private int duration;
    private int dayOffType;
    private String comment;

    public UserVacationDTO(){};

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Date getStartDate() { return startDate; }

    public void setStartDate(Date startDate) { this.startDate = startDate; }

    public Date getEndDate() { return endDate; }

    public void setEndDate(Date endDate) { this.endDate = endDate; }

    public int getDayOffType() { return dayOffType; }

    public void setDayOffType(int dayOffType) { this.dayOffType = dayOffType; }

    public String getComment() { return comment; }

    public void setComment(String comment) { this.comment = comment; }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public User getUser(){
        return new User(id,name);
    }

    public Vacation getVacation(){
        return new Vacation(id,startDate,endDate,duration,dayOffType,comment);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserVacationDTO that = (UserVacationDTO) o;
        return id == that.id &&
                duration == that.duration &&
                dayOffType == that.dayOffType &&
                Objects.equals(name, that.name) &&
                Objects.equals(startDate, that.startDate) &&
                Objects.equals(endDate, that.endDate) &&
                Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, startDate, endDate, duration, dayOffType, comment);
    }

    @Override
    public String toString() {
        return "UserVacationDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", duration=" + duration +
                ", dayOffType=" + dayOffType +
                ", comment=" + comment +
                '}';
    }
}

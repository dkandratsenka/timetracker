export default class User{
    constructor(id, name,startDate,endDate, duration, dayOffType, comment){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.dayOffType = dayOffType;
        this.comment = comment;
    }
}
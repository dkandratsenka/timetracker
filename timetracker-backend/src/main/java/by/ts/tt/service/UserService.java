package by.ts.tt.service;

import by.ts.tt.DTO.UserVacationDTO;
import by.ts.tt.entiry.User;
import java.sql.Date;
import java.util.List;

public interface UserService {

    List<UserVacationDTO> getUserVacation();

    List<UserVacationDTO> sortUsersByDate(Date start, Date end);

    void updateUser(User user);
}

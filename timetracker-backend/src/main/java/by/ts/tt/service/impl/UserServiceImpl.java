package by.ts.tt.service.impl;

import by.ts.tt.DTO.UserVacationDTO;
import by.ts.tt.entiry.User;
import by.ts.tt.repository.UserRepository;
import by.ts.tt.service.UserService;
import by.ts.tt.utilities.converterListMapToListUserVacationDto;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.sql.Date;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserRepository userRepository;


    public List<UserVacationDTO> getUserVacation() {
        return converterListMapToListUserVacationDto.convert(userRepository.getUserVacation());
    }

    @Override
    public List<UserVacationDTO> sortUsersByDate(Date start, Date end) {
        return converterListMapToListUserVacationDto.convert(userRepository.sortUsersByDate(start,end));
    }

    @Override
    public void updateUser(User user) {
        userRepository.updateUser(user.getName(),user.getId());
    }


}

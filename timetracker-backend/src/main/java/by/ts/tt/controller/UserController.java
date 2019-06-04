package by.ts.tt.controller;

import by.ts.tt.DTO.UserVacationDTO;
import by.ts.tt.service.impl.UserServiceImpl;
import by.ts.tt.service.impl.VacationServiceImpl;
import by.ts.tt.utilities.ResponseMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.sql.Date;
import java.util.List;


@RestController
public class UserController {

    @Resource
    UserServiceImpl userService;

    @Resource
    VacationServiceImpl vacationService;

    @GetMapping("/users")
    public ResponseEntity<ResponseMessage> getUserVacation(){
        List<UserVacationDTO> list = userService.getUserVacation();

        return ResponseEntity.ok().body(new ResponseMessage(list));
    }

    @GetMapping("/users/sort")
    public ResponseEntity<ResponseMessage> getSortedUserByDate(@RequestParam(value = "start")  String start,@RequestParam(value = "end") String end){
        List<UserVacationDTO> list = userService.sortUsersByDate(new Date(Long.parseLong(start)), new Date(Long.parseLong(end)));

        return ResponseEntity.ok().body(new ResponseMessage(list));
    }


    @PostMapping("/user/update")
    public ResponseEntity<ResponseMessage> updateUser(@RequestBody UserVacationDTO uv){
        userService.updateUser(uv.getUser());
        vacationService.updateVacation(uv.getVacation());

        return ResponseEntity.ok(new ResponseMessage(null));
    }
}

package by.ts.tt.controller;

import by.ts.tt.DTO.UserVacationDTO;
import by.ts.tt.service.impl.UserServiceImpl;
import by.ts.tt.service.impl.VacationServiceImpl;
import by.ts.tt.utilities.ResponseMessage;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.sql.Date;
import java.util.List;

@SwaggerDefinition(
        info = @Info(
                description = "Rest service for user vacations",
                version = "1.0.0",
                title = "Swagger user controller"
        ),
        consumes = "application/json",
        produces = "application/json",
        tags = {@Tag(name="user", description = "Operations about users")}
)

@RestController
@Api(value = "User controller")
public class UserController {

    @Resource
    UserServiceImpl userService;

    @Resource
    VacationServiceImpl vacationService;

    @ApiOperation(  httpMethod = "GET",
                    value = "Get a list of users with vacations",
                    response = UserVacationDTO.class,
                    nickname = "getUserVacation",
                    produces = "application/json")
    @GetMapping("/users")
    public ResponseEntity<ResponseMessage> getUserVacation(){
        List<UserVacationDTO> list = userService.getUserVacation();

        return ResponseEntity.ok().body(new ResponseMessage(list));
    }

    @ApiOperation(  httpMethod = "GET" ,
                    value = "Get a sorted list of users by start date and end date of vacation",
                    response = UserVacationDTO.class,
                    nickname = "getSortedUserByDate",
                    produces = "application/json")
    @GetMapping("/users/sort")
    public ResponseEntity<ResponseMessage> getSortedUserByDate(     @RequestParam(value = "start")
                                                                    @ApiParam(value = "Start vacation", required = true) String start,
                                                                    @ApiParam(value = "End vacation",required = true)
                                                                    @RequestParam(value = "end") String end){

        List<UserVacationDTO> list = userService.sortUsersByDate(new Date(Long.parseLong(start)), new Date(Long.parseLong(end)));

        return ResponseEntity.ok().body(new ResponseMessage(list));
    }


    @ApiOperation(  httpMethod = "POST" ,
            value = "Update users",
            nickname = "updateUser",
            produces = "application/json")
    @PostMapping("/user/update")
    public ResponseEntity<ResponseMessage> updateUser(    @ApiParam(value = "Updated user object", required = true)
                                                          @RequestBody UserVacationDTO uservVacation){
        userService.updateUser(uservVacation.getUser());
        vacationService.updateVacation(uservVacation.getVacation());

        return ResponseEntity.ok(new ResponseMessage(null));
    }
}

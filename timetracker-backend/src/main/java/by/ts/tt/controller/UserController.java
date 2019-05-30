package by.ts.tt.controller;

import by.ts.tt.entiry.User;
import by.ts.tt.service.impl.UserServiceImpl;
import by.ts.tt.utilities.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static by.ts.tt.utilities.UserTableConstants.USER_PAGE_LIMIT;

@RestController
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @RequestMapping(value = "/users/{id}",method = RequestMethod.GET)
    public ResponseEntity<ResponseMessage> getUser(@PathVariable int id){
        Optional<User> userOptional = userService.getUserById(id);
        ResponseMessage rm = new ResponseMessage();
        if(userOptional.isPresent()) {
            rm.setObject(userOptional.get());
            return ResponseEntity.ok().body(rm);
        }
        rm.setMessage("User is not founded");
        return ResponseEntity.badRequest().body(rm);

    }

    @RequestMapping(value = "/users",method = RequestMethod.GET)
    public ResponseEntity<ResponseMessage> getUsersList(@RequestParam(value = "page") int page){
        List<User> list = userService.getListUsers((page - 1) * USER_PAGE_LIMIT);
        ResponseMessage rm = new ResponseMessage();
        rm.setObject(list);
        return ResponseEntity.ok().body(rm);
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<ResponseMessage> getUser(@RequestBody User user){
        User savedUsed = userService.addUser(user);
        ResponseMessage rm = new ResponseMessage();
        rm.setObject(savedUsed);
        return ResponseEntity.ok().body(rm);
    }
}

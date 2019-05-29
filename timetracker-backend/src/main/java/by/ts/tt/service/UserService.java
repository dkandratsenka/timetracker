package by.ts.tt.service;

import by.ts.tt.entiry.User;

import java.util.Optional;

public interface UserService {

    User addUser(User user);
    Optional<User> getUserById(Long id);
}

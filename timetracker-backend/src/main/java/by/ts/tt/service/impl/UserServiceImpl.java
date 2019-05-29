package by.ts.tt.service.impl;

import by.ts.tt.entiry.User;
import by.ts.tt.repository.UserRepository;
import by.ts.tt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        User saveUser = userRepository.saveAndFlush(user);
        return saveUser;
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}

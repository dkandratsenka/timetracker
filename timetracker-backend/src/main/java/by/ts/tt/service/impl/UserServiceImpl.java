package by.ts.tt.service.impl;

import by.ts.tt.entiry.User;
import by.ts.tt.repository.UserRepository;
import by.ts.tt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        User saveUser = userRepository.save(user);
        return saveUser;
    }

    @Override
    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> getListUsers(int page) {
        List<User> list = userRepository.getListUsers(page);
        return list;
    }


}

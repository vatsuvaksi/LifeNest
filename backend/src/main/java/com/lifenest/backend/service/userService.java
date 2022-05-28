package com.lifenest.backend.service;


import com.lifenest.backend.entity.User;
import com.lifenest.backend.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
public class userService {

    @Autowired
    userRepo userRepository;

    public boolean postToDb(User user) {
      userRepository.save(user);
      return true;
    }

    public boolean checkLogin(String id, String pass) {

        AtomicBoolean check = new AtomicBoolean(false);
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(user ->{
                users.add(user);
        });
        users.forEach(user -> {
            if(user.getPatient_email().equalsIgnoreCase(id) && user.getPassword().equalsIgnoreCase(pass)){
                check.set(true);
            }
        });
        return check.get();
    }
}

package com.lifenest.backend.controller;


import com.lifenest.backend.entity.User;
import com.lifenest.backend.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {

    @Autowired
    userService userService;

    @PostMapping("/postToDb")
    private boolean postToDb(@RequestBody User user){
    return  userService.postToDb(user);
    }

    @GetMapping("/getFromDb/{id}/{pass}")
    private boolean checkLogin(@PathVariable("id") String id , @PathVariable("pass") String pass){
        return  userService.checkLogin(id,pass);
    }

}

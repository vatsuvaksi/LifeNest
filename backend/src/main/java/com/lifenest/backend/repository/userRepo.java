package com.lifenest.backend.repository;

import com.lifenest.backend.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface userRepo extends CrudRepository<User ,Long> {

}

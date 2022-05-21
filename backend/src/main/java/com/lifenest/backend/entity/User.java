package com.lifenest.backend.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String patient_name;
    private String patient_email;
    private String password;
    private String patient_address;
    private String patient_dl;
    private String patient_adhaar;
    private String patient_pan;
}

package com.cv.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cv.dto.ContactRequest;
import com.cv.service.EmailService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendMessage(
            @RequestBody ContactRequest request) {

        emailService.sendContactMail(request);

        return ResponseEntity.ok("Message Sent Successfully");
    }
}

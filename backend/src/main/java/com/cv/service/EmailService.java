package com.cv.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cv.dto.ContactRequest;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendContactMail(ContactRequest request) {

        try {

            ObjectMapper mapper = new ObjectMapper();

            String json = mapper.writerWithDefaultPrettyPrinter()
                    .writeValueAsString(request);

            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo("lakshmilj555@gmail.com");
            message.setSubject("New Portfolio Contact Message");
            message.setText(json);

            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Failed to send email");
        }
    }
}

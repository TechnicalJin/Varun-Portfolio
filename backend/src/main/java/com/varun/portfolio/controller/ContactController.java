package com.varun.portfolio.controller;

import com.varun.portfolio.entity.ContactMessage;
import com.varun.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api")
public class ContactController {
    @Autowired
    private ContactMessageRepository repository;
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/contact")
    public String saveContact(@Valid @RequestBody ContactMessage message) {
        try {
            message.setCreatedAt(LocalDateTime.now());
            repository.save(message);

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("varunjinjala@gmail.com");
            mailMessage.setSubject("New Contact Form Submission: " + message.getSubject());
            mailMessage.setText("Name: " + message.getName() + "\nEmail: " + message.getEmail() + "\nSubject: " + message.getSubject() + "\nMessage: " + message.getMessage());
            mailSender.send(mailMessage);
            return "Message saved and email sent successfully";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}
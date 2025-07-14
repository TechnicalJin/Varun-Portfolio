package com.varun.portfolio.controller;

import com.varun.portfolio.entity.ContactMessage;
import com.varun.portfolio.repository.ContactMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @Autowired
    private ContactMessageRepository repository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/contact")
    public ResponseEntity<String> saveContact(@Valid @RequestBody ContactMessage message) {
        try {
            logger.info("Received contact form submission: {}", message);
            repository.save(message);
            logger.debug("Contact message saved to database: {}", message.getId());

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("varunjinjala@gmail.com");
            mailMessage.setSubject("New Contact Form Submission: " + message.getSubject());
            mailMessage.setText("Name: " + message.getName() + "\nEmail: " + message.getEmail() +
                    "\nSubject: " + message.getSubject() + "\nMessage: " + message.getMessage());
            mailSender.send(mailMessage);
            logger.info("Email sent successfully to varunjinjala@gmail.com");

            return ResponseEntity.ok("Message saved and email sent successfully");
        } catch (Exception e) {
            logger.error("Error processing contact form: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error sending message: " + e.getMessage());
        }
    }
}
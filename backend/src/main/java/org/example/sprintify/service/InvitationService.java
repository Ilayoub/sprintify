package org.example.sprintify.service;

import jakarta.mail.MessagingException;
import org.example.sprintify.model.Invitation;

public interface InvitationService {
    public void sendInvitation(String email, Long projectId) throws MessagingException;

    public Invitation acceptInvitation(String token, Long userId) throws Exception;
    public String getTokenByUserMail(String userEmail);
    void deleteToken(String token);


}

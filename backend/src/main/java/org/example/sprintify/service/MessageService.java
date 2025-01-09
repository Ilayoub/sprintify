package org.example.sprintify.service;

import org.example.sprintify.model.Message;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageService {
    Message sendMessage(Long senderId, Long chatId, String content) throws Exception;

    @Query("SELECT m FROM Message m WHERE m.chat.project.id = :projectId")
    List<Message> getMessagesByProjectId(Long projectId) throws Exception;
}

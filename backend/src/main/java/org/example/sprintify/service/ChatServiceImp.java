package org.example.sprintify.service;

import org.example.sprintify.model.Chat;
import org.example.sprintify.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ChatServiceImp implements ChatService {
    ChatRepository chatRepository;

    @Autowired
    public ChatServiceImp(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;

    }

    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);


    }
}

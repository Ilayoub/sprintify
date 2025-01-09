package org.example.sprintify.repository;

import org.example.sprintify.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentByIssueId(Long issueId);
    List<Comment> findByIssueId(Long issueId);
}

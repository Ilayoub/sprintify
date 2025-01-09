package org.example.sprintify.controller;

import org.example.sprintify.dto.IssueDto;
import org.example.sprintify.model.Issue;
import org.example.sprintify.model.User;
import org.example.sprintify.request.IssueRequest;
import org.example.sprintify.response.AuthResponse;
import org.example.sprintify.response.MessageResponse;
import org.example.sprintify.service.IssueService;
import org.example.sprintify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {
    @Autowired
    private IssueService issueService;
    @Autowired
    private UserService userService;


    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId) throws Exception {
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId) throws Exception {
        return new ResponseEntity<>(issueService.getIssueByProjectId(projectId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<IssueDto> createIssue(@RequestBody IssueRequest issue, @RequestHeader("Authorization") String token) throws Exception {
        User tokenUser = userService.findUserProfileByJwt(token);
        User user = userService.findUserById(tokenUser.getId());
        Issue createdIssue = issueService.createIssue(issue, tokenUser);
        IssueDto issueDto = new IssueDto();
        issueDto.setDescription(createdIssue.getDescription());
        issueDto.setDueDate(createdIssue.getDueDate());
        issueDto.setId(createdIssue.getId());
        issueDto.setPriority(createdIssue.getPriority());
        issueDto.setProject(createdIssue.getProject());
        issueDto.setProjectID(createdIssue.getProjectID());
        issueDto.setStatus(createdIssue.getStatus());
        issueDto.setTitle(createdIssue.getTitle());
        issueDto.setTags(createdIssue.getTags());
        issueDto.setAssignee(createdIssue.getAssignee());
        return ResponseEntity.ok(issueDto);

    }

    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(@PathVariable Long issueId, @RequestHeader("Authorization") String token) throws Exception {
        User user = userService.findUserProfileByJwt(token);
        issueService.deleteIssue(issueId, user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Issue deleted");
        return ResponseEntity.ok(res);

    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(@PathVariable Long issueId, @PathVariable Long userId) throws Exception {
        Issue issue = issueService.addUserToIssue(issueId, userId);
        return ResponseEntity.ok(issue);
    }


    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(@PathVariable String status, @PathVariable Long issueId) throws Exception {
        Issue issue = issueService.updateStatus(issueId, status);
        return ResponseEntity.ok(issue);
    }


}

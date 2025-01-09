package org.example.sprintify.repository;

import org.example.sprintify.model.Project;
import org.example.sprintify.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
//    List<Project> findByOwner(User user);

    List<Project> findByNameContainsAndTeamContains(String partialName, User user);

//    @Query("select p from Project p join p.team t where t=:user")
//    List<Project> findProjectByTeam(@Param("user") User user);


    List<Project> findByTeamContainingOrOwner(User user, User owner);


}

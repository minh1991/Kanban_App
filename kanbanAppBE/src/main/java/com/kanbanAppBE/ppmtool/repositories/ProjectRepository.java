package com.kanbanAppBE.ppmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kanbanAppBE.ppmtool.domain.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
	Project findByProjectIdentifier(String projectIdentifier);

	@Override
	Iterable<Project> findAll();
}

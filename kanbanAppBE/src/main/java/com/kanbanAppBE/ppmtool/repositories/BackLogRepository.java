package com.kanbanAppBE.ppmtool.repositories;

import org.springframework.stereotype.Repository;
import com.kanbanAppBE.ppmtool.domain.BackLog;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface BackLogRepository extends CrudRepository<BackLog, Long> {

}

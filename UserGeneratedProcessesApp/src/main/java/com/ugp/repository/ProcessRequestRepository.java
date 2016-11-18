package com.ugp.repository;

import com.ugp.model.ProcessRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProcessRequestRepository extends JpaRepository<ProcessRequest, Long> {

	Page<ProcessRequest> findAll(Pageable pageable);

	Optional<ProcessRequest> findById(Long id);

}

package com.ugp.rest;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ugp.model.ProcessRequest;
import com.ugp.repository.ProcessRequestRepository;

@CrossOrigin
@RestController
@RequestMapping("/process/")
public class ProcessService {
	
	@Inject
	private ProcessRequestRepository processRequestRepository;

	@RequestMapping(path = "requestAll")
	public List<ProcessRequest> processRequest() {
		List<ProcessRequest> allRequest = findAllRequest();

		return allRequest;
	}
		
		
//		@RequestMapping(path = "request/{id}")
//		public ResponseEntity<ProcessRequest> getProcessRequest(@PathVariable Long id) {
//			Optional<ProcessRequest> processRequest = processRequestRepository.findById(id);
//
//			if (processRequest.isPresent()) {
//				return ResponseEntity.ok(processRequest.get());
//			} else
//				return new ResponseEntity(HttpStatus.NOT_FOUND);
//		}
	
	@Transactional
	private List<ProcessRequest> findAllRequest() {
		return processRequestRepository.findAll();
	}

}

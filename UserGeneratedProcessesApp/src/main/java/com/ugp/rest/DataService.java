package com.ugp.rest;

import com.ugp.model.ProcessRequest;
import com.ugp.repository.ProcessRequestRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/data/")
public class DataService {

	@Inject
	private ProcessRequestRepository processRequestRepository;

	@RequestMapping(path = "processRequest", method = RequestMethod.POST)
	public ProcessRequest processRequest(@RequestBody ProcessRequest req) {

		persistRequest(req);

		return req;
	}
	
	
	@RequestMapping(path = "getProcessRequest/{id}")
	public ResponseEntity<ProcessRequest> getProcessRequest(@PathVariable Long id) {
		Optional<ProcessRequest> processRequest = processRequestRepository.findById(id);

		if (processRequest.isPresent()) {
			return ResponseEntity.ok(processRequest.get());
		} else
			return new ResponseEntity(HttpStatus.NOT_FOUND);
	}

	@Transactional
	private void persistRequest(ProcessRequest req) {
		processRequestRepository.save(req);
	}

}

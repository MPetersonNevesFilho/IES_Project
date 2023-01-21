package ies.projetoFinal.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ies.projetoFinal.Repository.MeetRepository;
import ies.projetoFinal.model.Meet;

@Service
public class MeetService {

    @Autowired
    private MeetRepository meetRepository;

    public List<Meet> getMeetings() {
        return meetRepository.findAll();
    }

    public Map<String, String> createMeeting(Meet meet) {
        return meetRepository.save(meet);
    }

    public Meet getMeetingById(int id) {
        return meetRepository.findById(id);
    }

    public Integer deleteMeetingById(int id) {
        return meetRepository.deleteById(id);
    }

}

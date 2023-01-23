package ies.projetoFinal.service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Meet> getMeetingByTitle(String title) {
        return meetRepository.findById(title);
    }

    public void deleteMeetingByTitle(String title) {
        meetRepository.deleteById(title);
    }

    public Meet createMeeting(Meet meet) {
        return meetRepository.save(meet);
    }

    public Meet updateMeetingByTitle(String title, Meet meet) {
        return createMeeting(meet);
    }

}

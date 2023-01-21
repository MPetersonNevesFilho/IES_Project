package ies.projetoFinal.service;

import java.util.List;

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

    public Meet getMeetingByTitle(String title) {
        return meetRepository.findByTitle(title);
    }

    public Integer deleteMeetingByTitle(String title) {
        return meetRepository.deleteByTitle(title);
    }

}

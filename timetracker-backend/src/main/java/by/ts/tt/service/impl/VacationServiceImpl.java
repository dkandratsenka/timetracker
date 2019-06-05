package by.ts.tt.service.impl;

import by.ts.tt.entiry.Vacation;
import by.ts.tt.repository.VacationRepository;
import by.ts.tt.service.VacationService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

@Service
public class VacationServiceImpl implements VacationService {

    @Resource
    private VacationRepository vacationRepository;

    @Override
    public void  updateVacation(Vacation vacation) {
        vacationRepository.updateVacation(vacation.getStartDate(),vacation.getEndDate(),vacation.getDuration(),
                                          vacation.getDayOffType(),vacation.getComment(),vacation.getUserId());
    }

}

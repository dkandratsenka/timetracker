package by.ts.tt.repository;

import by.ts.tt.entiry.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import java.sql.Date;
import static by.ts.tt.utilities.VacationTableContsants.QUERY_VACATION_UPDATE;

public interface VacationRepository extends CrudRepository<User,Integer> {

    @Modifying
    @Query(value = QUERY_VACATION_UPDATE, nativeQuery = true)
    @Transactional
    void updateVacation(Date start, Date end, int duration, int type, String comment, int id);
}


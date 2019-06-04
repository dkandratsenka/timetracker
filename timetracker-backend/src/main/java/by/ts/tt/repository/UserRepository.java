package by.ts.tt.repository;

import by.ts.tt.entiry.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import java.sql.Date;
import java.util.List;
import java.util.Map;
import static by.ts.tt.utilities.UserTableConstants.*;

public interface UserRepository extends CrudRepository<User,Integer> {

    @Query(value = QUERY_USER_VACATION, nativeQuery = true)
    List<Map> getUserVacation();

    @Modifying
    @Query(value = QUERY_USER_UPDATE, nativeQuery = true)
    @Transactional
    void  updateUser(String name, int id);

    @Query(value = QUERY_USER_VACATION + SORT_USERS_BY_DATE, nativeQuery = true)
    List<Map> sortUsersByDate(Date start, Date end);
}

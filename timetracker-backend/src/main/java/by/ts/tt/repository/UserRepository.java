package by.ts.tt.repository;

import by.ts.tt.entiry.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import static by.ts.tt.utilities.UserTableConstants.QUERY_USERS_LIST;

public interface UserRepository extends CrudRepository<User,Integer> {

    @Query(value = QUERY_USERS_LIST, nativeQuery = true)
    List<User> getListUsers(int page);
}

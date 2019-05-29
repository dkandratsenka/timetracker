package by.ts.tt.repository;

import by.ts.tt.entiry.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}

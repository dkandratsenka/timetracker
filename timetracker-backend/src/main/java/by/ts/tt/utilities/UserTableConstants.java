package by.ts.tt.utilities;

public class UserTableConstants {

    public static final String USER_TABLE = "users";
    public static final String USER_ID = "u_id";
    public static final String USER_NAME = "u_name";
    public static final String USER_VACATION = "u_vacation";
    public static final int USER_PAGE_LIMIT =  10;

    public static final String QUERY_USERS_LIST = "SELECT " + USER_ID +", " + USER_NAME + ", "+USER_VACATION + " FROM "+USER_TABLE+" LIMIT ?1 ," + USER_PAGE_LIMIT;
}

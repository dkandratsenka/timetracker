package by.ts.tt.utilities;

import static by.ts.tt.utilities.VacationTableContsants.*;

public class UserTableConstants {

    public static final String USER_TABLE = "users";
    public static final String USER_ID = "u_id";
    public static final String USER_NAME = "u_name";
    public static final String USER_VACATION = "u_vacation";
    public static final int USER_PAGE_LIMIT =  10;

    public static final String QUERY_USERS_LIST = "SELECT " + USER_ID +", " + USER_NAME + ", "+USER_VACATION + " FROM "+USER_TABLE+" LIMIT ?1 ," + USER_PAGE_LIMIT;

    public static final String QUERY_USER_UPDATE = "UPDATE "+ USER_TABLE +" SET " + USER_NAME + " =  ?1 WHERE "+USER_ID + " =  ?2";

    public static final String QUERY_USER_VACATION= "SELECT " +
                                                            USER_ID+","+USER_NAME+","+VACATION_START_DATE+
                                                            ","+VACATION_END_DATE+","+VACATION_DURATION+
                                                            ","+VACATION_DAY_OFF_TYPE+","+VACATION_COMMENT+
                                                            " FROM "+USER_TABLE+
                                                            " INNER JOIN "+VACATION_TABLE+" ON "+USER_TABLE+"."+USER_ID + " = " + VACATION_TABLE + "." +VACATION_USER_ID;


    public static final String SORT_USERS_BY_DATE = " WHERE " + VACATION_TABLE + "." + VACATION_START_DATE + " >= ?1 AND "
                                                             + VACATION_TABLE + "." + VACATION_END_DATE + " <= ?2";
}

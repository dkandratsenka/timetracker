package by.ts.tt.utilities;

public class VacationTableContsants {
    public static final String VACATION_TABLE = "user_vacation";
    public static final String VACATION_ID = "uv_id";
    public static final String VACATION_USER_ID = "uv_user_id";
    public static final String VACATION_START_DATE = "uv_start_date";
    public static final String VACATION_END_DATE = "uv_end_date";
    public static final String VACATION_DURATION = "uv_duration";
    public static final String VACATION_DAY_OFF_TYPE = "uv_dayofftype";
    public static final String VACATION_COMMENT = "uv_comment";

    public static final String QUERY_VACATION_UPDATE =  "UPDATE "+ VACATION_TABLE +
                                                        " SET " + VACATION_START_DATE + " = ?1,"+
                                                        VACATION_END_DATE + " = ?2, "+
                                                        VACATION_DURATION + " = ?3, "+
                                                        VACATION_DAY_OFF_TYPE + " = ?4, "+
                                                        VACATION_COMMENT + " = ?5 "
                                                        +"WHERE "+VACATION_USER_ID + " =  ?6";
}

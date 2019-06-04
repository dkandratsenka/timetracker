package by.ts.tt.utilities;

import by.ts.tt.DTO.UserVacationDTO;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import static by.ts.tt.utilities.UserTableConstants.USER_ID;
import static by.ts.tt.utilities.UserTableConstants.USER_NAME;
import static by.ts.tt.utilities.VacationTableContsants.*;

public class converterListMapToListUserVacationDto {

    public static List<UserVacationDTO> convert(List<Map> listMap){
        return listMap.stream().map(item -> {
                                            UserVacationDTO uv = new UserVacationDTO();
                                            uv.setId((Integer) item.get(USER_ID));
                                            uv.setName((String) item.get(USER_NAME));
                                            uv.setStartDate((Date) item.get(VACATION_START_DATE));
                                            uv.setEndDate((Date) item.get(VACATION_END_DATE));
                                            uv.setDuration((Integer) item.get(VACATION_DURATION));
                                            uv.setDayOffType((Integer) item.get(VACATION_DAY_OFF_TYPE));

                                            byte[] array = ((byte[]) item.get(VACATION_COMMENT));
                                            if(array == null) uv.setComment("");
                                            else uv.setComment(new String(array));

                                            return uv;
                                        }).collect  (   ArrayList::new,
                                                        ArrayList::add,
                                                        ArrayList::addAll);
    }
}

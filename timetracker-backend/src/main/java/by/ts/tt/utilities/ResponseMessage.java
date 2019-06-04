package by.ts.tt.utilities;

public class ResponseMessage {

    private String message;
    private Object object;

    public ResponseMessage(Object o, String message){
        this.object = o;
        this.message =message;
    }

    public ResponseMessage(Object o){
        this(o,null);
    }

    public ResponseMessage(String message){
        this(null,message);
    }

    public String getMessage() {
        return message;
    }


    public Object getObject() {
        return object;
    }

}

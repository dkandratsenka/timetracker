export const fetchTo = (url,params) => {
    return fetch(url,params).then(response => {
                                        if(response.ok)
                                            return response;
                                        else{
                                            let error = new Error("Error: " + response.status + ": " + response.statusText );
                                            throw error;
                                        }
                                        }, erorrMessage => {
                                            let error = new Error(erorrMessage.message);
                                            throw error;
                                        })
                    .then(response => response.json())
}
import React, { Component } from "react";

class MeteForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            r:{
                ordinationType: 0,
                ids: []
            }
        }
    }

    componentWillMount()
    {
        fetch('http://localhost:8080/findAll')
                    .then(
                        function(response) 
                        {
                            if (response.status !== 200) {
                                console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                                return;
                            }
                  
                            // Examine the text in the response
                            response.json()
                                    .then(function(data) 
                                    {
                                        console.log(data);
                                    }
                                    );
                        }
                    )
                    .catch(function(err) 
                    {
                      console.log('Fetch Error :-S', err);
                    })
    }

    render()
    {
        return(
            <>
                
            </>
        );
    }
}

export default MeteForm;
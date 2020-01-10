import React, { Component } from "react";


class CitySelector extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            cities: [],
            selected: 0
        };
    }

    componentWillMount()
    {
        fetch('http://localhost:8080/getCities')
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

export default CitySelector;
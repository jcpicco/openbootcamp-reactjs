import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import { Button } from '@mui/material';


const ChuckNorris = () => {
    const [joke, setJoke] = useState('');
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    useEffect(() => {
        obtainJoke();
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data.value);
                    setJoke(response.data.value);
                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            });
    }


    return (
        <div>
            <h1>Axios Example</h1>
            { joke !== null ? 
                (
                    <div>
                        <h2>{ joke }</h2>
                    </div>
                )
            : null }
            <div>
                <Button style={ { backgroundColor: '#5DBA40' } } variant="contained" onClick={ () => setLike(like+1) }>{ like }</Button>
                <Button style={ { backgroundColor: '#F40B27' } } variant="contained" onClick={ () => setDislike(dislike+1) }>{ dislike }</Button>
                <hr/>
                <button onClick={ obtainJoke }>
                    Next joke
                </button>
            </div>
        </div>
    );
}


export default ChuckNorris;

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Axios from "axios";

const Main = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const [loading, setLoading] = useState(false);

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        setLoading(true)
        const result = await Axios.get(`https://api.edamam.com/search?q=all&app_id=${APP_ID}&app_key=${APP_KEY}`);
        if (!result?.data?.more) {
            return setAlert("No food with such name");
        }
        console.log(result.data.hits);
        setRecipes(result.data.hits);
        setAlert("");
        setLoading(false)
    }

    const getSearchData = async () => {
        setLoading(true)
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setAlert("");
        } else {
            const result = await Axios.get(`https://api.edamam.com/search?q=all&app_id=${APP_ID}&app_key=${APP_KEY}`);
            if (!result?.data?.more) {
                return setAlert("No food with such name");
            }
            console.log(result.data.hits);
            setRecipes(result.data.hits);
            setAlert("");
        }
        setLoading(false)
    };

    const onChange = e => {
        if(e.target.value === "") {
            getData();
        }
        setAlert("")
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getSearchData();
    };

    return (
        <div className='main'>
            <Header onSubmit={onSubmit} onChange={onChange} alert={alert} query={query} />
            <Body recipes={recipes} loading={loading} />
        </div>
    );
}

export default Main;
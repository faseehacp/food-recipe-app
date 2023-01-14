import React, { useState } from 'react';
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from '../Recipe/Recipe';
import { Spin } from 'antd';

const Body = (props) => {
    return (
        <div className='body'>
            <div className='body-head'>
                <div className='title'>
                    <h1>Only the best recipes!</h1>
                    <p>Today's new recipes for you</p>
                </div>
                <div className='count'>
                    <div className='tutorial-count'>
                        <h1>168</h1>
                        <p>Tutorials</p>
                    </div>
                    <div className='recipe-count'>
                        <h1>304</h1>
                        <p>Recipes</p>
                    </div>
                </div>
            </div>
            <Spin spinning={props.loading}>
                <div className="recipes">
                    {props.recipes !== [] &&
                        props.recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
                </div>
            </Spin>
        </div>
    );
}

export default Body;
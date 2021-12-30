import React from "react";
import Post from "./Post";
import './style.css';



const Main = () => {
    


    const onclick =()=>{
        alert ("نام خانوادگی شما به راحتی وارد دیتابیس شد ");
    }


    
    return <div>
    <label>نام خود را وارد کنید  : </label>
    <input placeholder={'نام و نام خانوادگی'}  ></input>
    <button className={'ok'} onclick={onclick} > تایید </button>

    <h1 className={'post-list'}>post list </h1>
    <Post/>
    </div>
};

export default Main;






// events in react is important 

// state in react is important  state => وضعیت 
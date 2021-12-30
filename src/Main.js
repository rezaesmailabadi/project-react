import React from "react";
import Post from "./Post";
import './style.css';



const Main = () => {
    


    const onclick =()=>{
        alert ("نام خانوادگی شما به راحتی وارد دیتابیس شد ");
    }

    const onclick2 =()=>{
        alert("به به چه شکوهی داره چه زور  و بازویی داره خوش به حال بی بی رقیه به به چه عمویی داره ")
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

// states rerendr components 

// با عوض شدن استیت ها کامپوننت دوباره ریرندر میشود 

// state :  کامپوننت هایی هستند که در همه ی صفحات اپلیکشن ما تکرار میشه ولی محتوای درون آن در هر صفحه تغییر میکند
// برای مثال قسمت تگ های هر صفحه جداگانه است و آن را میتوانیم استیت در نظر بگیریم 
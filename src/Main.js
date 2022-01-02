import React from "react";
import Post from "./Post";
import './style.css';
import reza from "./reza";



const posts = [
    {
        title : "post 1",
        desc : "desc post1"
    },
     {
        title : "post 2",
        desc : "desc post2"
    },
     {
        title : "post 3",
        desc : "desc post3"
    },
     {
        title : "post 4",
        desc : "desc post4"
    },
    // کل داستان به این صورته که ما میخوایم از این مقادیر در یک جای دیگه از برنامه استفاده کنیم و مقادیر آن را پاس بدهیم 
];








const Main = () => {
    

// --------------------------------پروژه ی اول ------------------------------------
    // const onclick =()=>{
    //     alert ("نام خانوادگی شما به راحتی وارد دیتابیس شد ");
    // }

    // const onclick2 =()=>{
    //     alert("به به چه شکوهی داره چه زور  و بازویی داره خوش به حال بی بی رقیه به به چه عمویی داره ")
    // }
    
    // return <div>
    // <label>نام خود را وارد کنید  : </label>
    // <input placeholder={'نام و نام خانوادگی'}  ></input>
    // <button className={'ok'} onclick={onclick} > تایید </button>

    // <h1 className={'post-list'}>post list </h1>
    // <Post/>
    // </div>
// ----------------------------------------------------------------------------------------






// -----------------------پروژه ی دوم -------------------------------------------------

return <div>

    <h1>post list</h1>
    
    {/* وقتی میخوای کد جاوا اسکریپت بزنی باید دو تاآکوولاد باز و بسته بزار و سپس کد را بنویسی کد های اصلی برنامه جی اس ایکس میباشند   */}
   
   
    {
        //  این تابع یک کالبک (یا تابع) را به عنوان پارامتر گرفته و آن را بر روی تمام عناصر آرایه اجرا می کند
        posts.map(post=>{
            return <Post title={post.title} desc={post.desc} />
        })
    }

    
</div>


};

export default Main;






// events in react is important 

// state in react is important  state => وضعیت 

// states rerendr components 

// با عوض شدن استیت ها کامپوننت دوباره ریرندر میشود 

// state :  کامپوننت هایی هستند که در همه ی صفحات اپلیکشن ما تکرار میشه ولی محتوای درون آن در هر صفحه تغییر میکند
// برای مثال قسمت تگ های هر صفحه جداگانه است و آن را میتوانیم استیت در نظر بگیریم 
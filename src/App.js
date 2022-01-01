import React,{useState} from 'react';
import Header from "./Header";
import Main from "./Main";


// قالب اصلی پروژه

// ---------------------پروژه ی اول ----------------------
// const App =()=>{
//     return <div>
//         <Header/>
//         <Main/>
//     </div>
// };

// export default App;
// ----------------------------------------------------






// ---------------------------پروژه ی دوم ---------------------------
// class MyComponent extends React.Component{
    // زمانی استفاده میشه که بخوایم یک شی ازش درست کنیم و در جای دیگری از برنامه استفاده کنیم 

//     state = {
//         conter : 35
//         الان عملا قراره یه عملیاتی روی این استیت انجام بشه اون عملیات در فانکشن نوشته بشه و کسی که قراره اون عملیات رو انجام بده کلید ما میباشد
//     }


//     incCounter =()=>{
//         console.log("counter clicked");
        
//         this.setState({
//             counter : this.state.counter+1
//         });
//     }

//     render(){
//         return <div>
//             <p>{this.state.counter}</p>
//             <button onClick={this.incCounter}>شمارش</button>
//         </div>
//     }
// }

// export default MyComponent;
// ------------------------------------------------------------






// ----------------------------پروژه ی دوم با سینتکس ساده تر -------------------------------


// useState is hook 
// هوک یک تابع ویژه است که به شما اجازه می‌دهد از امکانات ری‌اکت استفاده کنید


const FancApp =()=>{

    const[counter,setCounter] = useState(1)
    // اولی اسم خود ستر ما میباشد و دومی فانکشنی که قراره ستر مارو ست کنه 
    // هوک یوز استیت دوتا مقدار میگیره یکی اون استیت  ما و یکی تایعی که برای به روزرسانی مقدار آن استفاده میشود 
    


    const incCounter =()=>{
        console.log("counter clicked");
        setCounter(counter+1);
        // ست کانتر یک فانکشن میباشد 
    }


    return (
        <div>
            <p> {counter} </p>
            <button onClick={incCounter}>inc</button>
        </div>
    )
}
export default FancApp;


// به این طرز فراخوانی کردن میگن فانکشنال کامپوننت
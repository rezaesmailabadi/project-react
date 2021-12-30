import React from 'react'
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
class MyComponent extends React.Component{

    state = {
        conter : 35
    }


    incCounter =()=>{
        console.log("counter clicked");
        
        this.setState({
            counter : this.state.counter+1
        });
    }

    render(){
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.incCounter}>شمارش</button>
        </div>
    }
}

export default MyComponent;









// به این طرز فراخوانی کردن میگن فانکشنال کامپوننت
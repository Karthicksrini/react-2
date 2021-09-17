import { useEffect, useState } from "react";


function Posts(){

    let [api,setapi]=useState([])
    useEffect(()=>{
        console.log("post page")
 fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
         console.log(data)
        setapi(data);
        //  api.push(data)
         console.log(api)
        })
    },[])
return(
    <>
    <div>
    <p>Welcome to Post Page </p>
    <table>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            </table>

    {api.map(({userId,id,title,body})=>{
        return(
              
                <tr key ={id}>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
        );

       
    })}
    </div>
    </>
)
}
export default Posts;
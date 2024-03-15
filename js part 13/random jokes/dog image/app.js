const url="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config={headers: { Accept: "application/json" } };
        
        let res=await axios.get(url,config);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}











/*
    let url="https://catfact.ninja/fact";
        fetch(url)
        .then((res)=>{
            return res.json();
            })
            .then((data)=>{
                console.log("data1= ",data.fact);
                return fetch(url);
            })

            .then((res)=>{
                return res.json();
                })
                .then((data2)=>{
                    console.log("data2= ",data2.fact);
                    return fetch(url);
                })
        .catch((err)=>{
            console.log("error-",err);
        });
*/

 /*       //using async function

        let url="https://catfact.ninja/fact";
        async function getFacts(){
            try{
                let res=await fetch(url);
                let data=await res.json();
                console.log(data.fact);

                let res2=await fetch(url);
                let data2=await res2.json();
                console.log(data2.fact);
            }
            catch(e){
                console.log("error-",e);
            }
            console.log("byyyyyy!!!!!!!!!");
        }
*/


/*
         let btn=document.querySelector("button");
         let url2="https://dog.ceo/api/breeds/image/random";

         btn.addEventListener("click",async()=>{
                let link=await getImage();
                console.log(link);
                let img=document.querySelector("#result");
                img.setAttribute("src",link);


         });

         
        //async function using axios
        async function getImage(){
            try{
            let res=await axios.get(url2);
            return res.data.message;
            } catch (e){
                console.log("error-",e);
                return "no image found";
            }
         }

*/



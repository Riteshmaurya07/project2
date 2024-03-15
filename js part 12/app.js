/*       //async function
       async function greet(){
            throw "404 web page not found";
            return "namaste ji!!";
        }
        greet()
        .then((result)=>{
            console.log("promise was resolved");
            console.log("result was:", result);
        })

        .catch((err)=>{
            console.log("promise was rejected with err:", err);
        });
*/

 /*
            function getNum(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let num=Math.floor(Math.random()*10)+1;
                    console.log(num);resolve();
                },1000);
                
            });
        }
        async function demo(){
            await getNum();
            await getNum();
            await getNum();
            await getNum();
        }
*/
        //change text color
        let h1=document.querySelector("h1");

        function changeColor(color, delay){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    h1.style.color=color;
                    console.log(`color changed to ${color} !`);
                    resolve("color changed!");
                },delay)
            });
        }

        async function demo(){
           await changeColor("red",1000);
           await changeColor("blue",1000);
           await changeColor("green",1000);
           await changeColor("orange",1000);
           await changeColor("red",1000);          
            await changeColor("pink",1000);
           await changeColor("grey",1000);
           await changeColor("yellow",1000);
           await changeColor("brown",1000);
           await changeColor("orange",1000);
           await changeColor("skyblue",1000);
        }
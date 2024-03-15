let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!");
        },delay);
    });
}
changeColor("red",1000)
    .then(()=>{
        console.log("red color was completed");
        return changeColor("blue",1000);

    })
    .then(()=>{
        console.log("blue color was completed");
        return changeColor("orange",1000);

    })
    .then(()=>{
        console.log("orange color was completed");
        return changeColor("pink",1000);

    })
    .then(()=>{
        console.log("pink color was completed");  

    })
  

/*  let h1=document.querySelector("h1"); 
     function changeColor(color, delay, nextColorChange){
        setTimeout(()=>{
            h1.style.color=color;
            if(nextColorChange) {
                nextColorChange();
            }
        },delay);
    }
*/
/*
        changeColor("orange",1000,()=>{
            changeColor("red",1000,()=>{
                changeColor("yellow", 1000,()=>{
                    changeColor("blue", 1000,()=>{
                        changeColor("green", 1000,()=>{
                            changeColor("pink", 1000,()=>{
                                changeColor("purple", 1000,()=>{
                    
                                });
                        
                            });
                    
                        });
                
                    });
            
                });

            });
        });

*/

// function saveToDb(data,sucess,failure){
//     let internetSpeed=Math.floor(Math.random()*10+1);
//     if(internetSpeed>4){
//         sucess();
//     }
//     else{
//         failure();
//     }
// }
// saveToDb("hello ji", ()=>{
//     console.log("success: your data was saved ");
//     saveToDb("namaste",()=>{
//         console.log("success 2: your data was saved <3");
//     },
//     ()=>{
//         console.log("failure 2: weak connection");
//     }
//     );
//     ()=>{
//         console.log("failure 2: weak connection");
//     }
// });

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10+1);
        if(internetSpeed>4){
           resolve("success:data was saved");
        }
        else{
            reject("failure:weak connection");
        }
    
        
    }

    );
}
/*
        // then and catch
        let request=saveToDb("apnacollege");
        request
        .then(()=>{
            console.log("promise was resolved");
            console.log(request);
        })
        .catch(()=>{
            console.log("promise was rejected");
            console.log(request);
        });
*/


 /*       //another method
        saveToDb("apnacollege")
        .then(()=>{
            console.log("promise was resolved");
            console.log(request);
        })
        .catch(()=>{
            console.log("promise was rejected");
            console.log(request);
        });

*/

/*
        //result and errors in promises
        saveToDb("apnacollege")
        .then((result)=>{
            console.log("data1 saved");
            console.log("result of promise:" ,result);
            return saveToDb("ritesh");
            
        })
        .then((result)=>{
            console.log("data2 saved");
            console.log("result of promise:" ,result);
            return saveToDb("maurya");
            
        })
        .then((result)=>{
            console.log("data3 saved");
            console.log("result of promise:" ,result);
        
            
        })
        .catch((error)=>{
            console.log("promise was rejected");
            console.log("error of promise:" ,error);
        
        });

*/ 


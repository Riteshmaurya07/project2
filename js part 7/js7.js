/*        //this keyword
        const student={
            name:"ritesh",
            lastName: "maurya",
            age:20,
            mobileNumber:83033,
            getFullname(){
                console.log(this.name+" "+this.lastName)
            }

        }
        console.log(student.getFullname());
*/

/*
        //try and catch
        console.log("excecuting try and catch statement");
        try{
            console.log(a+b);
        } catch{
            console.log("data not found for a and b");
        }
        console.log("system hai bhai:)");
*/

/*
        //arrow function
        const sum=(a,b)=>{
            console.log(a+b);
        };
        sum(2,5);
*/

/*
        //implicit return
        const mul=(a,b)=>(
            a*b
        );
        let ans=mul(2,3);
        console.log(ans);
*/

 /*   
     //  set timeout
        console.log("hii there!! <3")
        setTimeout(()=>{
            console.log("apna college");
        },4000)
        console.log("welcome to .....")

        //SET INTERVAL 
        let id=setInterval(()=>{
            console.log("hello ji  kya hal chal");
        },2000)
        console.log("badhiya ek dam")

        //stop the process 
        clearInterval(id);

*/

/*
        const student={
            name:"ritesh",
            lastName: "maurya",
            age:20,
            mobileNumber:83033,
            math:89,
            eng:81,
            hindi:85,
            getFullname(){
                console.log(this.name+" "+this.lastName)
            },
            getMarks:()=>{
                console.log(this);
                return this.marks;
            },
            getInfo1: function(){
                setTimeout(()=>{
                    console.log(this);//student
                },2000);
            },
            getInfo2: function(){
                setTimeout(()=>{
                    console.log(this);//window
                },2000);
            },
        }
        console.log(student.getFullname());
        console.log(student.getInfo1);

        console.log(student.getInfo2);
*/

//practice question
//problem 1 square of a number using arrow function
 square=((n)=>{
    console.log(n*n);
 })
 square(6);

 //problem 2 
 //print hello world 5 times
 let id=setInterval(()=>{
    console.log("hello world!!!!!!");
 },2000);
 setTimeout(()=>{
    clearInterval(id);
 },5*2000);
 //setInterval();

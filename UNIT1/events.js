var eventEmitter=require("events") //eventEmitter is a class
var obj=new eventEmitter() //created a object to use function of a class


//addListener is used to regist/listen for an event -1st method
//This will listen to the event using the first paramter specifies and print the second paramter specifies in the emit function.
obj.addListener('Weather',(msg)=>{
    console.log(msg)
}) 
//this will  shout an event
obj.emit('Weather',"Weather is going to change")
obj.emit('Weather',"Weather is going to change")


//on- Second method to listen/register for an event
obj.on('Market',(msg)=>{
    console.log(msg)
})
obj.emit('Market',"Market is going to open")
obj.emit('Market',"Market is going to open")


//once- third method to listen/register for an event.This will listen to the event only once. If we try to shout the same event again it will not work.
obj.once('circus',(msg)=>{
    console.log(msg)
})
obj.emit('circus',"Circus is going to start")
obj.emit('circus',"Circus is going to start")

//default listeners
console.log(obj.getMaxListeners())

obj.setMaxListeners(25)
// for(let i=0;i<20;i++){
//     obj.on('event',(msg)=>{
//         console.log(msg)
//     })
// }

// obj.emit('event',"This is an event")


var fun1=()=>{
    console.log("hi market open")
}

var fun2=()=>{
    console.log("hi market open for second time")
}

obj.on('market',fun1)
obj.on('market',fun2)
obj.emit('market')

obj.removeListener('market',fun1)
obj.emit('market')

obj.removeAllListeners('market')
obj.emit('market')

//write a code to count the number of time the event is emitted and store the number of count in json file
obj.addListener('Weather0',(c)=>{
    console.log(c++)
})
obj.addListener('Event0',(c1)=>{
    console.log(c1++)
})
obj.addListener('Marketopen0',(c2)=>{
    console.log(c2++)
})
obj.emit('Marketopen0')
obj.emit('Weather0')
obj.emit('Event0')
obj.emit('Marketopen0')
obj.emit('Marketopen0')
obj.emit('Marketopen0')

obj.emit('Event0')
obj.emit('Event0')
obj.emit('Event0')
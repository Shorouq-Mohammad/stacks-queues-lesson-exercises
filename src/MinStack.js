/* Write your class below */
const Stack = require('./Stack.js')
class MinStack{
    constructor(){
        this.stack = []
        this.length = 0
        this.minValues = new Stack() 
    }
    push(item){
        if(this.isEmpty() || this.minValues.peek() > item){
            this.minValues.push(item)
        }
        this.stack[this.length] = item
        this.length ++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        this.length --
        if(this.minValues.peek() === this.stack[this.length]){
            this.minValues.pop()
        }
        return this.stack[this.length]
    }
    peek(){
        return this.isEmpty() ? null : this.stack[this.length - 1 ]
    }
    getMin(){
        return this.isEmpty() ? null : this.minValues.peek()
    }
    isEmpty(){
        return this.length === 0 
    }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19

/* Do not remove the exports below */
module.exports = MinStack
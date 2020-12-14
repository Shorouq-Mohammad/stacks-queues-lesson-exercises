/* Write your class below */
class Stack{
    constructor(){
        this.arr = []
        this.length =0;
    }
    push(item){
        this.arr[this.length] = item
        this.length ++
    }
    pop(){
        this.length --
        return this.isEmpty() ? null : this.arr[this.length]
    }
    peek(){
        return this.isEmpty() ? null : this.arr[this.length - 1]
    }
    isEmpty(){
        return this.length ? false : true
    }
    print(){
        let str =''
        for(let i =0; i< this.length; i++){
            str += this.arr[i] + ','
        }
        str = str.substring(0, str.length - 1 )
        str = '['+str+']'
        console.log(str);
        return str
    }
}

//You can paste the test code from the lesson below to test your solution

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true




/* Do not remove the exports below */
module.exports = Stack
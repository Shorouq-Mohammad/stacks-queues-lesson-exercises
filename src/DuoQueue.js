/* Write your class below */
const Queue = require('./Queue.js')

class DuoQueue{
    constructor(num){
        this.queues = []
        for(let i=0; i<num; i++){
            this.queues.push(new Queue())
        }
        
    }
    enqueue(person, qNum){
        // if(qNum >= this.queues.length){return null}
        this.queues[qNum-1].enqueue(person)
    }
    dequeue(qNum){
        this.queues[qNum-1].dequeue()
    }
    getLongestQueue(){
        let max = 0
        for(let i=1; i<this.queues.length; i++){
            if(this.queues[i].length > this.queues[max].length){
                max = i
            }
        }
        return this.queues[max]
    }
    getShortestQueue(){
        let min =0 
        for(let i=1; i<this.queues.length; i++){
            if(this.queues[i].length < this.queues[min].length){
                min = i
            }
        }
        return this.queues[min]
    }
    balanceQueues(){
        const longQueue = this.getLongestQueue()
        const shortQueue = this.getShortestQueue()
        while(this.difference(longQueue, shortQueue) > 1){
            shortQueue.enqueue(longQueue.dequeue())
        }

    }
    difference(queue1 , queue2){
        return queue1.length - queue2.length
    }
    getQueue(qNum){
        return this.queues[qNum-1]
    }
}

//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue(2)

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue
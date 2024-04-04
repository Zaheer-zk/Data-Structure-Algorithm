// Define a Queue class
class Queue {
  constructor() {
    this.elements = [];
  }

  // Method to add elements to the queue
  enqueue(element) {
    this.elements.push(element);
  }

  // Method to remove and return the first element from the queue
  dequeue() {
    return this.elements.shift();
  }

  // Method to get the front element of the queue
  front() {
    return this.elements[0];
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.elements.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.elements.length;
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.front()); // Output: 1

console.log("Dequeuing:", queue.dequeue()); // Output: 1

console.log("Front element after dequeue:", queue.front()); // Output: 2

console.log("Queue size:", queue.size()); // Output: 2

console.log("Is queue empty?", queue.isEmpty()); // Output: false

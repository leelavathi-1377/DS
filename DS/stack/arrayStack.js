const stack = []

stack.push("ravi")
stack.push("rajan")
stack.push("ram")
stack.push("krishna")
stack.push("gopal")

stack.pop()
stack.pop()
stack.pop()

console.log(stack)

stack.unshift("raviteja")
stack.unshift("raman") //adding from first

stack.shift()//deleting from first

console.log(stack)

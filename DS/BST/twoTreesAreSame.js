//Inorder to check if two trees are equal then their traversals must be same


class Node{
    constructor(data){
        this.data = data
        this.left = null 
        this.right = null
    }

}

function inOrder(root , sol){
    if(root == null){
        return 
    }
    inOrder(root.left , sol)
    sol.push(root.data)
    inOrder(root.right , sol)
}


function preOrder(root , sol){
    if(root == null){
        return 
    }
    sol.push(root.data)
    preOrder(root , sol)
    preOrder(root , sol)
}

function postOrder(root , sol){
    if(root == null){
        return 
    }
    postOrder(root.left , sol)
    postOrder(root.right , sol)
    sol.push(root.data)
}

function identicalTrees(root , root1){
    let res = []
    let res1 = []

    inOrder(root , res)
    inOrder(root1 , res1)
    if(res.toString() != res1.toString()){
        return false
    }

    res = []
    res1 = []

    preOrder(root, res);
    preOrder(root1, res1);
    if (res.toString() != res1.toString()) return false;


    res = [];
    res1 = [];

    postOrder(root, res);
    postOrder(root1, res1);
    if (res.toString() != res1.toString()) return false;
 
    return true;
}


let root, root1;
root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.left.right = new Node(5)


console.log(identicalTrees(root , root1))
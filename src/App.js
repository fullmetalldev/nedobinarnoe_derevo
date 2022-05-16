import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [state, setState] = useState(true);

    const [randomNum, setRandomNum] = useState('');

    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(data) {
            let newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }
    }

    const binarTree = new BinarySearchTree();

    const [tree, setTree] = useState(binarTree);

    const clickKey = (event) => {
        if (event.keyCode === 32) {
            setRandomNum(Math.floor(Math.random() * (100 - (-100)) + (-100)));
            binarTree.insert(Math.floor(Math.random() * (100 - (-100)) + (-100)));
        }
    };

    useEffect(() => {
        document.addEventListener("keypress", clickKey);
    }, []);

    useEffect(() => {
        setState(!state)
    }, [randomNum]);

    const showNumbers = (data) => {
        return <div className="center">
            <span>{data.data}</span>
            <div className="twosides">
                {data.left
                    ? <div className="left">{showNumbers(data.left)}</div>
                    : ""
                }
                {data.right
                    ? <div className="right">{showNumbers(data.right)}</div>
                    : ""
                }
            </div>
        </div>


    };

    return (
        <div className="App">
            <div className="All">
                {tree.root !== null
                    ? <div className="BinarTree">
                        {showNumbers(tree.root)}
                    </div>
                    : ""
                }
            </div>
        </div>
    );
}

export default App;

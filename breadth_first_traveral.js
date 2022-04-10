
const breadthFirstPrint=(graph,source)=>{

    const queue=[source];


    while(queue.length > 0){

        

        const current=queue.shift();

        console.log(current)

        for(neighbor of graph[current]){

            queue.push(neighbor);

        }

    }


};




const graph={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

breadthFirstPrint(graph,'a');   // Output -> a c e b d f
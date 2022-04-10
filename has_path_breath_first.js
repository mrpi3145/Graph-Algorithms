
const haspath=(graph,source,dest)=>{

    const queue=[source];

    while(queue.length>0){

    const current=queue.shift();

    if(current==dest){
        return true;
    }
        

    for(neighbor of graph[current]){

    
        queue.push(neighbor);

    }
    }

    return false;
};






const graph={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
};

console.log(haspath(graph,'f','k'));
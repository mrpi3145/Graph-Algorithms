
const haspath=(graph,source,dest)=>{

    if(source==dest)
    return true;

    for(neighbor of graph[source]){
        if(haspath(graph,neighbor,dest)==true)
        return true;
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

console.log(haspath(graph,'f','j'));
const maxpath=(row,col)=>{

    if(row==0 || col==0)
    return 0;

    if(row==1 && col==2)
    return 1;

    if(row==2 && col==1)
    return 1;

    sum=maxpath(row-1,col)+maxpath(row,col-1);

    return sum;
}


console.log(maxpath(3,3));
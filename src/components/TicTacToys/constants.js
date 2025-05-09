/*
const winningCombos=[
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8]
]

*/
const winningCombos=[...Array.from({length:3}).map((_,i)=>Array.from({length:3}).map((_,j)=>i*3+j)),
...Array.from({length:3}).map((_,i)=>Array.from({length:3}).map((_,j)=>i+3*j)),
Array.from({length:3}).map((_,i)=>i*4),
Array.from({length:3}).map((_,i)=>i*2+2)]


export const checkWinnings=(arr)=>{

    return winningCombos.reduce((win,combo)=>{
        if(arr[combo[0]]&&arr[combo[0]]==arr[combo[1]]&&arr[combo[1]]==arr[combo[2]]){
            return win||true;
        }
        return win||false;
    },false)
}

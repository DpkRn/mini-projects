export const convertToDigitArray=(number=null)=>{
    if(number==null) return   
         [false,false,false,false,false,false,false]

    if(number=='0'){
        return [true,true,true,false,true,true,true]
    }
    if(number=='1'){
        return [false,false,false,false,false,true,true]
    }
    if(number=='2'){
        return [false,true,true,true,true,true,false]
    }
    if(number=='3'){
        return [false,false,true,true,true,true,true]
    }
    if(number=='4'){
        return [true,false,false,true,false,true,true]
    }
    if(number=='5'){
        return [true,false,true,true,true,false,true]
    }
    if(number=='6'){
        return [true,true,true,true,true,false,true]
    }
    if(number=='7'){
        return [false,false,true,false,false,true,true]
    }
    if(number=='8'){
        return [true,true,true,true,true,true,true]
    }
    if(number=='9'){
        return [true,false,true,true,true,true,true]
    }
    
}
const toggleValue = (checked, subject)=>{
    if(!checked.includes(subject)){
        return checked.concat(subject)
    }else{
        return checked.filter(e => e !== subject)
    }
}

export default toggleValue;
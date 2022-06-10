export const fact = (num)=>{
    if(num==1) return 1;
    return num * fact(num-1);
}

export const save = (msg, onSuccess) => {
   window.localStorage.setItem("msg", msg);
   onSuccess();
}


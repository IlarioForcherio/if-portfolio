


const animatedScrollObserver = new IntersectionObserver(
    
    
    // (entries) =>{
    //     entries.forEach((elem) =>{
    //         if(elem.isIntersecting){
    //             elem.target.classlist.add("enter");
    //         }else{
    //             elem.target.classList.remove('enter')
    //         }
    //     })
    // }
    // 
    (entries , animatedScrollObserver) =>{
         entries.forEach((entry) =>{
             if(entry.isIntersecting){
                
                  entry.target.classlist.add("enter");
                 animatedScrollObserver.unobserve(entry.target)

             }
         })
     }

);

export default{
    bind(item){
     item.classList.add('before');
     animatedScrollObserver.observe(item);
    }
}
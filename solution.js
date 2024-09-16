export async function promiseStack(promises){
   for(let promise of promises){
         console.log( await promise())
   }
}



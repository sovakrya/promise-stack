export async function promiseStack(promises){
   for(let promise of promises){
        await console.log(promise())
   }
}



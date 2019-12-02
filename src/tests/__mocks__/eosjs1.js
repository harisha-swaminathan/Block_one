const Eos=require.requireActual('eosjs')

Eos.JsonRpc=jest.fn(()=> {
   return {
       get_info:jest.fn(()=>{
           
       })
   }
})


export default Eos

import React from 'react'

export default function ItemList(probs) {
    console.log(probs);
    const {itemlst,delItm,update}=probs;
    //console.log('Child');
    //console.log(probs.del);
    //console.log('Child calling'+probs.itemlst);
  return (
    <div className='list'>
      {itemlst?.length!==0
      ?itemlst.map((val)=>{
        return(
            <>
            <div className='lstflx'>
            <h3 className='box'>{val.name}</h3>
            <span>   {val.id} </span>
            <button onClick={()=>delItm(val.id)} className='btn'>Delete</button>
            <button onClick={()=>update(val.id)} className='btn'>Update</button>
            </div>
            
            </>
        )
      }):"No Item to Display"}
    </div>
  )
}
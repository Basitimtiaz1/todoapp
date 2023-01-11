import { useRef, useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid';
function App() {
  const inputhok=useRef();
  const [data,setData]=useState('Abdul Basit Imtiaz');
  const [List,setList]=useState([]);
  const [id,setid]=useState();
  const [Toggle,setToggle]=useState(false);
  const add=()=>{
    if(Toggle){
      const setUp=List.map((item)=>{
        if(item.id===id){
          console.log(id);
          return {...item,name:data};
        }
        return item;
      })
      
      setList(setUp);
      setToggle(false);
      toast.info("Updated");

    setData('');
    inputhok.current.focus();
    }
    else{
    const obj={id:uuid(),name:data};
    //data.push('A');
    setList((prev)=>[...prev,obj]);
    //console.log('Added');
    //console.log(List);
    setData('');
    toast.success("Added");
    inputhok.current.focus();
    }
  }
  const del=(id)=>{
        if (window.confirm("Press a button!") == true) {
            const filter=List.filter((val)=>val.id!==id);
            //alert('Deleted Succesfully')
            setList(filter);
            toast.error("Deleted");
            //console.log('Deleted');
        } else {
            toast.error('Cancel');
        }

  }
  const deletedb=(id)=>{
    const filter=List.filter((val)=>val.id!==id)
    //console.log('delete'+id);
    setList([]);
  }
 const dataHnd=(e)=>{
    setData(e.target.value);
    //setList((prev)=>[...prev,e.target.value]);
    //console.log(e.target.value);
    //console.log(List);
  } 
  const updItm=(id)=>{
    console.log('update Click '+id);
    const upd=List.find((obj)=>{
      
      return obj.id===id;
    
    //return {...obj,name:data};
    //}
      //setList(upd);
    })
    setData(upd.name);
      setid(upd.id);
      setToggle(true);
      inputhok.current.focus();
    
  }
  return (
    <div> 
      <div className='container'>
      <h1>ToDo App List</h1>
          <div className='header'>
            <input type='text' name='data1' value={data} onChange={dataHnd} className='txt' ref={inputhok}/>

            <button onClick={add} className='btn' disabled={data.length<=2?true:false}>
              {Toggle?'Update':'Add'}
            </button>
            <button onClick={()=>deletedb(1)} className='btn'>Delete All</button>

          </div>
          <h1 className='head'>List</h1>
          <ItemList itemlst={List} delItm={del} update={updItm}/>
          <ToastContainer />
      </div>
    </div>
  );
}

export default App;

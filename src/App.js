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
  const add=()=>{
    const obj={id:uuid(),name:data};
    //data.push('A');
    setList((prev)=>[...prev,obj]);
    //console.log('Added');
    //console.log(List);
    setData('');
    toast.success("Added");
    inputhok.current.focus();
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
    console.log('update Click');
    
  }
  return (
    <div> 
      <div className='container'>
      <h1>ToDo App List</h1>
          <div className='header'>
            <input type='text' name='data1' value={data} onChange={dataHnd} className='txt' ref={inputhok}/>

            <button onClick={add} className='btn' disabled={data.length<=2?true:false}>Add</button>
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

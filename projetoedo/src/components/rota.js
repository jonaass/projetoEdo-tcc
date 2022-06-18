import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Index() {
    const navigate =  useNavigate();
      
      
    useEffect(() => {
           if (!storage ('usuario-logado')) {
              navigate('/');
           }
    }, [])
  
    
  
}
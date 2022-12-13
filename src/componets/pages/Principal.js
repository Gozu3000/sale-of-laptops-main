import { useEffect, useState, useContext } from "react"
import {Grid, Stack,TextField} from "@mui/material";
import GetApi from "../common/getapi/Getapi";
import RenderCard from '../card/Card'
import { useSearchParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { GuardarLista } from '../../features/taskSlices'


const Principal = () =>{
    

    const [searchParams, setSearchParams] = useSearchParams();
    
    const dispatch = useDispatch()
    
    const handleFilter = (e) =>  {setSearchParams({filter: e.target.value})}
    let filter = searchParams.get('filter') || ""
    
    
    const CallApi = async () => {
        const data = await GetApi();
        dispatch(GuardarLista(data)) 
    };
    
    useEffect(() => {
        CallApi();
    }, []);
    
    const laptops = useSelector(state => state.cartStore.laptops)
    


    return(

        <Grid container p={5}>

           <Stack  sx={{display:'flex', justifyContent:'center', width:500, marginX:'auto', height:'100px', outline:'none', border:'none'  }} >
               <TextField id="filled-basic" label="Search..." variant="standard" autoFocus autoComplete="off"
                          onChange={handleFilter}
                          value={filter}

                          
                           />
           </Stack>

            <Grid container spacing={2}>
                {   laptops && 
                    laptops.filter((laptop) => {
                    if (!filter) return true;
                    return laptop.especificaciones.model.toLowerCase().includes(filter.toLowerCase() ) })
                    .map((laptop, index) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3} 
                        key={index}> 
                        <RenderCard
                            id={laptop.id}
                            imagen={laptop.imagenes.position1}
                            model={laptop.especificaciones.model}
                            precio={laptop.especificaciones.precio}  
                            offert={laptop.especificaciones.offert}                                 
                        />
                    </Grid>
                ))}

            </Grid>
        </Grid>
    )

}

export default Principal



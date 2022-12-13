import { useParams, useNavigate} from 'react-router-dom' 
import { Grid, Typography,  Box, Button, Stack} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../features/taskSlices'

import Table from '../table/Table'
import Carrusel from '../imagenes-carrusel'


const Laptop =()=>{

const params = useParams()
const navigate = useNavigate()
const dispatch = useDispatch()

const laptops = useSelector(state => state.cartStore.laptops)

const elemento = laptops && laptops.find(laptop =>( laptop.id === params.id  ))


const add_To_Cart=(id)=>{ 
    dispatch(addToCart(id))
}


return(
    
    <Grid container mt={5}>
      
      { elemento ?

        <Grid container>

            <Grid item xs={12} md={7}>
                <Carrusel imagen1={elemento.imagenes.position1} 
                          imagen2={elemento.imagenes.position2} 
                          imagen3={elemento.imagenes.position3} 
                          imagen4={elemento.imagenes.position4} 
                          imagen5={elemento.imagenes.position5} />
            </Grid>

            <Grid item xs={6} md={5}
                    sx={{
                         mx:{xs:'auto'},
                         minWidth:{xs:'300px'},
                         display:{md:'block'}
                        }}>
                <Stack sx={{width:{md:'80%'}, margin:{xs:'gray', md:'auto'}}}>        
                    <Typography variant='h6'>{elemento.especificaciones.model}</Typography>
                    <Box sx={{display:'flex', justifyContent:'space-between'}} mt={2} mb={2} color='gray'>
                        <Typography variant='body2' fontSize={'16px'}>SKU</Typography>
                        <Typography variant='body2' fontSize={'16px'}>{elemento.especificaciones.sku}</Typography>
                    </Box>



                    {   elemento.especificaciones.offert !== "" ?
                        (
                        <Box sx={{display:'flex', justifyContent:'space-between', color:'#607d8b'}}>
                            <Typography variant='body2' fontSize={'21px'}   >Normal</Typography>
                            <Typography variant='body2'  sx={{fontSize:'21px',textDecoration:'line-through'}}>
                                S/. {elemento.especificaciones.precio}</Typography>
                        </Box>
                        )
                        :
                        (
                        <Box sx={{display:'flex', justifyContent:'space-between', color:'#607d8b'}}>
                            <Typography variant='body2' fontSize={'21px'}   >Normal</Typography>
                            <Typography variant='body2'  sx={{fontSize:'21px'}}>
                                S/. {elemento.especificaciones.precio}</Typography>
                        </Box> 
                        )
                        
                    }

                    {
                        elemento.especificaciones.offert !== "" &&                        
                        <Box sx={{display:'flex', justifyContent:'space-between', color:'#6a148e'}}>
                            <Typography variant='body2' fontSize={'21px'}>Internet</Typography>
                            <Typography variant='body2' fontSize={'21px'}>S/. {elemento.especificaciones.offert}</Typography>
                        </Box>

                    }
                
                    { 
                        elemento.especificaciones.offert !== '' && 
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                            <Typography variant='body2' fontSize={'21px'} color='#666'>Descuento</Typography>

                            <Typography variant='body2' fontSize={'21px'}>
                            {Math.round((elemento.especificaciones.precio - elemento.especificaciones.offert)/elemento.especificaciones.precio*100) + " %"}
                            </Typography>
                        </Box>
                    }  

                    <Stack marginTop={2}>
                        <Button variant='contained' color='success' sx={{width:'200px', margin:'auto'}}
                                onClick={ ()=> add_To_Cart(elemento.id) }>
                            Agregar al carrito
                        </Button>
                    </Stack>
                        
                </Stack>

            </Grid>

            <Grid item xs={12}>      
                <Stack mt={4}>
                    <Table  alto={elemento.especificaciones.alto}
                            ancho={elemento.especificaciones.ancho}
                            brand={elemento.especificaciones.brand}
                            disco={elemento.especificaciones['capacidad disco duro']}
                            procesador={elemento.especificaciones.procesador}
                            resolucion={elemento.especificaciones.resolucion}
                            sku={elemento.especificaciones.sku}
                            wifi={elemento.especificaciones['wi fi']}
                            ram={elemento.especificaciones.ram}
                    />
                </Stack>
            </Grid>

        </Grid>        
        
          
      :  navigate("*") }
        
    </Grid>
)


}

export default Laptop
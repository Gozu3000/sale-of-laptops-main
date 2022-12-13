import React from 'react'
import {useState} from 'react'
import { Typography, Box, Drawer,Badge, IconButton, Stack, Button} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import './drawerCart.css'

import {useDispatch, useSelector} from 'react-redux'
import { RemoveAllFromCart, RemoveOneFromCart, ClearCart, addQuantity } from '../../features/taskSlices'


const DrawerCart = () => {
    
    
    const [open, setOpen] = useState(false)
    const carrito = useSelector(state => state.cartStore.cart)
    const dispatch = useDispatch()
    
    
    const OpenDrawer = () => setOpen(!open)
    const onClose = () => setOpen(!open)
    
    const EliminarTodoDelcarrito = (id) =>{
        dispatch(RemoveAllFromCart(id))
    }

    const restarCantidad = (id) =>{
        dispatch(RemoveOneFromCart(id))
    }

    const Vaciarcarrito = () =>{
        dispatch(ClearCart())
    }

    const sumarCantidad = (id) =>{
        dispatch(addQuantity(id))
    }


    let total = 0

    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        total += item.especificaciones.precio * item.quantity
        
    }


  return (

    <>
        <IconButton color="neutral" sx={{marginRight:'20px'}} onClick={OpenDrawer}>
            <Badge badgeContent={carrito.length} color="secondary" >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>

        <Drawer anchor='right' open={open} onClose={onClose} >
            <Box sx={{padding:'20px'}}>

                {   
                    carrito.length < 1 ?                
                    <Typography variant='h6'>Tu carrito está vacío </Typography>
                    :   
                    carrito.map(element => 
                        <Stack direction ='row' gap='10px' className='stack-drawer' key={element.id}>

                            <img src={element.imagenes.position1} alt='imagen' height='75px' width='55.5px'/>
            
                            <Stack direction='column'textAlign='center'>
            
                                <Typography>{element.especificaciones.brand}</Typography>
                                    <Typography>S/. {element.especificaciones.precio}</Typography>
                                    <Stack direction='row'>
                                    <IconButton color="neutral" size='small' 
                                     sx={{backgroundColor:'#9e9e9e', borderRadius:'0px','&:hover':{backgroundColor:'#616161'} }} 
                                     onClick={()=>sumarCantidad(element.id)}
                                    >                     
                                        <AddIcon  />
                                    </IconButton>
                                        
                                    <Stack justifyContent='center' m={1} > { element.quantity } </Stack>
            
                                    <IconButton color="neutral" size='small' 
                                    sx={{backgroundColor:'#9e9e9e', borderRadius:'0px',
                                    '&:hover':{backgroundColor:'#616161'} }}
                                    onClick={()=>restarCantidad(element.id)}
                                    >                     
                                        <RemoveIcon />
                                    </IconButton>
                                
                                </Stack>
                            </Stack>    
                            
                            <Stack direction='column'  >                 
                                <IconButton sx={{ color:'#e57373','&:hover':{backgroundColor:'#e57373', color:'#fafafa'} }}
                                        onClick={ ()=> EliminarTodoDelcarrito(element.id) }
                                >
                                <DeleteIcon />
                                </IconButton>
                            </Stack>
                    
                        </Stack>    
                    )

                }

                <Typography variant='h6' textAlign='right'>Total: { total } </Typography>

                <Stack className='button-actions' gap={'10px'} direction='row'>
                    <Button variant='contained' sx={{backgroundColor:'#0277bd', color:'white', 
                        '&:hover':{ backgroundColor:'#01579b' } }} 
                        onClick={ ()=> { Vaciarcarrito() }}
                        >
                    Vaciar carrito</Button>
                </Stack>

                <Stack className='button-actions' gap={'10px'} direction='row'>
                    <Button variant='contained' color='error' onClick={onClose}>Cerrar</Button>
                    <Button variant='contained' color='success'>Continuar</Button>
                </Stack>

            </Box>

        </Drawer>
    </>
  )
}

export default DrawerCart
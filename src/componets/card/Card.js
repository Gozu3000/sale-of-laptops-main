import {Card,CardContent,CardMedia, Typography,Stack} from '@mui/material';
import {Link} from "react-router-dom"


const RenderCard =({id,imagen, model, precio, offert}) => {

  return (

    <Card sx={{ maxWidth: 345, margin:0, marginTop:1, textAlign:'center'}}>
      <Link to={"/laptop/"+id}>
        <CardMedia sx={{objectFit:'contain', minWidth:'250px'}}
          component="img"
          height="240"
          image={imagen}
          alt="laptop"
          width={'100%'}
          />
      </Link>  

      <CardContent sx={{padding:0}}>

        <Typography gutterBottom variant="body1" component="div" sx={{display: 'block', height:'48px', overflow:'hidden'}} >
          {model}
        </Typography>
      </CardContent>

      <Stack mb={2}>
        <Typography size="small"  sx={{display:'block', color:'#607d8b', fontWeight:700, fontSize:'18px',
                    textDecoration:{xs: offert.length>1 ? 'line-through' : 'none'} }}>
          Normal: S/.{precio}</Typography>
       

        <Typography size="small"  sx={{display:'block', fontWeight:700, fontSize:'18px',  
                                        color:{xs: offert.length>1 ? 'red' : 'transparent' } }}>Oferta: S/.{offert}</Typography>
        
      </Stack>

    </Card>
  );
}

export default RenderCard


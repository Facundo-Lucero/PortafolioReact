
import { Box, Heading, Text } from '@chakra-ui/react'
import backgroundImage from './Img/trebolb.png'

const Hero = () => {
  return (

    <Box as="section"  id="Inicio"     >
        <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url(${backgroundImage})`}
      
      bgSize={{
        base: "600px 400px",  // Tamaño de la imagen para pantallas pequeñas
        sm: "600px 400px",    // Tamaño para pantallas pequeñas
        md: "800px 600px",  // Tamaño para pantallas medianas
        lg: "800px 600px",  // Tamaño para pantallas grandes
        xl: "800px 600px"     // Tamaño para pantallas extra grandes
    }}


      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="#04060D" 
            >
      <Heading
        as="h1"
        fontWeight="300"
    
        fontSize={{
            base: "40px",  // Tamaño del texto para pantallas menores a 480px
            sm: "40px",    // Tamaño del texto para pantallas entre 480px y 768px
            md: "70px",    // Tamaño del texto para pantallas entre 768px y 992px
            lg: "70px",   // Tamaño del texto para pantallas entre 992px y 1200px
            xl: "120px",   // Tamaño del texto para pantallas mayores a 1200px
        }}









        textAlign="center"
        pt="20px"
        bgGradient="linear(to-r, #8594eb, #e4a321)"
        bgClip="text"
        color="transparent"
      >
        Soy Front End Developer
      </Heading>
      <Heading
        as="h1"
        fontWeight="400"
        mt="50px"
       
        fontSize={{
            base: "70px",  // Tamaño del texto para pantallas menores a 480px
            sm: "70px",    // Tamaño del texto para pantallas entre 480px y 768px
            md: "70px",    // Tamaño del texto para pantallas entre 768px y 992px
            lg: "70px",   // Tamaño del texto para pantallas entre 992px y 1200px
            xl: "120px",   // Tamaño del texto para pantallas mayores a 1200px
        }}



        textAlign="center"
        color="#F2F2F2"
      >
        Facundo Lucero
      </Heading>
    </Box>
    <Box  bg='white' color='#04060D' 
     fontSize={{
                    base: "30",  // Tamaño del texto para pantallas menores a 480px
                    sm: "30",    // Tamaño del texto para pantallas entre 480px y 768px
                    md: "30",    // Tamaño del texto para pantallas entre 768px y 992px
                    lg: "50px",   // Tamaño del texto para pantallas entre 992px y 1200px
                    xl: "50px",   // Tamaño del texto para pantallas mayores a 1200px
                }}  fontWeight="600" textAlign="center" 

                height={{
                    base: "5vh",  // Tamaño del texto para pantallas menores a 480px
                    sm: "5vh",    // Tamaño del texto para pantallas entre 480px y 768px
                    md: "10vh",    // Tamaño del texto para pantallas entre 768px y 992px
                    lg: "10vhpx",   // Tamaño del texto para pantallas entre 992px y 1200px
                    xl: "10vh",   // Tamaño del texto para pantallas mayores a 1200px
                }}
                
                mb="15px" >
     <h2>Front End Developer</h2>
    </Box>
    </Box>
  )
}
export {Hero}

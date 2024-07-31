import {Box,Flex,Spacer,Text} from '@chakra-ui/react'

const Acerca = () =>{
    return(
        <Box as='section'   id="Acerca"     bg='#04060D' color="white" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">

            <Box textAlign='center'  >
            <Text bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent"  fontSize="50px"  fontWeight="bold" // Cambia esto según el tamaño deseado
        >  
                    Acerca de mí   
        </Text>
            </Box>
            <Box>
             <Text textAlign='center' fontSize={{
                    base: "md",  // Tamaño del texto para pantallas menores a 480px
                    sm: "lg",    // Tamaño del texto para pantallas entre 480px y 768px
                    md: "xl",    // Tamaño del texto para pantallas entre 768px y 992px
                    lg: "2xl",   // Tamaño del texto para pantallas entre 992px y 1200px
                    xl: "3xl",   // Tamaño del texto para pantallas mayores a 1200px
                }}>  
             Hola! Soy Facundo Lucero, me dedico al Front-End. Utilizo tecnologías como Html,CSS,Js y C.
            </Text>
          
            </Box>
            <Box>
            <Text textAlign='center' fontSize={{
                    base: "md",  // Tamaño del texto para pantallas menores a 480px
                    sm: "lg",    // Tamaño del texto para pantallas entre 480px y 768px
                    md: "xl",    // Tamaño del texto para pantallas entre 768px y 992px
                    lg: "2xl",   // Tamaño del texto para pantallas entre 992px y 1200px
                    xl: "3xl",   // Tamaño del texto para pantallas mayores a 1200px
                }}> 
            Estudio en la Universidad Tecnologica Nacional.
            </Text>
            
            </Box>
            
        </Box>

    )
}

export {Acerca}
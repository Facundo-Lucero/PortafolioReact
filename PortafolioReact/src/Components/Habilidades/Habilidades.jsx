import { Box, Image, Text, Center, Flex } from '@chakra-ui/react'
import icon from './Img/htmlog.svg'
import icon2 from './Img/csslog.svg'
import icon3 from './Img/jslog.svg'
import './Habilidades.css'

const Habilidades = () => {
    return (
        <Box as='section'   id="Habilidades"            bg='#04060D'  p={4}>

                <Box textAlign="center" py={4}>
                <Text
                    bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent" 
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                    fontSize="50px"  fontWeight="bold"
                   

                >
                    Habilidades
                </Text>
            </Box>

            <Box textAlign="center" py={4}>
                <Text
                    fontSize="40px" 
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                    fontWeight="bold" 
                    color="white"
                >
                    Tecnologías
                </Text>
            </Box>

            <Flex
                direction="row" // Alinea los elementos en fila
                wrap="wrap" // Permite que los elementos se envuelvan si no caben en una línea
                justifyContent="center" // Alinea los elementos al centro
                alignItems="center" // Alinea verticalmente los elementos en el centro
                gap={{ base: 4, md: 8, lg: 200 }} // Espacio entre los elementos para pantallas pequeñas, medianas y grandes
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="60px"
                    borderWidth="1px"
                    borderColor="gray.300"
                    p={2} //  padding 
                    bg="white"
                    boxShadow="md"
                    width="150px"
                    height="60px"
                    textAlign="center"
                >
                    <Center>
                        <Image src={icon} alt="Icon" boxSize="30px" mr={2} />
                        <Text fontSize="md" fontWeight='semibold' >
                            HTML
                        </Text>
                    </Center>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="60px"
                    borderWidth="1px"
                    borderColor="gray.300"
                    p={2} //  padding 
                    bg="white"
                    boxShadow="md"
                    width="150px"
                    height="60px"
                    textAlign="center"
                >
                    <Center>
                        <Image src={icon2} alt="Icon" boxSize="30px" mr={2} />
                        <Text fontSize="md" fontWeight='semibold'>
                            CSS
                        </Text>
                    </Center>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="60px"
                    borderWidth="1px"
                    borderColor="gray.300"
                    p={2} //  padding 
                    bg="white"
                    boxShadow="md"
                    width="150px"
                    height="60px"
                    textAlign="center"
                >
                    <Center>
                        <Image src={icon3} alt="Icon" boxSize="30px" mr={2} />
                        <Text fontSize="md"fontWeight='semibold' >
                            JavaScript
                        </Text>
                    </Center>
                </Box>
            </Flex>
        </Box>
    )
}

export { Habilidades }




        

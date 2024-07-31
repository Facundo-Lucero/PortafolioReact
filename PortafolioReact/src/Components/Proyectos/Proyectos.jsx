import { Box, Image, Text, Flex, Center } from '@chakra-ui/react'
import imga from './Img/arrow.svg'
import tec from './Img/csslog.svg'
import tec1 from './Img/htmlogo.svg'
import techImage from './Img/proye.png'

const Proyectos = () => {
    return (
        <Box as='section'  id="Proyectos"       bg='#04060D' pl={{ base: 2, sm: 4 }} pr={{ base: 2, sm: 4 }} py={4}>
            <Box textAlign="center" py={4}>
                <Text
                    fontSize="50px"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                    fontWeight="bold"
                    bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent" 



                >
                    Proyectos
                </Text>
            </Box>

            <Box
                borderRadius="30px"
                borderWidth="15px"
                borderColor="#0460D9"
                p={{ base: 2, sm: 4 }} // P para pantallas pequeñas y grandes
                bg="#0F2859"
                boxShadow="md"
                position="relative"
                maxW={{ base: '95%', sm: '800px' }} // Ancho máx para pantallas 
                mx="auto" // Esto centra la caja horizontalmente
                w={{ base: '90%', sm: 'auto' }} // Ancho de la caja para pantallas 
            >
                <Flex
                    direction={{ base: 'column', lg: 'row' }} // Dirección de los elementos p
                    align="center"
                >
                    <Image
                        src={techImage}
                        alt="Technology"
                        boxSize={{ base: '150px', md: '200px' }} // Tamaño de la imagen para pantallas pequeñas y grandes
                        borderRadius="full"
                        mb={{ base: 4, lg: 0 }} // Margen inferior para pantallas pequeñas
                    />
                    <Box ml={{ base: 0, lg: 4 }} flex="1" bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent" >
                        <Text fontSize="25px" fontWeight="bold" >
                            Portafolio
                        </Text>
                        <Text mt={2} color="white" fontSize="20px" fontWeight="bold">
                            Tecnologías
                        </Text>

                        <Box
                            mt={4}
                            borderRadius="15px"
                            borderWidth="1px"
                            borderColor="gray.300"
                            p={2}
                            maxW="100px"
                            bg='white'
                            mb={2}
                        >
                            <Flex alignItems="center">
                                <Image
                                    src={tec1}
                                    alt="Tech Icon"
                                    boxSize={{ base: '30px', md: '40px' }} // Tamaño de la imagen para pantallas pequeñas y grandes
                                    mr={2}
                                />
                                <Text fontSize={{ base: 'sm', md: 'md' }} color="black"  fontWeight='semibold'>Html</Text>
                            </Flex>
                        </Box>
                        <Box
                            mt={4}
                            borderRadius="15px"
                            borderWidth="1px"
                            borderColor="gray.300"
                            p={2}
                            maxW="100px"
                            bg='white'
                        >
                            <Flex alignItems="center">
                                <Image
                                    src={tec}
                                    alt="Tech Icon"
                                    boxSize={{ base: '30px', md: '40px' }} // Tamaño de la imagen para pantallas pequeñas y grandes
                                    mr={2}
                                />
                                <Text fontSize={{ base: 'sm', md: 'md' }} color="black" fontWeight='semibold'>CSS</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>

                <Center
                    position="absolute"
                    top="4px"
                    right="4px"
                    borderRadius="full"
                    bg="white"
                    boxShadow="md"
                >
                    <a href='https://facundo-lucero.github.io/Portfolio/' target="_blank" rel="noopener noreferrer">
                        <Image
                            src={imga}
                            alt="GitHub"
                            boxSize={{ base: '30px', md: '40px' }} // Tamaño de la imagen para pantallas pequeñas y grandes
                            bg="gray.200"
                            borderRadius="full"
                        />
                    </a>
                </Center>
            </Box>
        </Box>
    )
}

export { Proyectos }

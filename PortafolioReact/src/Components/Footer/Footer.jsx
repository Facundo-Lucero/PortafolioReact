import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react'
import githubIcon from './Img/github.svg'
import linkedinIcon from './Img/linkedin.svg'
const Footer = () => {
    return (
        <Box as='section' bg='#04060D' color="white" py={4}>
            <Flex
                direction={{ base: 'column', md: 'row' }} // Cambia la dirección en pantallas pequeñas
                align='center'
                justify='center'
                wrap='wrap' 
                px={4} //  padding horizontal
            >
                <Box
                    p={2}
                    m={2}
                    display='flex'
                    alignItems='center'
                    flexDirection={{ base: 'column', md: 'row' }} // Cambia la dirección en pantallas pequeñas
                    textAlign='center' // Centra el texto en pantallas pequeñas
                >
                    <Image src={githubIcon} alt='GitHub Icon' boxSize={{ base: '30px', md: '40px' }} mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }} />
                    <Text color='white' fontSize={{ base: 'sm', md: 'md' }}>
                        <a href='https://github.com/Facundo-Lucero' target='_blank' rel='noopener noreferrer'>
                            https://github.com/Facundo-Lucero
                        </a>
                    </Text>
                </Box>
                <Spacer />
                <Box
                    p={2}
                    m={2}
                    display='flex'
                    alignItems='center'
                    flexDirection={{ base: 'column', md: 'row' }} // Cambia la dirección en pantallas pequeñas
                    textAlign='center' // Centra el texto en pantallas pequeñas
                >
                    <Image src={linkedinIcon} alt='LinkedIn Icon' boxSize={{ base: '30px', md: '40px' }} mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }} />
                    <Text color='white' fontSize={{ base: 'sm', md: 'md' }}>
                        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export { Footer }

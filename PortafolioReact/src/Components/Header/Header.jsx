import {Box,Flex,Spacer,IconButton, Menu, MenuButton, MenuList, MenuItem,Portal,Text,Link} from '@chakra-ui/react'

  import { HamburgerIcon } from '@chakra-ui/icons' 
import './Header.css'
const Header = () =>{
    return(



                <Box as='section' px={30} py={6} bg='#04060D' color="white">
                    <Flex justifyContent='space-between' alignItems='center'> 
                        <Box > 
                            {/* box1  */}
                          <Text fontSize="30px">
                            FL
                          </Text>
                        </Box>
                        
                        <Box flexGrow={1} mx={4} fontSize="20px"  id="ocultar">
                            {/* box2 */}
                            <nav>

                                <Flex justifyContent='center' gap={4}>
                               
                                <Link href="#Inicio" _hover={{ color: 'rgb(6, 6, 110)', transition: 'color 0.5s ease' }}>Inicio</Link>
                            <Link href="#Acerca" _hover={{ color: 'rgb(6, 6, 110)', transition: 'color 0.5s ease' }}>Acerca de</Link>
                            <Link href="#Proyectos" _hover={{ color: 'rgb(6, 6, 110)', transition: 'color 0.5s ease' }}>Proyectos</Link>
                            <Link href="#Habilidades" _hover={{ color: 'rgb(6, 6, 110)', transition: 'color 0.5s ease' }}>Habilidades</Link>
                            <Link href="#Contacto" _hover={{ color: 'rgb(6, 6, 110)', transition: 'color 0.5s ease' }}>Contacto</Link>

                                </Flex>
                            </nav>
                        </Box>
                        
                        <Box>
                            {/* box3 */}

                            
                            <Menu>
                            <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            color="white"
                            _hover={{ bg: 'white', color: 'black' }}
                            _active={{ bg: 'white', color: 'black' }}
                            _focus={{ bg: 'white', color: 'black' }}
                        />
  
  <MenuList>
                            <MenuItem as="a" href="#Inicio" color="black">Inicio</MenuItem>
                            <MenuItem as="a" href="#Acerca" color="black">Acerca de</MenuItem>
                            <MenuItem as="a" href="#Proyectos" color="black">Proyectos</MenuItem>
                            <MenuItem as="a" href="#Habilidades" color="black">Habilidades</MenuItem>
                            <MenuItem as="a" href="#Contacto" color="black">Contacto</MenuItem>
                        </MenuList>
 
</Menu>
</Box>
</Flex>
</Box>
        
  
    )
}



export {Header}
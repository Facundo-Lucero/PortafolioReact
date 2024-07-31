import { Box, FormControl, Input, Textarea, Button, SimpleGrid, Center, Text } from '@chakra-ui/react'
import { useState } from 'react'
import './Contacto.css'

const Contacto = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [celu, setCelu] = useState('')
    const [apellido, setApellido] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [errors, setErrors] = useState({})
    const validateEmail = (email) => {
        const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegular.test(email);
    };

    const validateName = (name) => {
        const nameRegular= /^[a-zA-Z]{2,}$/;
        return nameRegular.test(name);
    };

    const validatePhone = (phone) => {
        const phoneRegular = /^[0-9]{10}$/; // Valida que contenga solo 10 dígitos
        return phoneRegular.test(phone);
    };

    const datosEnvio = (e) => {
        e.preventDefault();

        let validacionErrors = {};
        
        if (!validateName(nombre)) {
            validacionErrors.nombre = true;
        }

        if (!validateName(apellido)) {
            validacionErrors.apellido = true;
        }

        if (!validateEmail(email)) {
            validacionErrors.email = true;
        }

        if (!validatePhone(celu)) {
            validacionErrors.celu = true;
        }

        setErrors(validacionErrors);

        if (Object.keys(validacionErrors).length === 0) {
            console.log(nombre)
            console.log(email)
            console.log(celu)
            console.log(apellido)
            console.log(mensaje)
        }
    };

    return (
        <Box as='section' id="Contacto" bg='#04060D' color="white">
            <Box textAlign='center'>
                <Text bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent" 
                fontSize="50px"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                fontWeight="bold"
                
                
                >
                    Contacto
                </Text>
            </Box>
            <Box maxW="800px" mx="auto" p={4}>
                <form onSubmit={datosEnvio}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <FormControl isInvalid={errors.nombre}>
                            <Input
                                id="name"
                                placeholder="Nombre"
                                focusBorderColor={errors.nombre ? "red.500" : "orange.600"}
                                bg="white"
                                color="black"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isInvalid={errors.apellido}>
                            <Input
                                id="surname"
                                placeholder="Apellido"
                                focusBorderColor={errors.apellido ? "red.500" : "orange.600"}
                                bg="white"
                                color="black"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isInvalid={errors.celu}>
                            <Input
                                id="phone"
                                placeholder="Teléfono"
                                focusBorderColor={errors.celu ? "red.500" : "orange.600"}
                                bg="white"
                                color="black"
                                value={celu}
                                onChange={(e) => setCelu(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isInvalid={errors.email}>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                focusBorderColor={errors.email ? "red.500" : "orange.600"}
                                bg="white"
                                color="black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                    </SimpleGrid>
                    <FormControl mt={4}>
                        <Textarea
                            id="message"
                            placeholder="Mensaje"
                            focusBorderColor="orange.600"
                            bg="white"
                            color="black"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                    </FormControl>
                    <Center mt={4}>
                        <Button
                            borderRadius="15px"
                            bg="gray.200"
                            color="black"
                            _hover={{ bg: "gray.600", color: "white" }}
                            _active={{ bg: "gray.700" }}
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </Center>
                </form>
            </Box>


            <Box textAlign='center'>
                <Text  color="white" 
                fontSize="40px"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                fontWeight="bold"
                
                
                >
                    Contáctame
                </Text>
            </Box>








            
        </Box>
    )
}

export { Contacto }







        

    


import { Box, Text,Spacer,Flex} from '@chakra-ui/react'
const Experiencia = () => {
  return (

<Box s='section'  id="Experiencia"   bg='#04060D'>

<Box textAlign="center" py={4}>
      <Text
        fontSize="50px" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        fontWeight="bold" 
         bgGradient="linear(to-r, #8594eb, #e4a321)" bgClip="text" color="transparent"   >

        Experiencia
      </Text>
</Box>

    <Flex>
  <Box p='4' bg='#04060D' >
<Text fontSize="5xl" color="white"
fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">
Exp 
</Text>
   
  </Box>
  <Spacer />
  <Box p='4' bg='#04060D'>
  <Text fontSize="5xl" color="white"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">
---
</Text>
  </Box>
</Flex>
<Box>
    <hr></hr>
</Box>





    
</Box>
   
  )
}

export {Experiencia}
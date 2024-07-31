import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Hero} from './Components/Hero/Hero'
import { Contacto} from './Components/Contacto/Contacto'
import { Footer} from './Components/Footer/Footer'
import { Habilidades } from './Components/Habilidades/Habilidades'
import { Acerca } from './Components/Acerca/Acerca'
import { Proyectos } from './Components/Proyectos/Proyectos'
import { Experiencia } from './Components/Experiencia/Experiencia'

import './index.css'
import './Components/Header/Header.css'
import './Components/Hero/Hero.css'
import './Components/Footer/Footer.css'
import './Components/Habilidades/Habilidades.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider>
   <Header></Header>
   <Hero></Hero>
   <Acerca></Acerca>
   <Experiencia></Experiencia>
   <Habilidades></Habilidades>
   <Proyectos></Proyectos>
   <Contacto></Contacto>

   <Footer></Footer>
   
   </ChakraProvider>
 
  </React.StrictMode>,
)

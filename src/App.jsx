import { Center, Box, IconButton , Flex, Link, Circle, Icon} from '@chakra-ui/react'
import React, {useState} from 'react';
import {colorTemplate} from './style/app_styles'
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import Award from '../src/pages/Award.jsx'
import Contact from '../src/pages/Contact.jsx'
import Education from '../src/pages/Education.jsx'
import Experience from '../src/pages/Experience.jsx'
import Home from '../src/pages/Home.jsx'
import Project from '../src/pages/Project.jsx'
import AboutMe from './pages/AboutMe';
import navigateToSection from './utils/navigateToSection';
import Skills from './pages/Skills';
const App = () => {
  const [page, setPage] = useState('1') 
  const iconOnClick = (num) => {
    navigateToSection(num)
    setPage(num)
  }
  
  return (
  <Box pos={'relative'} style={{'backgroundColor': 'red', 'overflow':'hidden'}}>
    <Center>
      <Box pos={'fixed'} bottom={0} w={'300px'} bg={colorTemplate.navigation_tab} borderRadius={50} height={'7vh'} mb={20} opacity={0.8} overflow={'hidden'} zIndex={2000}>
        <Flex height={'100%'} alignItems={'center'} p={5} justifyContent={'space-evenly'}>
          <Link  onClick={() => iconOnClick('1')}>
            <Circle  size={'30px'}
                    _hover={{bg:'gray.600'}} 
                    transition={'0.2s ease-in-out'} 
                    bg={page == '1' ? 'gray' : ''}>
              <Icon 
                    aria-label='home' 
                    as={FaHome} 
                    size={'lg'} 
                    color={'white'}
                    />
            </Circle>
          </Link>
          
          <Link onClick={() => iconOnClick('2')}>
            <Circle size={'30px'}
                    _hover={{bg:'gray.600'}} 
                    transition={'0.2s ease-in-out'} 
                    bg={page == '2' ? 'gray' : ''}>
              <Icon 
                    aria-label='about-me' 
                    as={SiAboutdotme } 
                    size={'lg'} 
                    color={'purple.200'}
                    />
            </Circle>
          </Link>

          <Link onClick={() => iconOnClick('4')}>
            <Circle  size={'30px'}
                    _hover={{bg:'gray.600'}} 
                    transition={'0.2s ease-in-out'} 
                    bg={page == '4' ? 'gray' : ''}>
              <Icon 
                    aria-label='experience' 
                    as={MdWorkOutline} 
                    size={'lg'} 
                    color={'yellow'}
                    />
            </Circle>
          </Link>

          <Link onClick={() => iconOnClick('5')}>
            <Circle  size={'30px'}
                    _hover={{bg:'gray.600'}} 
                    transition={'0.2s ease-in-out'} 
                    bg={page == '5' ? 'gray' : ''}>
              <Icon 
                    aria-label='projects' 
                    as={GoProjectRoadmap} 
                    size={'lg'} 
                    color={'blue.200'}
                    />
            </Circle>
          </Link>

          <Link onClick={() => iconOnClick('8')}>
            <Circle  size={'30px'}
                    _hover={{bg:'gray.600'}} 
                    transition={'0.2s ease-in-out'} 
                    bg={page == '8' ? 'gray' : ''}>
              <Icon 
                    aria-label='projects' 
                    as={AiOutlineMail} 
                    size={'lg'} 
                    color={'teal.200'}
                    />
            </Circle>
          </Link>
        </Flex>
      </Box>
    </Center>
    <section id='1'>
      <Home/>
    </section>
    <section id='2'>
      <AboutMe/>
    </section>
    <section id='3'>
      <Education/>
    </section>
    <section id='4'>
      <Experience/>
    </section>
    <section id='5'>
      <Project/>
    </section>
    <section id='6'>
      <Award/>
    </section>
    <section id='7'>
      <Skills/>
    </section>
    <section id='8'>
      <Contact/>
    </section>
  </Box>

)}
export default App
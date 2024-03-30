import React from 'react'
import { Center, Box , Flex, Text, Image, IconButton, Tooltip} from '@chakra-ui/react'
import navigateToSection from '../utils/navigateToSection'
import openResume from '../utils/openResume'
import openGithub from '../utils/openGithub'
import openLinkedIn from '../utils/openLinkedIn'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { colorTemplate } from '../style/app_styles'
import '../style/home.css'
const Home = () => {
  return (
  <Box h={{lg: '70vh',xl:'100vh', base:'100vh'}} bg={colorTemplate.primary} pt={18} pos={'relative'}>
                <Flex direction={'column'} alignItems={'center'}>
                    <Text 
                          fontSize={{xl:'5rem', lg:'3rem', base: '2.5rem'}} 
                          color={'gray.900'} 
                          fontWeight={'bold'}>
                            Hello I'm
                    </Text>
                    <div className="card">
                    <Flex direction={'column'} h={'100%'} justifyContent={'space-between'}>
                    <div className="card_info">
                        <div className="card_avatar">
                          <Image src='/profile.jpeg'/>
                        </div>
                        <div className="card_title">Phong Diep</div>
                        <div className="card_subtitle">Software Engineer</div>
                    </div>
                  
                    <ul className="card_social">
                        <li className="card_social__item" >
                            <Tooltip label={'Github'} 
                                      hasArrow 
                                      placement='top' 
                                      bg={'white'} 
                                      borderRadius={20} 
                                      color={'black'} 
                                      fontWeight={'bold'}
                                      openDelay={200}>
                                  <IconButton 
                                              aria-label='Github' 
                                              icon={<FaGithub/>} colorScheme='black' 
                                              isRound fontSize={'2rem'} 
                                              onClick={openGithub}
                                              _hover={{'transform': 'scale(1.1) '}}
                                              transition={'0.2s ease-in-out'}/>
                            </Tooltip>
                        </li>
                        <li className="card_social__item">
                            <Tooltip 
                                    label={'Resume'} 
                                    hasArrow 
                                    placement='top'
                                    bg={'white'} 
                                    borderRadius={20} 
                                    color={'black'} 
                                    fontWeight={'bold'}
                                    openDelay={200}>
                                      <IconButton 
                                      icon={<IoIosDocument />} aria-label='Resume' colorScheme='black' 
                                      isRound 
                                      fontSize={'2rem'} 
                                      onClick={openResume} 
                                      _hover={{'transform': 'scale(1.1) '}}
                                      transition={'0.2s ease-in-out'}/>
                            </Tooltip>
                        </li>
                        <li className="card_social__item">
                           <Tooltip 
                                    label={'LinkedIn'} 
                                    hasArrow 
                                    placement='top'
                                    bg={'white'} 
                                    borderRadius={20} 
                                    color={'black'} 
                                    fontWeight={'bold'} 
                                    openDelay={200}>
                            <IconButton 
                                        aria-label='LinkedIn' 
                                        icon={<FaLinkedin />} colorScheme='black' 
                                        isRound 
                                        fontSize={'2rem'} 
                                        onClick={openLinkedIn}
                                        _hover={{'transform': 'scale(1.1) '}}
                                        transition={'0.2s ease-in-out'}/>
                            </Tooltip>
                        </li>
                  </ul>
                  </Flex>
                </div>
              </Flex>
              <button 
                      className="scrollDownBtn" 
                      onClick={() => navigateToSection('8')}>
                  Scroll to bottom
              </button> 
  </Box>
  )
}

export default Home
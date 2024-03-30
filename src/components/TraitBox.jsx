import React from 'react'
import { Center, Box, Text} from '@chakra-ui/react'

const TraitBox = ({IconComponent, text}) => {
  return (
    <Box h={160} w={250} bg={'#6CA6C1'} border={'2px solid black'} borderRadius={20} _hover={{'bg':'#327898', 'transform': 'scale(0.95)'}} transition={'0.2s ease-in-out'} opacity={'0.8'} boxShadow='md'>
      <Center h={'100%'} flexDirection={'column'}>
        {IconComponent && <IconComponent size={25} color={'black'}/>}
        <Text fontSize='md' color={'black'} fontWeight={'bold'} mt={3} >{text}</Text>
      </Center>
    </Box>
  )
}

export default TraitBox

import React from 'react'
import { Center, Text, Image, Flex } from '@chakra-ui/react'
import '../style/awardCard.css'
const AwardCard = ({srcImg, awardTitle, awardDescription}) => {
  return (
    <Center w={'100vw'}>
          <div 
              className="award_card">
            <Flex 
                  w={'100%'} 
                  justifyContent={'space-between'} 
                  alignItems={'center'}>
              <div 
                  className="award_card_icon">
                  <Image src={srcImg} objectFit={'contain'} height={'100%'} w={'100%'} alt='award icon'/>
              </div>
              <Text 
                    color={'gray.900'} 
                    fontWeight={'bold'}
                    fontSize={{lg:'1.35rem', xl:'0.9rem'}}>
                                        {awardTitle}
              </Text>
            </Flex>
            <span 
                  className="award_card_body">
                      {awardDescription}
            </span>
          </div>
    </Center>
  )
}

export default AwardCard
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Pomodoro from '../../Pomodoro'
import GoogleSearch from '../../GoogleSearch'
import Inspirational from '../../Inspirational'

export default function Dashboard() {
  return (
    <div className='dashboard'>

{/* <Grid
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={1} bg='tomato'> <Pomodoro/></GridItem>
  <GridItem colSpan={2} bg='papayawhip'> <GoogleSearch/> </GridItem>
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem rowSpan={4} bg='papayawhip' />
  <GridItem colSpan={4}  bg='tomato' />
</Grid> */}


      <Grid
  templateAreas={`"clock quote"
                  "side search"
                  "side main"
                  "side main"`}
  gridTemplateRows={'.25fr .25fr .5fr 1.5fr'}
  gridTemplateColumns={'.6fr 1.5fr'}
  h='93vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'search'}>
    <GoogleSearch/>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'quote'}>
    <Inspirational/>
    </GridItem>
  <GridItem pl='2' bg='pink.300' area={'side'}>
    side
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>

  <GridItem style={{justifyContent:"center",wordBreak:"break-all"}} pl='2' bg='blue.300' area={'clock'}>
  <Pomodoro/>
  </GridItem>

  </Grid>
    </div>
  )
}

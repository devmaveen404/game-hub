// 21, implementing search box
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'


const SearchInput = () => {

  // To get values in the search input use ref 
  const ref = useRef<HTMLInputElement>(null) //only dependent on the searchtext
  //const {setSearchText} = useGameQueryStore()
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const navigate = useNavigate()

  return (
    <Box justifyContent={'center'} maxWidth={'xl'} flex={2} display={'flex'}>
      <form onSubmit={(event) => {
        event.preventDefault();
        // if (ref.current) return setSearchText(ref.current.value)
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate('/')
        }
      }}
      >
        <InputGroup >
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={5} placeholder='Search Games...' variant={"filled"} />
        </InputGroup>
      </form>
    </Box>
  )
}

export default SearchInput
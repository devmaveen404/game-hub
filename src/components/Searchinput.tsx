// 21, implementing search box
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
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
    <form  onSubmit={(event) =>{
        event.preventDefault();
        // if (ref.current) return setSearchText(ref.current.value)
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate('/')
        } 
    }}>
        <InputGroup>
        < InputLeftElement children={<BsSearch />} />
         <Input ref={ref} borderRadius={20} placeholder='Search Games...' variant={"filled"}/>
        </InputGroup>
    </form>
  )
}

export default SearchInput
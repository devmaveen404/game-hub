// 21, implementing search box
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

// Passing functionality to the app component
interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: Props) => {

    // To get values in the search input use ref 
    const ref = useRef<HTMLInputElement>(null)

  return (
    <form  onSubmit={(event) =>{
        event.preventDefault();
        if (ref.current) return onSearch(ref.current.value)
    }}>
        <InputGroup>
        < InputLeftElement children={<BsSearch />} />
         <Input ref={ref} borderRadius={20} placeholder='Search Games...' variant={"filled"}/>
        </InputGroup>
    </form>
  )
}

export default SearchInput
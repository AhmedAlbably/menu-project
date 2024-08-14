import { Container } from 'react-bootstrap'
import NavScrollExample from './components/Navbar'
import './App.css'
import Title from './components/Title'
import Category from './components/Category'
import ListItem from './components/ListItem'
import items from './components/Data'
import { useState } from 'react'

function App() {
  const [item, setItem] = useState(items)

  // Filter data by category
  const filterByCategory = (category) => {
    if (category === 'الكل') {
      setItem(items)
    } else {
      setItem(items.filter((item) => item.category === category))
    }
  }

  // all category 
  const allCategory = ['الكل',...new Set(items.map((item) => item.category))]
  
  // filter by search 
  const filterBySearch = (word) => {
    if (word === '') {
      setItem(items)
    } else {
      setItem(items.filter((item) => item.name.toLowerCase().includes(word.toLowerCase())))
    }
  }

  return (
    <>
      <NavScrollExample filterBySearch={filterBySearch}/>
      <Container>
        <Title />
        {/* Pass the filterByCategory function to Category */}
        <Category filterByCategory={filterByCategory} allCategory={allCategory} />
        <ListItem item={item} />
      </Container>
    </>
  )
}

export default App

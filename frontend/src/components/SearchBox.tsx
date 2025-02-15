import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { History } from 'history'

const SearchBox = ({ history }: { history: History }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push(`/`)
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  )
}

export default SearchBox

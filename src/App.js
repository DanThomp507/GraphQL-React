import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'

import PostTable from './components/PostTable'
import PostForm from './components/PostForm'

class App extends Component {
  state = {
    editing: null,
  }

  render() {
    const { editing } = this.state
    return (
      <Container fluid>
      <Button
        className="my-2"
        color="primary"
        onClick={() => this.setState({ editing: {} })}
      >
        New Post
      </Button>

      <PostTable
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
      <PostForm
          post={editing}
          onClose={() => this.setState({ editing: null })}
        />
        )}
       </Container>
    )
  }
}

export default App

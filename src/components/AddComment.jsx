import { Box, Button, Flex, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const AddComment = ({user},postId) => {
    const [comment,setComment]=useState('')
    const toast = useToast()
    const handleComment=()=>{
        if(comment){
            const arr=JSON.parse(localStorage.getItem('blogComments'))||[]
            let obj={
                name:user[0].name,
                email:user[0].email,
                pic:'https://bit.ly/dan-abramov',
                comment:comment,
                postId
            }
            arr.push(obj)
            localStorage.setItem('blogComments',JSON.stringify(arr))
            toast({
                position:'top',
                title: 'Comment added',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
    }
  return (
    <Box w={`100%`} p={`1rem`}>
      <Flex w={`60%`} justifyContent={`center`} alignItems={`center`}>
        <Input
          placeholder="Add Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handleComment}>Search</Button>
      </Flex>
    </Box>
  )
}

export default AddComment
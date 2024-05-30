import React from 'react'
import { Tag, List, Button } from 'antd'
import Axios from '@/utils/axios'

export default function Nest() {
  const getAllAnimals = () => {
    Axios.get('/animal').then((res) => {
      console.log(res)
    })
  }

  return (
    <List bordered>
      <List.Item>
        <Tag color="success">Get</Tag>
        <Button onClick={getAllAnimals}>获取所有 animals </Button>
      </List.Item>
    </List>
  )
}

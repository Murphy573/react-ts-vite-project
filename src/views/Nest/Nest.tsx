import React from 'react'
import { Tag, List, Button } from 'antd'
import Axios from '@/utils/axios'

export default function Nest() {
  const getAllAnimals = () => {
    Axios.get('/animal').then((res) => {
      console.log(res)
    })
  }

  const getLegs = () => {
    Axios.get('/animal/legs?type=cat&type=dog').then((res) => {
      console.log(res)
    })
  }

  const createPerson = () => {
    Axios.post('/person/create', {
      name: 'zhan11',
      age: 18,
      sex: 'male',
      // 多传入的属性,会被拒绝
      // aaa: '111',
    }).then((res) => {
      console.log(res)
    })
  }

  const createStudent = () => {
    Axios.post('/student/create', {
      name: 'zhan11',
      age: 18,
      sex: 'male',
      class: 1,
      // 多传入的属性,会被拒绝
      // aaa: '111',
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <List bordered>
      <List.Item>
        <Tag color="success">Get</Tag>
        <Button onClick={getAllAnimals}>无参数 获取 animals </Button>
        <Button onClick={getLegs}> query 参数 获取 animals </Button>
      </List.Item>
      <List.Item>
        <Tag color="error">POST</Tag>
        <Button onClick={createPerson}>create person </Button>
        <Button onClick={createStudent}>
          create student（使用了 动态 Module:GlobalModel）{' '}
        </Button>
      </List.Item>
    </List>
  )
}

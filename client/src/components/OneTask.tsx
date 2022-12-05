import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import {ITask} from '../types/task'
interface TaskProps {
    el: ITask
}
export default function OneTask({ el }:TaskProps) {
  return (
    <div>
        <div>{el.title}</div>
        <div>{el.text}</div>
        <div>___</div>
        {/* <div>{el.date.toDateString()}</div>
        <div>{el.price.toString()}</div> */}
    </div>
  )
}

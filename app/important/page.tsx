"use client"

import React from 'react'
import { useGlobalState } from '../context/globalProvider'
import Tasks from '../Components/Tasks/Tasks';

function page() {
  const { importantTasks } = useGlobalState();

    return <Tasks title="Important tasks" tasks={importantTasks}/>
}

export default page
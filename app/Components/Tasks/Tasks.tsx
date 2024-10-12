"use client";
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react';
import styled from 'styled-components';
import CreateContent from '../Modals/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { plus } from '@/app/utils/Icons';

interface Props {
  title: string;
  tasks: any[]; // You may want to improve this type later based on task structure
}

function Tasks({ title, tasks }: Props) {
  const { theme } = useGlobalState();

  // Safeguard to check if tasks is an array
  const isTasksArray = Array.isArray(tasks);

  return (
    <TaskStyled theme={theme}>
      {/* <CreateContent /> */}
      <h1>{title}</h1>

      <div className="tasks grid">
        {isTasksArray ? (
          tasks.map((task) => (
            <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
          ))
        ) : (
          <p>No tasks available or invalid data format.</p>
        )}
        <button className="create-task">{plus}Add new task</button>
      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  > h1 {
      font-size: clamp(1.5rem, 2vw, 2rem);
      font-weight: 800;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 3rem;
        height: 0.2rem;
        background-color: ${(props) => props.theme.colorPrimaryGreen};
        border-radius: 0.5rem;
      }
    }
  .tasks {
    margin: 2rem 0;
  }
    
    .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }

`;

export default Tasks;

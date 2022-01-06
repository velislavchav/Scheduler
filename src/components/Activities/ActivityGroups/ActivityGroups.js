import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard'
import { Divider } from 'antd';
import './ActivityGroups.scss'

export default function ActivityGroups() {
    return (
        <article className='activity-group-container'>
            <Divider orientation="left" plain>
                Group name
            </Divider>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
        </article>
    )
}

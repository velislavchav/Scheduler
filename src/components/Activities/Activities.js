import React from 'react'
import ActivityGroups from './ActivityGroups/ActivityGroups'
import Sidemenu from './Sidemenu/Sidemenu'
import "./Activities.scss"

export default function Activities() {
    return (
        <div className='activities-container'>
            <Sidemenu />
            <section className='activities-groups-container'>
                <ActivityGroups />
                <ActivityGroups />
            </section>
        </div>
    )
}

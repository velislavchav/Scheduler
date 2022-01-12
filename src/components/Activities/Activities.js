import React, { useState } from 'react'
import ActivityGroups from './ActivityGroups/ActivityGroups'
import Sidemenu from './Sidemenu/Sidemenu'
import "./Activities.scss"

export default function Activities() {
    // const [activities, setActivities] = useState([]);
    const [categories, setCategories] = useState([]);

    return (
        <div className='activities-container'>
            <Sidemenu categories={categories} />
            <section className='activities-groups-container'>
                <ActivityGroups />
                <ActivityGroups />
            </section>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import ActivityGroups from './ActivityGroups/ActivityGroups'
import Sidemenu from './Sidemenu/Sidemenu'
import "./Activities.scss"
import { getActivityCategories } from "../../api/activities"

export default function Activities() {
    const [activities, setActivities] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getActivityCategories().then(data => {
            setCategories(data.categories)
        })
    }, [])

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

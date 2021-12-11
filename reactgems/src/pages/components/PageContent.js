import React from 'react'
import Header from './Header';
import Schedules from './Schedules';

function PageContent({title,page}) {
    return (
        <>
            <Header title={title} />
            {page}
        </>
    )
}

export default PageContent

import React from 'react'
import Header from './Header';

function PageContent({title,page}) {
    return (
        <>
            <Header title={title} />
            {page}
        </>
    )
}

export default PageContent

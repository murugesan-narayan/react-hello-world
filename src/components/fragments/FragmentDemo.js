import React from 'react'

/**
 * Fragments let you group elements without adding additional tags
 * 
 */
function FragmentDemo() {
    
    /** 
     * Grouping with React.Fragement
    */
    
    // return (
    //     <React.Fragment>
    //         <h1>Fragment Demo</h1>
    //         <p>This describes the fragment demo component</p>
    //     </React.Fragment>
    // )

    
    /** 
     * Grouping with empty tag <> </>
    */
    
    // return (
    //     <>
    //         <h1>Fragment Demo</h1>
    //         <p>This describes the fragment demo component</p>
    //     </>
    // )


    /** 
     * Grouping with React.Fragement and its key
    */
    const names = ['Nehru', 'Kamarajar']
    return (
        names.map( (name) =>
            <React.Fragment key={name}>
                <h1>{name}</h1>
            </React.Fragment>
        )
    )
}

export default FragmentDemo
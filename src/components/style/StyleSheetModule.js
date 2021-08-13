import React from 'react'
import './myStyle.css'
import styles from './myStyle.module.css'

function StyleSheetModule() {
    return (
        <div>
            <h1 className='primary font-big'>Style Sheets</h1>
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
        </div>
    )
}

export default StyleSheetModule

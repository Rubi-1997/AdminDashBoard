import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'

const RightSide = () => {
    return (
        <div className="RightSide">
            <div className='up'>
                <h3>Updates</h3>
                <Updates />
                
            </div>

            <div className='head'>
                <h3>
                    Customers Review
                </h3>
                <CustomerReview/>
            </div>
        </div>
    )
}

export default RightSide
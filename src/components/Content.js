import React from 'react';
import "./Content.css"
const Content = (data) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return (<div className='main_header_container'>
        {data.map((ct, idx) =>
            <div className='content_container' key={idx}>
                <p className='content_para'>{ct.title}</p>
                <div className='date_and_time'><span className='date'>{ct.date.getDate()} {months[ct.date.getMonth()]} {ct.date.getFullYear()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#353535" />
                    </svg>
                    <span className='time'>{ct.date.getUTCHours()}:{ct.date.getMinutes()} {ct.date.getHours() >= 12 ? 'PM' : 'AM'}</span>
                </div>
            </div>
        )}
    </div>);
}

export default Content;
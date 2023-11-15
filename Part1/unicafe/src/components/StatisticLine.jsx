import React from 'react'

function StatisticLine({ text, value, text2 }) {

    return (
        <>
            <tbody>
                <tr>
                    <td>{text}</td>
                    <td>{value}{text2}</td>
                </tr>
            </tbody>
        </>
    )
}

export default StatisticLine
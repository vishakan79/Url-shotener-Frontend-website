import React from 'react'

const ShortUrlTable = ({ analyticsRes }) => {
    return (
        <div className="table-container">
            {
                analyticsRes.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Short URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                analyticsRes.map((res, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{res.shortUrl}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    :
                    <h2 className='orange'>No short urls created!</h2>
            }
        </div>
    )
}

export default ShortUrlTable
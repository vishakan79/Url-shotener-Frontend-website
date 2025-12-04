import React from 'react';

const Analytics = ({ analyticsRes }) => {
  return (
    <div className="table-container">
      {analyticsRes.length > 0 ?
        <>
          <h2>No of times link clicked</h2>
          <table>
            <thead>
              <tr>
                <th>Clicks</th>
                <th>Short URL</th>
              </tr>
            </thead>
            <tbody>
              {analyticsRes.map((res,index) => (
                <tr key={index+1}> {/* Use a unique key */}
                  <td>{res.clicksCount}</td>
                  <td>{res.shortUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
        :
        <h2 className='orange'>No short URLs created!</h2>
      }
    </div>
  );
};

export default Analytics;

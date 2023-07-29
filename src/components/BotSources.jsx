import React from 'react'

const BotSources = ({ data }) => {
  return (
    <div className="border-t-2">
          <h2>Sources:</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {data ? (
                <div>
                  <h2>Sources:</h2>
                  <a href="">{data.result.sources}</a>
                </div>
              ) : (
                <p>No data available.</p>
              )}
            </>
          )}
        </div>
  )
}

export default BotSources
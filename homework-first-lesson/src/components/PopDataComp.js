import React from 'react'
import populationData from '../data.json'

function DataItem ({Year, Population}) {
    return (
        <div>
            <h2>Year: {Year}</h2>
            <h2>Population: {Population}</h2>
        </div>
    )
}
function PopulationDataComponent() {
    return (
        <div>
            {populationData.data.map(item => (
            <DataItem key={item['ID Year']} Year={item.Year} Population={item.Population} />
          ))}
        </div>
    )
}
export default PopulationDataComponent
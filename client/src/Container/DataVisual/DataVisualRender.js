import React from 'react'
import { detectingoutliners } from "../../utills/codes";
import DataVisual from './DataVisual';


function DataVisualRender() {
  return (
    <div>
      <DataVisual
      code = {detectingoutliners}
      graphyvalues = {[54, 66, 69, 75, 88]}
      backgroundcolor = "black"     
      />
      
        
      </div>
  )
}
export default DataVisualRender

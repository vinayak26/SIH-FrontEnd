import React from 'react'
import { detectingoutliners,handelingoutliners,numberofoutliners} from "../../utills/codes";
import DataVisual from './DataVisual';


function DataVisualRender() {
  return (
    <div>
      <DataVisual
      defaultstyle={true}
      title="Detecting Outliners(Using BoxPlot)"
      code = {detectingoutliners}
      resulttext = "Range = (76.5, 424.5)"
      graphyvalues = {[54, 66, 69, 75, 88]}
      backgroundcolor = "black"     
      />
      <DataVisual
      title="Handeling Outliners"
      defaultstyle={false}
      code = {handelingoutliners}
      resulttext = {numberofoutliners}
      graphyvalues = {[54, 66, 69, 75, 88]}
      backgroundcolor = "#030f18"     
      />
      
        
      </div>
  )
}
export default DataVisualRender

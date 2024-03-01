import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { TooltipProps } from "recharts/types/component/Tooltip"

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType , NameType>) => {
    if (active && payload != null && payload.length) {
        return (
          <>
            <div className="custom-tooltip_content">
              <span className="custom-tooltip-label">
                {label}
              </span>
              <ul>
                {payload.map((line: any , index:number) =>
                  <li key={index} className="custom-tooltip-item">
                    <span className="icon" style={{ backgroundColor: line.stroke }} ></span>
                    <span>
                      {line.name}:
                    </span>
                    <span>
                      ${line.payload[line.name.toLowerCase()]}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </>
        )
      }
    
}

export default CustomTooltip
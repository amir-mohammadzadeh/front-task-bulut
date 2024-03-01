import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Chart.css'
import CustomTooltip from './CustomTooltip'

interface Prop {
  title: string,
  data: { id: number, [key: string]: string | number }[]
}


const Chart = ({ title, data }: Prop) => {

  const setYAxisDataMax = (dataMax: number) => {
    // بزرگترین مقدار موجود در دیتا را گرفته
    // و آن را به اولین مضرب 10 بعداز خود تبدیل میکند
    // تا اخرین حد محور عمودی بدست بیاد
    return Math.round(dataMax - (dataMax % 50) + 50)
  }

  return (
    <div className="Chart_container">
      <h3 className='chart-title'>
        {title}
      </h3>
      <ResponsiveContainer width='100%' height='100%' aspect={3} >
        <LineChart data={data} >
          <Line
            name='Deposit'
            type="monotone"
            dataKey="deposit"
            stroke="#6941C6"
            strokeWidth={3}
            dot={{ fill: '#6941C6', r: 4, }}
          />
          <Line
            name='Withdrawal'
            type="monotone"
            dataKey="withdrawal"
            stroke="#101828"
            strokeWidth={3}
            dot={{ fill: '#101828', r: 4, }}
          />
          <CartesianGrid stroke="#98A2B3" strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="day" fontSize={12} tickMargin={10} fontWeight={700} color='#101828' />
          <YAxis
            type='number'
            domain={[0, (dataMax: number) => setYAxisDataMax(dataMax)]}
            tickCount={6}
            allowDataOverflow={true}
            fontSize={14}
            tickMargin={10}
            fontWeight={600}
            strokeWidth={.25}
            color='#101828'
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend align='left' iconType='circle' wrapperStyle={{ paddingTop: '10px', marginLeft: '.5rem' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
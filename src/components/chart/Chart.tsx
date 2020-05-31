import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Title } from 'components';

// Generate Sales Data
function createData(days, amount) {
  return { days, amount };
}

const data = [
  createData('23.05', 0),
  createData('24.05', 3000),
  createData('25.05', 600),
  createData('26.05', 8000),
  createData('27.05', 1500),
  createData('28.05', 20000),
  createData('29.05', 24000),
  createData('30.05', 24002),
  createData('31.05', 542),
];

function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Taux des personnes contaminées</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="days" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Personnes ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
export { Chart }

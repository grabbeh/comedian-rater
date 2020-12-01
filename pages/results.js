import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import Header from '../components/header'
import { ThemeProvider } from '@nivo/core'
import Container from '../components/container'

const data = [
  {
    id: 'Jimmy Tarbuck',
    data: [
      {
        x: 8,
        y: 7
      }
    ]
  },
  {
    id: 'Les Dennis',
    data: [
      {
        x: 9,
        y: 1
      }
    ]
  },
  {
    id: 'Benny Hill',
    data: [
      {
        x: 4,
        y: 5
      }
    ]
  }
]
const Results = props => {
  console.log(props)
  return (
    <Container>
      <Header>Results</Header>
      <div style={{ height: '500px' }}>
        <ThemeProvider theme={theme}>
          <ResponsiveScatterPlot
            data={data}
            colors='#357edd'
            margin={{ top: 20, right: 10, bottom: 30, left: 30 }}
            blendMode='multiply'
            yScale={{
              type: 'linear'
            }}
            xScale={{
              type: 'linear'
            }}
            axisBottom={{
              tickValues: 5,
              format: c => `${c}`,
              legend: 'Likeability'
            }}
            axisLeft={{
              format: c => `${c}`,
              legend: 'Funniness'
            }}
            yFormat={c => `Funniness ${c}`}
            xFormat={c => `Likeability ${c}`}
          />
        </ThemeProvider>
      </div>
    </Container>
  )
}
/*
export async function getServerSideProps () {
  const data = await fetcher('/get-results')
  return { props: { data } }
}*/

export default Results

const theme = {
  background: 'transparent',
  fontFamily: 'Segoe UI',
  fontSize: 20,
  textColor: '#333333',
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 1
      },
      text: {}
    },
    legend: {
      text: {
        fontSize: 20
      }
    }
  },
  grid: {
    line: {
      stroke: '#dddddd',
      strokeWidth: 1
    }
  },
  legends: {
    text: {
      fill: '#333333'
    }
  },
  labels: {
    text: {}
  },
  markers: {
    lineColor: '#000000',
    lineStrokeWidth: 1,
    text: {}
  },
  dots: {
    text: {}
  },
  tooltip: {
    container: {
      background: 'white',
      color: 'inherit',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px'
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center'
    },
    table: {},
    tableCell: {
      padding: '3px 5px'
    }
  },
  crosshair: {
    line: {
      stroke: '#000000',
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: '6 6'
    }
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: '#ffffff'
    },
    link: {
      stroke: '#000000',
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: '#ffffff'
    },
    outline: {
      fill: 'none',
      stroke: '#000000',
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: '#ffffff'
    },
    symbol: {
      fill: '#000000',
      outlineWidth: 2,
      outlineColor: '#ffffff'
    }
  }
}

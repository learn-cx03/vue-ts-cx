import * as echarts from 'echarts'

// import chinaMapData from '../data/china.json'

// echarts.registerAction('china', chinaMapData)
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updataSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updataSize
  }
}

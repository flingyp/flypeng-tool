/**
 * 下载在线链接资源文件
 * @param url
 * @param fileName
 */

// TODO: 同源的在线地址会直接下载，非同源地址会跳转到对应文件（处理这个问题）
export default function useDownloadFile(url: string, fileName: string) {
  const downloadALabel = document.createElement('a')
  downloadALabel.setAttribute('href', url)
  downloadALabel.setAttribute('download', fileName)
  downloadALabel.style.position = 'fixed'
  downloadALabel.style.top = '300px'
  downloadALabel.style.color = 'red'
  downloadALabel.style.fontSize = '30px'
  downloadALabel.style.zIndex = '999'
  downloadALabel.style.width = '30px'
  downloadALabel.style.height = '30px'
  document.body.appendChild(downloadALabel)
  downloadALabel.click()
  document.body.removeChild(downloadALabel)
}

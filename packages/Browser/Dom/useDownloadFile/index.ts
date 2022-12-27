/**
 * 下载在线链接资源文件
 * @param url
 * @param fileName
 */

export default async function useDownloadFile(url: string, fileName?: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  // set response type
  xhr.responseType = 'blob'
  // send request
  xhr.send()
  xhr.onload = data => {
    // 同源的在线地址会直接下载，非同源地址会跳转到对应文件
    // 通过Blob对象来处理这个问题
    const fileBlob = xhr.response
    const fileUrl = URL.createObjectURL(fileBlob)
    const downloadALabel = document.createElement('a')
    downloadALabel.setAttribute('href', fileUrl)
    downloadALabel.setAttribute('download', fileName || '')
    downloadALabel.click()
    downloadALabel.remove()
  }
}

import { Message } from 'element-ui'
import { MessageBox  } from 'element-ui'
export default class Tips {
  static error = (message) => {
    Message({
      showClose: true,
      message: message,
      type: 'error'
    })
  }

  static warning = (message) => {
    MessageBox.alert(message,'提示', {
      confirmButtonText: '确定'
    })
  }
}

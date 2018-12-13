import dayjs from 'dayjs'

export default (time, fmt = "YYYY-MM-DD HH:mm:ss") => {
  let timeNum = time - 0;
  let dateStr = dayjs(timeNum).format(fmt);
  return dateStr;
}
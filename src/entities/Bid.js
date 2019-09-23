import { bidStatuses } from '../constants/constants'

class Bid {
  constructor({ id, number, statusId, date, comment }) {
    this.id = id
    this.number = number
    this.statusId = statusId
    this.statusName = bidStatuses.find(status => status.id === statusId).name
    this.date = date
    this.comment = comment
  }
}
export default Bid

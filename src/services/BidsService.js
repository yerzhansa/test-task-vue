import ls from '@/utils/localStorageManager'
import Bid from '../entities/Bid'

const BIDS_KEY = 'APP_BIDS'
const INITIAL_VALUE = []

const getBids = () => {
  return ls.get(BIDS_KEY).map(bid => new Bid(bid))
}

const setBids = value => {
  ls.set(BIDS_KEY, value)
}

const getOneBid = id => {
  return new Bid(ls.get(BIDS_KEY).find(bid => bid.id === id))
}

const changeBid = (id, payload) => {
  const bids = getBids()
  let index
  bids.find((item, idx) => {
    if (item.id === id) index = idx
  })
  Object.assign(bids[index], payload)
  setBids(bids)
}

const createBid = bid => {
  const bids = getBids()
  bids.push(bid)
  setBids(bids)
}

const deleteBid = id => {
  const bids = getBids()
  let index
  bids.find((item, idx) => {
    if (item.id === id) index = idx
  })
  bids.splice(index, 1)
  setBids(bids)
}

const initConfig = () => {
  if (!getBids()) {
    setBids(INITIAL_VALUE)
  }
}

initConfig()

export { createBid, getBids, deleteBid, getOneBid, changeBid }

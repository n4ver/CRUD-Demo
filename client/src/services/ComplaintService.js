import Api from '@/services/Api'

export default {
  getAllComplaints () {
    return Api().get('/complaints')
  },
  getComplaint (id) {
    return Api().get(`/complaints/${id}`)
  }
}
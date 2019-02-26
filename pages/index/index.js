//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    input:'',
    list:[]
  },
  getInput(e){
    this.setData({
      input:e.detail.value
    })
  },
  add(){
    let list = this.data.list
    list.push({
      name:this.data.input
    })
    console.log(list)
    this.setData({
      list:list,
      input: ''
    })
  },
  remove(e){
    //console.log(e.target.dataset.index)
    let i = e.target.dataset.index
    let lists = this.data.list
    lists.splice(i, 1)
    this.setData({
      list:lists
    })
  }
})

// pages/addmy/addmy.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark: '', // 备注
    latitude: null,
    longitude: null,
    name: '', // 机构名称
    address: '', // 具体位置

    curAddress: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取所在位置
    wx.getLocation({
      type: 'gps',
      success: (res) => {
        this.setData({
          curAddress: res
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  openMap: function() {
    var $this = this
    wx.chooseLocation({
      success: function(res) {
        if (res.errMsg = 'chooseLocation:ok') {
          $this.setData({
            address: res.address,
            name: res.name,
            latitude: res.latitude,
            longitude: res.longitude
          })
        }
      },
    })
  },
  save: function() {
    app.addMyAddress({
      address: this.data.address,
      name: this.data.name,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      remark: this.data.remark
    })
    wx.showToast({
      title: '保存成功'
    })
    setTimeout(function() {
      wx.hideToast()
      wx.navigateBack({})
    }, 2000)
  },
  cancel: function() {
    wx.navigateBack({})
  }
})
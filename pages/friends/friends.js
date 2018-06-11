const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var length = this.data.list.length
    this.setData({
      ['list[' + length + ']']: {
        name: '敏儿',
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/gVBiad8BElEqdnbmYUhXGHsS8v9zNCkQias0SMbKqxZ0YXNR0tXxribczUiaPOpmLqIHVLdRNuIHq9eT7QanRYWNeQ/0",
        phone: '13926959445',
        gender: '女',
        address: '广东省广州市天河区'
      }
    })
    var length = this.data.list.length
    this.setData({
      ['list[' + length + ']']: {
        name: '敏儿',
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/gVBiad8BElEqdnbmYUhXGHsS8v9zNCkQias0SMbKqxZ0YXNR0tXxribczUiaPOpmLqIHVLdRNuIHq9eT7QanRYWNeQ/0",
        phone: '13926959445',
        gender: '女',
        address: '广东省广州市天河区'
      }
    })
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
  onclick: function() {
    wx.navigateTo({
      url: '/pages/addmy/addmy'
    })
  }
})
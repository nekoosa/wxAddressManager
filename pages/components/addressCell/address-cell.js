// pages/components/addressCell/address-cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object
    }
  },
  attached: function() {
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    copyToClip: function(event) {
      // console.log(event)
      var string = String(event.currentTarget.dataset.content)
      console.log('copyToClip')
      wx.setClipboardData({
        data: string,
        success: function() {
          wx.showToast({
            title: '已复制到剪贴板',
          })
          setTimeout(function() {
            wx.hideToast()
          }, 800)
        }
      })
    }
  }
})

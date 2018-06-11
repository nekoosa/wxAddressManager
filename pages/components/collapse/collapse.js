// pages/components/collapse/collapse.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpen: false, // 是否展开
    animation: null // 动画
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleCollapse: function() {
      this.setData({
        isOpen: !this.data.isOpen
      })
    }
  }
})

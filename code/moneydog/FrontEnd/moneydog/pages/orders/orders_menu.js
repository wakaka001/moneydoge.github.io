// pages/orders/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goToExpressage_ordersPage: function () {
    wx.navigateTo({
      url: './orders_list/orders_list?id=1',
    })
  },
  goToErrand_ordersPage: function () {
    wx.navigateTo({
      url: './orders_list/orders_list?id=2',
    })
  },
  goToSeekhelp_ordersPage: function () {
    wx.navigateTo({
      url: './orders_list/orders_list?id=3',
    })
  },
  goToSecondhand_ordersPage: function () {
    wx.navigateTo({
      url: './orders_list/orders_list?id=4',
    })
  },
  goToQuetionnaire_ordersPage: function () {
    wx.navigateTo({
      url: './orders_list/orders_list?id=5',
    })
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

  }
})
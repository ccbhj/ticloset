// pages/closet/closet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 界面控制常量
    columnWidth: 200,
    columnPadding: 20,
    paddingWidth: 25,
    avatarUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
    windowHeight: 0,

    // 界面控制变量
    activeKey: 0,
    showSideBar: false,
    showSearchBar: false,
    
    // 输入输出数据
    searchValue: '',
    dataList: [
      {
        name: 'cat',
        imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg'
      }
    ]
  },

  onClickNav: function() {
    this.setData({ showSideBar: true});
  },

  onSideBarClose: function() {
    this.setData({ showSideBar: false});
  },

  onPageChange: function(event) {
    wx.showToast({
      icon: "none",
      title: `切换至第${event.detail}项`
    });
  },

  onSearch: function() {
    wx.showToast({icon: 'none', title: "Search"})
  }, 
  onClickSearch: function() {
    this.setData({ showSearchBar: true});
  },
  onSearchBarClose: function() {
    this.setData({ showSearchBar: false});
  },

  onCancelSearch: function() {
    this.setData({ showSearchBar: false});
  },

  initDataList: function() {
    let list = [];
    for (const e of "abcdefghijklmnopq" ) {
      list.push({name: e, imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' });
    }
    this.setData({ dataList: list });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查询屏幕高度
    let windowHeight = 0;
    wx.getSystemInfo({
      success(res) {
        windowHeight = res.windowHeight;
      }
    });
    this.setData( {
      windowHeight: windowHeight
    });
    console.log("windowHeight:" + this.data.windowHeight);

    // 初始化展示数据
    this.initDataList();
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

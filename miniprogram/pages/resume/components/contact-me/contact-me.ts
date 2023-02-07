Component({
  data: {
    openAddWechatModalSheet: false,
  },
  methods: {
    handleTapCallPhone() {
      wx.makePhoneCall({
        phoneNumber: "13428342592",
      });
    },
    handleOpenAddWechatModalSheet() {
      this.setData({
        openAddWechatModalSheet: true,
      });
    },
    handleCloseAddWechatModalSheet() {
      this.setData({
        openAddWechatModalSheet: false,
      });
    },
  },
});

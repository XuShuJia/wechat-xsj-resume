Component({
  properties: {
    open: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: "",
    },
    okButton: {
      type: Boolean,
      value: true,
    },
    okButtonText: {
      type: String,
      value: "确定",
    },
    okButtonClose: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    rendered: false,
    show: false,
  },
  methods: {
    handleTapMask() {
      this.triggerEvent("close");
    },
    handleTapOkButton() {
      this.triggerEvent("close");
    },
    handleTapModalSheet() {},
  },
  observers: {
    open: function (open) {
      if (open && !this.data.rendered && !this.data.show) {
        this.setData(
          {
            rendered: true,
          },
          () => {
            wx.nextTick(() => {
              setTimeout(() => {
                this.setData({
                  show: true,
                });
              }, 30);
            });
          }
        );
      }
      if (!open && this.data.rendered && this.data.show) {
        this.setData(
          {
            show: false,
          },
          () => {
            setTimeout(() => {
              this.setData({ rendered: false });
              this.triggerEvent("closed");
            }, 300);
          }
        );
      }
    },
  },
});

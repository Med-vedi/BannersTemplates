export const treeData = [
  {
    value: "vertical",
    title: "Vertical",
    children: [
      {
        value: "vcb",
        title: "Vertical Carousel Bottom",
        children: [
          {
            value: "vcbx300x600",
            title: "300x600",
          },
          {
            value: "vcbx240x600",
            title: "240x600",
          },
          {
            value: "vcbx160x600",
            title: "160x600",
            extra: {
              no_padding: true,
              // no_rating: true,
              // no_best: true,
            },
          },
        ],
      },
      {
        value: "vcr",
        title: "Vertical Carousel Right",
        children: [
          {
            value: "vcrx240x400",
            title: "240x400",
          },
          {
            value: "vcrx300x500",
            title: "300x500",
          },
          {
            value: "vcrx320x480",
            title: "320x480",
          },
        ],
      },
    ],
  },
  {
    value: "horisontal",
    title: "Horisontal",
    children: [
      {
        value: "hcb",
        title: "Horisontal Carousel Bottom",
        children: [
          {
            value: "hcbx300x250",
            title: "300x250",
          },
          {
            value: "hcbx300x300",
            title: "300x300",
          },
          {
            value: "hcbx336x280",
            title: "336x280",
          },

          {
            value: "hcbx360x250",
            title: "360x250",
          },
          {
            value: "hcbx400x240",
            title: "400x240",
          },

          {
            value: "hcbx393x250",
            title: "393x250",
          },
          {
            value: "hcbx412x250",
            title: "412x250",
          },
          // no carousel
          {
            value: "hcbx480x320",
            title: "480x320",
            extra: {
              no_carousel: true,
              // no_rating: true,
              // no_best: true,
            },
          },
          {
            value: "hcbx360x200",
            title: "360x200",
            extra: {
              no_carousel: true,
              no_rating: true,
              no_best: true,
            },
          },
          {
            value: "hcbx360x180",
            title: "360x180",
            extra: {
              no_carousel: true,
              no_rating: true,
              no_best: true,
            },
          },
        ],
      },
      {
        value: "hcr",
        title: "Horisontal Carousel Right",
        children: [
          {
            value: "hcrx970x250",
            title: "970x250",
          },
        ],
      },
      {
        value: "hcrw",
        title: "Horisontal Carousel Right Wide",
        children: [
          {
            value: "hcrwx1000x120",
            title: "1000x120",
            extra: {
              // no_carousel: true,
              // no_rating: true,
              no_best: true,
            },
          },
          {
            value: "hcrwx970x90",
            title: "970x90",
            extra: {
              // no_carousel: true,
              // no_rating: true,
              no_best: true,
            },
          },
          {
            value: "hcrwx728x90",
            title: "728x90",
            extra: {
              no_carousel: true,
              // no_rating: true,
              no_best: true,
            },
          },
        ],
      },
    ],
  },
];

export const bannerHints = {
  not_medicine: {
    text: "???? ???????????????? ????????????????????",
    height_percent: 10,
  },
  over_11_age: {
    text: "?????????????????????????????????????? ???? ????????????????????????. ?????? ?????????????? ?????????? ?? 11 ??????????????",
    height_percent: 5,
  },
  get_doctor_consulting: {
    text: "???????? ????????????????????????????????. ?????????????????????????? ?? ????????????",
    height_percent: 5,
  },
  weapon_warning: {
    text: "?????????????????????????? ?????????????? ?? ?????????????? ??????????????",
    height_percent: 5,
  },
};

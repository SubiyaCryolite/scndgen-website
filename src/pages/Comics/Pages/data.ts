interface ComicData {
  src: string;
  caption?: string;
}

interface PageData {
  next?: string;
  prev?: string;
  comics: ComicData[];
}

const page0: PageData = {
  next: "../1",
  comics: [
    {
      src: "0000.jpg",
      caption: "Cover",
    },
    {
      src: "0001.jpg",
    },
    {
      src: "0002.jpg",
    },
    {
      src: "0003.jpg",
    },
    {
      src: "0004.jpg",
    },
    {
      src: "0005.jpg",
    },
    {
      src: "0006.jpg",
    },
    {
      src: "0007.jpg",
    },
    {
      src: "0008.jpg",
    },
    {
      src: "0009.jpg",
    },
    {
      src: "0010.jpg",
    },
    {
      src: "0011.jpg",
    },
    {
      src: "0012.jpg",
    },
    {
      src: "0013.jpg",
    },
  ],
};

const page1: PageData = {
  prev: "../0",
  next: "../2",
  comics: [
    {
      src: "0014.jpg",
    },
    {
      src: "0015.jpg",
    },
    {
      src: "0016.jpg",
    },
    {
      src: "0017.jpg",
    },
    {
      src: "0018.jpg",
    },
    {
      src: "0019.jpg",
    },
    {
      src: "0020.jpg",
    },
    {
      src: "0021.jpg",
    },
    {
      src: "0022.jpg",
    },
    {
      src: "0023.jpg",
    },
    {
      src: "0024.jpg",
    },
    {
      src: "0025.jpg",
    },
    {
      src: "0026.jpg",
    },
    {
      src: "0027.jpg",
    },
  ],
};

const page2: PageData = {
  prev: "../1",
  next: "../3",
  comics: [
    {
      src: "0028.jpg",
    },
    {
      src: "0029.jpg",
    },
    {
      src: "0030.jpg",
    },
    {
      src: "0031.jpg",
    },
    {
      src: "0032.jpg",
    },
    {
      src: "0033.jpg",
    },
    {
      src: "0034.jpg",
    },
    {
      src: "0035.jpg",
    },
    {
      src: "0036.jpg",
    },
    {
      src: "0037.jpg",
    },
    {
      src: "0038.jpg",
    },
    {
      src: "0039.jpg",
    },
    {
      src: "0040.jpg",
    },
    {
      src: "0041.jpg",
    },
  ],
};

const page3: PageData = {
  prev: "../2",
  next: "../4",
  comics: [
    {
      src: "0042.jpg",
    },
    {
      src: "0043.jpg",
    },
    {
      src: "0044.jpg",
    },
    {
      src: "0045.jpg",
    },
    {
      src: "0046.jpg",
    },
    {
      src: "0047.jpg",
    },
    {
      src: "0048.jpg",
    },
    {
      src: "0049.jpg",
    },
    {
      src: "0050.jpg",
    },
    {
      src: "0051.jpg",
    },
    {
      src: "0052.jpg",
    },
    {
      src: "0053.jpg",
    },
    {
      src: "0054.jpg",
    },
    {
      src: "0055.jpg",
    },
  ],
};

const page4: PageData = {
  prev: "../3",
  next: "../5",
  comics: [
    {
      src: "0056.jpg",
    },
    {
      src: "0057.jpg",
    },
    {
      src: "0058.jpg",
    },
    {
      src: "0059.jpg",
    },
    {
      src: "0060.jpg",
    },
    {
      src: "0061.jpg",
    },
    {
      src: "0062.jpg",
    },
    {
      src: "0063.jpg",
    },
    {
      src: "0064.jpg",
    },
    {
      src: "0065.jpg",
    },
    {
      src: "0066.jpg",
    },
    {
      src: "0067.jpg",
    },
    {
      src: "0068.jpg",
    },
    {
      src: "0069.jpg",
    },
  ],
};

const page5: PageData = {
  prev: "../4",
  comics: [
    {
      src: "0070.jpg",
    },
    {
      src: "0071.jpg",
    },
    {
      src: "0072.jpg",
    },
    {
      src: "0073.jpg",
    },
    {
      src: "0074.jpg",
    },
  ],
};

export const page: PageData[] = [page0, page1, page2, page3, page4, page5];

export interface Item {
  id: number
  title: string
}

export interface Data {
  code: number
  list: Item[]
}

export interface ListData {
  data: Data
}

export const listData: ListData = {
  data: {
    code: 200,
    list: [
      {
        id: 1,
        title: '列表一'
      },
      {
        id: 2,
        title: '列表二'
      },
      {
        id: 3,
        title: '列表三'
      },
      {
        id: 4,
        title: '列表四'
      },
      {
        id: 5,
        title: '列表五'
      },
      {
        id: 6,
        title: '列表六'
      },
      {
        id: 7,
        title: '列表七'
      },
      {
        id: 8,
        title: '列表八'
      },
      {
        id: 9,
        title: '列表九'
      },
      {
        id: 10,
        title: '列表十'
      },
      {
        id: 11,
        title: '列表十一'
      },
      {
        id: 12,
        title: '列表十二'
      }
    ]
  }
}

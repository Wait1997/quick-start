import { message } from 'antd'
import { apiGetMenu, apiPostMenuById, apiPostPowerById, apiPostRoleById } from 'Src/api/login'
import { Dispatch } from 'Src/store'
import { Response } from 'Config/url'
import { Menu, Role, PowerTree, SysState } from './type'

const defaultState: SysState = {
  menus: [], // 所有的菜单信息（用于菜单管理，无视权限）
  roles: [], // 所有的角色信息（用于Model赋予项，无视权限）
  powerTreeData: [] // 分配权限treeTable组件所需原始数据
}
export default {
  state: defaultState,
  reducers: {
    // 保存所有的菜单数据
    reducerSetMenus(state: SysState, payload: Menu[]): SysState {
      return { ...state, menus: payload }
    },
    // 保存所有角色数据
    reducerSetRoles(state: SysState, payload: Role[]): SysState {
      return { ...state, roles: payload }
    },

    // 保存所有权限数据
    reducerSetAllPowers(state: SysState, payload: PowerTree[]): SysState {
      return { ...state, powerTreeData: payload }
    }
  },
  effects: (dispatch: Dispatch) => ({
    /**
     * @description 获取所有菜单
     */
    async getMenus(): Promise<Response<Menu[]> | null> {
      try {
        const res = await apiGetMenu()
        if (res && res.code === 200) {
          dispatch.sys.reducerSetMenus(res.data)
        }
        return res
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    },
    /**
     * 根据菜单id获取对应的菜单信息
     * @param {number|number[]} id
     * @returns
     */
    async getMenusById(id: number | number[]) {
      try {
        const res = await apiPostMenuById(id)
        return res
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    },
    /**
     * 根据角色id查询对应的角色数据
     * @param id
     * @returns
     */
    async getRoleById(id: number | number[]) {
      try {
        const res = await apiPostRoleById(id)
        return res
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    },
    async getPowerById(id: number | number[]) {
      try {
        const res = await apiPostPowerById(id)
        return res
      } catch {
        message.error('网络错误，请重试')
      }
      return null
    }
  })
}

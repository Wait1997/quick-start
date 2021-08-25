/**
 * @description 菜单添加，修改时的参数类型
 */
export interface MenuParam {
  /**
   * @description id,添加时可以没有id
   */
  id?: number
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 图标
   */
  icon: string
  /**
   * @description 路径链接
   */
  url: string
  /**
   * @description 父级id
   */
  parent: number | null
  /**
   * @description 描述
   */
  desc: string
  /**
   * @description 排序编号
   */
  sorts: number
  /**
   * @description 状态 1启用 -1禁用
   */
  conditions: number
  /**
   * @description 子菜单
   */
  children?: Menu[]
}

/**
 * @description 菜单对象
 */
export interface Menu extends MenuParam {
  id: number
}

/**
 * @description 菜单id和权限id
 */
export interface MenuAndPower {
  menuId: number // 菜单id
  powers: number[] // 该菜单拥有的所有权限id
}

/**
 * @description 角色添加和修改时的参数类型
 */
export interface RoleParam {
  id?: number // id 添加时可以不传id
  title: string // 角色名
  desc: string // 描述
  sorts: number // 排序编号
  conditions: number // 状态 1启用 -1禁用
  menuAndPowers?: MenuAndPower[] // 添加时可以不传菜单和权限
}

/**
 * 角色对象
 */
export interface Role extends RoleParam {
  id: number // id
  menuAndPowers: MenuAndPower[] // 当前角色拥有的菜单id和权限
}

/**
 * @description 权限添加修改时的参数类型
 */
export interface PowerParam {
  id?: number // ID, 添加时可以没有id
  menu: number // 所属的菜单
  title: string // 标题
  code: string // CODE
  desc: string // 描述
  sorts: number // 排序
  conditions: number // 状态 1启用，-1禁用
}

/**
 * @description 权限对象
 */
export interface Power extends PowerParam {
  id: number // ID
}

/**
 * @description 用户数据类型
 */
export interface UserInfo {
  /**
   * @description 用户基本信息
   */
  userBasicInfo: UserBasicInfo | null
  menus: Menu[] // 拥有的所有菜单对象
  roles: Role[] // 拥有的所有角色对象
  powers: Power[] // 拥有的所有权限对象
}

/**
 * @description 用户的基本信息
 */
export interface UserBasicInfo {
  id: number // ID
  username: string // 用户名
  password: string | number // 密码
  phone: string | number // 手机
  email: string // 邮箱
  desc: string // 描述
  conditions: number // 状态 1启用，-1禁用
  roles: number[] // 拥有的所有角色ID
}

/**
 * @description 添加修改用户时参数的数据类型
 */
export interface UserBasicInfoParam {
  id?: number // ID
  username: string // 用户名
  password: string | number // 密码
  phone?: string | number // 手机
  email?: string // 邮箱
  desc?: string // 描述
  conditions?: number // 状态 1启用，-1禁用
}

export interface PowerTree extends Menu {
  powers: Power[]
}

/**
 * @description app的state的类型
 */
export interface AppState {
  userinfo: UserInfo
  powersCode: string[]
}

/**
 * @description sys的state类型
 */
export interface SysState {
  menus: Menu[]
  roles: Role[]
  powerTreeData: PowerTree[]
}

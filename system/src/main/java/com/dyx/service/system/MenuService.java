package com.dyx.service.system;

import com.dyx.entity.PageData;
import com.dyx.entity.system.Menu;

import java.util.List;

/**
 * 说明：菜单服务接口
 * 作者：FH Admin Q313596790
 * 官网：www.fhadmin.org
 */
public interface MenuService {

	/**新增菜单
	 * @param menu
	 * @throws Exception
	 */
	public void addMenu(Menu menu) throws Exception;

	/**保存修改菜单
	 * @param menu
	 * @throws Exception
	 */
	public void edit(Menu menu) throws Exception;

	/**获取最大的菜单ID
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData findMaxId(PageData pd) throws Exception;

	/**获取所有菜单并填充每个菜单的子菜单列表(系统菜单列表)
	 * @param MENU_ID
	 * @return
	 * @throws Exception
	 */
	public List<Menu> listAllMenuQx(String MENU_ID) throws Exception;

	/**通过ID获取其子一级菜单
	 * @param parentId
	 * @return
	 * @throws Exception
	 */
	public List<Menu> listSubMenuByParentId(String parentId)throws Exception;

	/**通过ID获取其子一级菜单
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public List<Menu> listSubMenuByParent(PageData pd)throws Exception;

	/**获取所有菜单并填充每个菜单的子菜单列表(菜单管理)(
	 * @param MENU_ID
	 * @return
	 * @throws Exception
	 */
	public List<Menu> listAllMenu(String MENU_ID) throws Exception;

	/**
	 * 左侧字典树（懒加载）
	 *
	 * @param pd 前台传递参数对象
	 * @return List<PageData>  对象
	 * @throws Exception
	 */
	public List<PageData> listLazyTree(PageData pd) throws Exception;

	/**获取所有菜单并填充每个菜单的子菜单列表(系统菜单列表)
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData getMenuById(PageData pd) throws Exception;

	/**删除菜单
	 * @param MENU_ID
	 * @throws Exception
	 */
	public void deleteMenuById(String MENU_ID) throws Exception;

	/**保存菜单图标
	 * @param pd
	 * @throws Exception
	 */
	public void editicon(PageData pd) throws Exception;

	/**校验菜单名称
	 * @param pd
	 * @throws Exception
	 */
	public int checkMenuName(PageData pd) throws Exception;
}

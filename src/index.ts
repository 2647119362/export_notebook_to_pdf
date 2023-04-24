/*
 * @Author       : error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date         : 2023-04-22 18:31:02
 * @LastEditors  : error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime : 2023-04-24 12:44:27
 * @FilePath     : /workspace/joplin_plugins/export_notebook_to_pdf/src/index.ts
 * @Description  : 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import joplin from 'api';
import { MenuItemLocation} from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.commands.register({
			name: 'exportNotebookToPDF',
			label: 'export notebook to pdf',
			execute: async (folderId:string) => {
				console.info('Click on folder: ' + folderId);
				const notes = (await joplin.data.get(['notes'], { fields: ['id', 'parent_id'] })).items
				const ids = []
				notes.forEach(function(item){
					if (item.parent_id == folderId){
						console.info(item.id)
						ids.push(item.id)
					}
				})
				console.info("ids:" + ids);
				await joplin.commands.execute('exportPdf', ids)
			},
		});
		await joplin.views.menuItems.create('export notebook to pdf', 'exportNotebookToPDF', MenuItemLocation.FolderContextMenu);
		

	},
	
});

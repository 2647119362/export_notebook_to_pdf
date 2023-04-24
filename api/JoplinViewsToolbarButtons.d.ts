/*
 * @Author       : error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date         : 2023-04-22 17:46:58
 * @LastEditors  : error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime : 2023-04-22 19:29:51
 * @FilePath     : /workspace/joplin_plugins/export_notebook_to_pdf/api/JoplinViewsToolbarButtons.d.ts
 * @Description  : 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ToolbarButtonLocation } from './types';
import Plugin from '../Plugin';
/**
 * Allows creating and managing toolbar buttons.
 *
 * [View the demo plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/register_command)
 */
export default class JoplinViewsToolbarButtons {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    /**
     * Creates a new toolbar button and associate it with the given command.
     */
    create(id: string, commandName: string, location: ToolbarButtonLocation): Promise<void>;
}

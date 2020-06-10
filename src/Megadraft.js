/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import DraftJS from "draft-js";

import insertDataBlock from "./insertDataBlock";
import Media from "./components/Media";
import MegadraftEditor from "./components/MegadraftEditor";
import MegadraftIcons from "./icons";
import MegadraftMediaMessage from "./components/MediaMessage";
import * as MegadraftPlugin from "./components/plugin";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import StaticToolbar from "./components/StaticToolbar";
import * as utils from "./utils";

const Megadraft = {
  DraftJS,
  insertDataBlock,
  Media,
  MegadraftEditor,
  MegadraftIcons,
  MegadraftMediaMessage,
  MegadraftPlugin,
  Sidebar,
  Toolbar,
  StaticToolbar,
  editorStateFromRaw: utils.editorStateFromRaw,
  editorStateToJSON: utils.editorStateToJSON,
  createTypeStrategy: utils.createTypeStrategy
};

module.exports = Megadraft;

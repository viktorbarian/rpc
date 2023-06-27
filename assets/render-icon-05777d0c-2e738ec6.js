import{h as t}from"./index-17cfbcc7.js";/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const i=(n,r)=>{if(typeof n=="function")return t("span",{innerHTML:n(),class:r});if(typeof n=="string")return t("scale-icon",{name:n});const s=n.tag;return t(s,Object.assign({},n.attributes))};export{i as r};

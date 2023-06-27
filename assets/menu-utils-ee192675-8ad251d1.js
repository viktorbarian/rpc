/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const d=(r=[],l,n)=>r.reduce((c,e)=>e.id===l?{selected:e,parent:n}:e.children&&e.children.length&&d(e.children,l,e).selected?d(e.children,l,e):c,{selected:null,parent:null}),t=(r,l)=>{let n=d(r,l);for(;n.parent;)n=d(r,n.parent.id);return n.selected};export{t as a,d as f};

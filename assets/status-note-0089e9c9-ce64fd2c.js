/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const c={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},l={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:`This component is currently under development and is prone to change. Please wait for its release.
It will be available in Storybook once it's finished and documented.`,deprecated:"This component is deprecated."};function s({tag:n="WIP",extraMessage:t=null,message:o=null,source:e=null,type:a="info"}){const i=console[a];i(`%c scale – ${c[n]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${o||l[n]} ${t?`
`+t:""}
    `,e!==null?`
source:`:"",typeof e=="object"?e:`${e}`,e!==null?`

`:"")}export{s};

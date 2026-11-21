import{c as d}from"./index-BkV_R-9e.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],M=d("external-link",m),i=t=>t>=0?Math.floor(t+.5):-Math.floor(-t+.5),g=t=>i(t*100),k=t=>t/100,b=(t,e)=>i(t*e),q=(t,e)=>{const a=e.map(r=>Number.isFinite(r)&&r>0?r:0),n=a.reduce((r,o)=>r+o,0);if(a.length===0){if(t!==0)throw new Error(`allocate: cannot distribute ${t} cents across zero parts`);return[]}if(n<=0){const r=Math.floor(t/a.length),o=a.map(()=>r);for(let s=0;s<t-r*a.length;s++)o[s]+=1;return o}const c=a.map(r=>t*r/n),l=c.map(Math.floor);let p=t-l.reduce((r,o)=>r+o,0);const f=c.map((r,o)=>({i:o,frac:r-Math.floor(r)})).sort((r,o)=>o.frac-r.frac),h=[...l];for(let r=0;r<p;r++)h[f[r%f.length].i]+=1;return h};export{M as E,q as a,g as f,i as r,b as s,k as t};

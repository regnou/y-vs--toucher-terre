const m=(o,l,s,n=!1,x="MOUNT")=>{console.debug("🚔"),console.dir(o);const e=l.includes("/cms/")?"CMS":"APP";console.debug(n?`🚔🏎️✅ ${x}-ED \x1B[103;30;4m ${e} \x1B[m\x1B[107;93;4m ${s} \x1B[m
		\x1B[43;30;4m${JSON.stringify(o,null,2)} \x1B[m
`:`🚔🏎️✅ ${x}-ED \x1B[41;97;4m ${e} \x1B[m\x1B[107;91;4m ${s} \x1B[m
`),console.debug(`🚔
`)};export{m as a};

//@${sender.split("@")[0]}
const fs = require('fs')

exports.randomFilme = [`*FILME:*\n✰ۜۜ͜͡𝐇𝐎𝐌𝐄𝐌 𝐀𝐑𝐀𝐍𝐇𝐀 𝐒𝐄𝐌 𝐕𝐎𝐋𝐓𝐀 𝐏𝐑𝐀 𝐂𝐀𝐒𝐀🎥\n\n*LINK: https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`, `*FILME:*\n✰ۜۜ͜͡𝐁𝐑𝐈𝐍𝐐𝐔𝐄𝐃𝐎𝐒 𝐃𝐎 𝐓𝐄𝐑𝐑𝐎𝐑🎥\n\n*LINK: https://overflix.online/filmes/brinquedos-do-terror/`,`*FILME:*\n✰ۜۜ͜͡𝐏𝐎𝐍𝐓𝐄 𝐏𝐀𝐑𝐀 𝐓𝐄𝐑𝐀𝐁𝐈𝐓𝐈𝐀🎥\n\n*LINK: https://drive.google.com/file/d/1F0iFKt2xgglz7pldUuMaE5gxLs55Ta7T/view?usp=drivesdk`,`*FILME:*\n✰ۜۜ͜͡𝐇𝐀𝐍𝐍𝐀𝐇 𝐌𝐎𝐍𝐓𝐀𝐍𝐀-𝐎 𝐅𝐈𝐋𝐌𝐄🎥\n\n*LINK: https://drive.google.com/file/d/1Fx1Dn-JV8LOsfiBYL8-ihdz4b2fVnNbg/view?usp=drivesdk`, `*Filme:*\n✰ۜۜ͜͡𝐀 5 𝐏𝐀𝐒𝐒𝐎𝐒 𝐃𝐄 𝐕𝐎𝐂𝐄̂:🎥\n\n*Link: https://drive.google.com/file/d/132_vwYz5zXMQORAhWmTwQHlLZ47Tpu7V/view?usp=drivesdk`,`*Filme:*\n✰ۜۜ͜͡𝐀𝐅𝐓𝐄𝐑 1:🎥\n\n*Link: https://drive.google.com/file/d/1YX8pGsFAY1vrKu8rl96VdN8-vhpUQ2mY/view?usp=drivesdk`,`*Filme:*\n✰ۜۜ͜͡𝐀 𝐂𝐔𝐋𝐏𝐀 𝐄́ 𝐃𝐀𝐒 𝐄𝐒𝐓𝐑𝐄𝐋𝐀𝐒🎥\n\n*Link: https://drive.google.com/file/d/1ADMJxVpf0RLTJZBpjj_lb0KRGb_OQHs1/view`, `*Filme:*
✰ۜۜ͜͡𝐆𝐀𝐑𝐎𝐓𝐀 𝐈𝐍𝐅𝐄𝐑𝐍𝐀𝐋🎥

*Link:* https://drive.google.com/file/d/1cGSEO0tEPg44Yt1AcVXpNgdzMOXXZ64F/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐎𝐔 𝐃𝐄𝐒𝐀𝐅𝐈𝐎:🎥

*Link:* https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐀𝐒 𝐂𝐑𝐎̂𝐍𝐈𝐂𝐀𝐒 𝐃𝐄 𝐍𝐀́𝐑𝐍𝐈𝐀 (𝐓𝐎𝐃𝐎𝐒🎥

*Link:* https://drive.google.com/folderview?id=1QYz_a12LMrs0Trz2RyfcsrkoNYLsjpdg`, `*Filme:* ✰ۜۜ͜͡𝐀𝐒 𝐕𝐀𝐍𝐓𝐀𝐆𝐄𝐍𝐒 𝐃𝐄 𝐒𝐄𝐑 𝐈𝐍𝐕𝐈𝐒𝐈́𝐕𝐄𝐋🎥

*Link:* https://drive.google.com/file/d/12cnRyPwcXDTbbU26MF7wXhz9cnotdEoX/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐌𝐎𝐀𝐍𝐀🎥

*Link:* https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐄𝐋𝐀𝐑🎥

*Link:* https://drive.google.com/file/d/10nSkrlV_TwkqtyFJ_h-c3GlLx-E7nqz9/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐔𝐌 𝐎𝐋𝐇𝐀𝐑 𝐃𝐎 𝐏𝐀𝐑𝐀𝐈𝐒𝐎🎥

*Link:* https://drive.google.com/file/d/102IWrzkbMAYDxkPmwMuHDuKFK3HGVFWF/view?usp=drivesdk`,`*Filme:* ✰ۜۜ͜͡𝐀𝐒 𝐁𝐑𝐀𝐍𝐐𝐔𝐄𝐋𝐀𝐒🎥

*Link:* https://drive.google.com/file/d/1avm4yXd2tg1lZKy00yZRknboNv2Dxqpi/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐌𝐎𝐍𝐓𝐄 𝐂𝐀𝐑𝐋𝐎🎥

*Link:* https://drive.google.com/file/d/1GmN34mKHGd5rp82cX3LVv4mAzz1XoVbB/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐍𝐀𝐒𝐂𝐄 𝐔𝐌𝐀 𝐄𝐒𝐓𝐑𝐄𝐋𝐀🎥

*Link:* https://drive.google.com/file/d/1t8ZLbRMDsUhnzGMbjDie-7jTKDNxy7xF/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐌𝐈𝐒𝐓𝐄́𝐑𝐈𝐎 𝐍𝐎 𝐌𝐄𝐃𝐈𝐓𝐄𝐑𝐑𝐀̂𝐍𝐄𝐎🎥

*Link:* https://drive.google.com/file/d/1J4JMLzT6qSgYl1nX75RIEPc4DVc7G9FS/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐍𝐎𝐑𝐁𝐈𝐓🎥

*Link:* https://drive.google.com/file/d/1UkgrI-fM6rOAHmFEaABtJQP_Lx6jantD/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐍𝐄𝐑𝐕𝐄:🎥

*Link:* https://drive.google.com/file/d/1kbS-l4Af_PR_wFmykYAE_pq6qwfORWjD/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐄𝐒𝐐𝐔𝐀𝐃𝐑𝐀̃𝐎 6🎥

*Link:* https://drive.google.com/file/d/13voArwUsQMgC3o7Q0ZIf87MKjQb3laU6/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐀 𝐂𝐇𝐄𝐆𝐀𝐃𝐀🎥

*Link:* https://drive.google.com/file/d/17ZTQ4VaUwM_m7immHx4XDWvR_fc1K0Vt/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐉𝐔𝐌𝐀𝐍𝐉𝐈-𝐁𝐄𝐌 𝐕𝐈𝐍𝐃𝐎 𝐀 𝐒𝐄𝐋𝐕𝐀🎥

*Link:* https://drive.google.com/file/d/1j5puYj2JzBgDcH0QKIR__UY1o1Zvs022/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐀 𝐆𝐀𝐑𝐎𝐓𝐀 𝐍𝐎 𝐓𝐑𝐄𝐌:🎥

*Link:* https://drive.google.com/file/d/10nc2orAOhI_fLHWLCJfffuFVuUlKo158/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐔𝐌 𝐋𝐀𝐂̧𝐎 𝐃𝐄 𝐀𝐌𝐎𝐑🎥

*Link:* https://drive.google.com/file/d/17x2Um_DDg7Px2y1EINwpA8jLdgDx-AeM/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐎𝐈𝐓𝐎 𝐌𝐔𝐋𝐇𝐄𝐑𝐄𝐒 𝐄 𝐔𝐌 𝐒𝐄𝐆𝐑𝐄𝐃𝐎🎥

*Link:* https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐒𝐡.& 𝐒𝐑𝐀.𝐒𝐌𝐈𝐓𝐇🎥

*Link:* https://drive.google.com/file/d/1bJsB7wjvU7WWuFSJzwcz0VKQ6vz2UMlA/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)🎥

*Link:* https://drive.google.com/folderview?id=10QVCb14pAWod2rQ67n1BlLocP71yF8Ez`, `*Filme:* ✰ۜۜ͜͡𝐏𝐈𝐑𝐀𝐓𝐀𝐒 𝐃𝐎 𝐂𝐀𝐑𝐈𝐁𝐄 2 - 𝐎 𝐁𝐀𝐔́ 𝐃𝐀 𝐌𝐎𝐑𝐓𝐄

*Link:* https://drive.google.com/file/d/105x-9szPIoutqRVwcpVqW9Y6lDDSuNG5/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐏𝐈𝐑𝐀𝐓𝐀𝐒 𝐃𝐎 𝐂𝐀𝐑𝐈𝐁𝐄 3 𝐍𝐎 𝐅𝐈𝐌 𝐃𝐎 𝐌𝐔𝐍𝐃𝐎

*Link:* https://drive.google.com/file/d/10IcsdHshS6YRgBh9mchgV3Vc9Ss5cNc2/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐏𝐈𝐑𝐀𝐓𝐀𝐒 𝐃𝐎 𝐂𝐀𝐑𝐈𝐁𝐄 4 𝐍𝐀𝐕𝐄𝐆𝐀𝐍𝐃𝐎 𝐄𝐌 𝐀́𝐆𝐔𝐀𝐒 𝐌𝐈𝐒𝐓𝐄𝐑𝐈𝐎𝐒𝐀𝐒

*Link:* https://drive.google.com/file/d/1-GcjzGHMhBBufmC1mLNecOY19Bp6CJnV/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐏𝐈𝐑𝐀𝐓𝐀𝐒 𝐃𝐎 𝐂𝐀𝐑𝐈𝐁𝐄 5 𝐀 𝐕𝐈𝐍𝐆𝐀𝐍𝐂̧𝐀 𝐃𝐄 𝐒𝐀𝐋𝐀𝐙𝐀𝐑

*Link:* https://drive.google.com/file/d/10IHBiERlbMdztDqeQyuu0gaEVoCB1PrK/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐉𝐔𝐑𝐀𝐒𝐒𝐈𝐂 𝐖𝐎𝐑𝐋𝐃 𝐃𝐎𝐌𝐈́𝐍𝐈𝐎

*Link:* https://drive.google.com/file/d/1-PSoFYPKbjFB8ZixNp0Q68QeJB5PYgmE/view?usp=drivesdk`, `*Filme:* ✰ۜۜ͜͡𝐁𝐀𝐑𝐁𝐈𝐄 2023

*Link:* https://drive.google.com/file/d/100Atqsm-ahCmCxIHWZifxE0gncj_IZpS/view?usp=drivesdk`]
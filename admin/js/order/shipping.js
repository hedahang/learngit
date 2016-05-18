//定义一个物流发货的类函数
var Shipping=function(){
	var wuliulist=[{
        "com": "申通快递",
        "no": "shentong",
        "tel": "95543",
		"url":"http://www.sto.cn/"
    },
    {
        "com": "EMS",
        "no": "ems",
        "tel": "11183",
		"url":"http://www.ems.com.cn/"
    },
    {
        "com": "顺丰速运",
        "no": "shunfeng",
        "tel": "95338",
		"url":"http://www.sf-express.com/cn/sc/"
    },
    {
        "com": "韵达快递",
        "no": "yunda",
        "tel": "95546",
		"url":"http://www.yundaex.com/"
    },
    {
        "com": "圆通速递",
        "no": "yuantong",
        "tel": "95554",
		"url":"http://www.yto.net.cn/gw/index/index.html"
    },
    {
        "com": "中通快递",
        "no": "zhongtong",
        "tel": "95311"
    },
    {
        "com": "百世汇通",
        "no": "huitongkuaidi",
        "tel": "4009 565656"
    },
    {
        "com": "天天快递",
        "no": "tiantian",
        "tel": "400-188-8888"
    },
    {
        "com": "宅急送",
        "no": "zhaijisong",
        "tel": "400-6789-000"
    },
    {
        "com": "鑫飞鸿",
        "no": "xinhongyukuaidi",
        "tel": "021-69781999"
    },
    {
        "com": "CCES/国通快递",
        "no": "cces",
        "tel": "400-111-1123"
    },
    {
        "com": "全一快递",
        "no": "quanyikuaidi",
        "tel": "400-663-1111"
    },
    {
        "com": "彪记快递",
        "no": "biaojikuaidi",
        "tel": "+886 (02) 2562-3533"
    },
    {
        "com": "星晨急便",
        "no": "xingchengjibian",
        "tel": null
    },
    {
        "com": "亚风速递",
        "no": "yafengsudi",
        "tel": "4001-000-002"
    },
    {
        "com": "源伟丰",
        "no": "yuanweifeng",
        "tel": "400-601-2228"
    },
    {
        "com": "全日通",
        "no": "quanritongkuaidi",
        "tel": "020-86298999"
    },
    {
        "com": "安信达",
        "no": "anxindakuaixi",
        "tel": "400-626-2356"
    },
    {
        "com": "民航快递",
        "no": "minghangkuaidi",
        "tel": "400-817-4008"
    },
    {
        "com": "凤凰快递",
        "no": "fenghuangkuaidi",
        "tel": "010-85826200"
    },
    {
        "com": "京广速递",
        "no": "jinguangsudikuaijian",
        "tel": "0769-88629888"
    },
    {
        "com": "配思货运",
        "no": "peisihuoyunkuaidi",
        "tel": "010-65489928,6548957"
    },
    {
        "com": "中铁物流",
        "no": "ztky",
        "tel": "400-000-5566"
    },
    {
        "com": "UPS",
        "no": "ups",
        "tel": "400-820-8388"
    },
    {
        "com": "FedEx-国际件",
        "no": "fedex",
        "tel": "400-886-1888"
    },
    {
        "com": "DHL-中国件",
        "no": "dhl",
        "tel": "800-810-8000"
    },
    {
        "com": "AAE-中国件",
        "no": "aae",
        "tel": "400-610-0400"
    },
    {
        "com": "大田物流",
        "no": "datianwuliu",
        "tel": "400-626-1166"
    },
    {
        "com": "德邦物流",
        "no": "debangwuliu",
        "tel": "95353"
    },
    {
        "com": "新邦物流",
        "no": "xinbangwuliu",
        "tel": "4008-000-222"
    },
    {
        "com": "龙邦速递",
        "no": "longbanwuliu",
        "tel": "021-59218889"
    },
    {
        "com": "一邦速递",
        "no": "yibangwuliu",
        "tel": "000-000-0000"
    },
    {
        "com": "速尔快递",
        "no": "suer",
        "tel": "400-158-9888"
    },
    {
        "com": "联昊通",
        "no": "lianhaowuliu",
        "tel": "0769-88620000"
    },
    {
        "com": "广东邮政",
        "no": "guangdongyouzhengwuliu",
        "tel": "020-38181677"
    },
    {
        "com": "中邮物流",
        "no": "zhongyouwuliu",
        "tel": "11183"
    },
    {
        "com": "天地华宇",
        "no": "tiandihuayu",
        "tel": "400-808-6666"
    },
    {
        "com": "盛辉物流",
        "no": "shenghuiwuliu",
        "tel": "4008-222-222"
    },
    {
        "com": "长宇物流",
        "no": "changyuwuliu",
        "tel": "4007-161-262"
    },
    {
        "com": "飞康达",
        "no": "feikangda",
        "tel": "010-84223376,8422337"
    },
    {
        "com": "元智捷诚",
        "no": "yuanzhijiecheng",
        "tel": "400-081-2345"
    },
    {
        "com": "邮政包裹/平邮",
        "no": "youzhengguonei",
        "tel": "11185"
    },
    {
        "com": "国际包裹",
        "no": "youzhengguoji",
        "tel": "11185"
    },
    {
        "com": "万家物流",
        "no": "wanjiawuliu",
        "tel": "4001-156-561"
    },
    {
        "com": "远成物流",
        "no": "yuanchengwuliu",
        "tel": "400-820-1646"
    },
    {
        "com": "信丰物流",
        "no": "xinfengwuliu",
        "tel": "400-830-6333"
    },
    {
        "com": "文捷航空",
        "no": "wenjiesudi",
        "tel": "020-88561502,8587150"
    },
    {
        "com": "全晨快递",
        "no": "quanchenkuaidi",
        "tel": "0769-82026703"
    },
    {
        "com": "佳怡物流",
        "no": "jiayiwuliu",
        "tel": "400-631-9999"
    },
    {
        "com": "优速物流",
        "no": "youshuwuliu",
        "tel": "400-1111-119"
    },
    {
        "com": "快捷速递",
        "no": "kuaijiesudi",
        "tel": "4008-333-666"
    },
    {
        "com": "D速快递",
        "no": "dsukuaidi",
        "tel": "0531-88636363"
    },
    {
        "com": "全际通",
        "no": "quanjitong",
        "tel": "400-0179-888"
    },
    {
        "com": "能达速递",
        "no": "ganzhongnengda",
        "tel": "400-6886-765"
    },
    {
        "com": "青岛安捷快递",
        "no": "anjiekuaidi",
        "tel": "400-056-5656"
    },
    {
        "com": "越丰物流",
        "no": "yuefengwuliu",
        "tel": "852-23909969"
    },
    {
        "com": "DPEX",
        "no": "dpex",
        "tel": "021-64659883"
    },
    {
        "com": "急先达",
        "no": "jixianda",
        "tel": "021-59766363"
    },
    {
        "com": "百福东方",
        "no": "baifudongfang",
        "tel": "400-706-0609"
    },
    {
        "com": "BHT",
        "no": "bht",
        "tel": "010-58633508"
    },
    {
        "com": "伍圆速递",
        "no": "wuyuansudi",
        "tel": "0592—5050535"
    },
    {
        "com": "蓝镖快递",
        "no": "lanbiaokuaidi",
        "tel": "0769-82898999"
    },
    {
        "com": "COE",
        "no": "coe",
        "tel": "0755-83575000"
    },
    {
        "com": "南京100",
        "no": "nanjing",
        "tel": "025-84510043"
    },
    {
        "com": "恒路物流",
        "no": "hengluwuliu",
        "tel": "400-182-6666"
    },
    {
        "com": "金大物流",
        "no": "jindawuliu",
        "tel": "0755-82262209"
    },
    {
        "com": "华夏龙",
        "no": "huaxialongwuliu",
        "tel": "400-716-6133"
    },
    {
        "com": "运通中港",
        "no": "yuntongkuaidi",
        "tel": "0769-81156999"
    },
    {
        "com": "佳吉快运",
        "no": "jiajiwuliu",
        "tel": "400-820-5566"
    },
    {
        "com": "盛丰物流",
        "no": "shengfengwuliu",
        "tel": "0591-83621111"
    },
    {
        "com": "源安达",
        "no": "yuananda",
        "tel": "0769-85157789"
    },
    {
        "com": "加运美",
        "no": "jiayunmeiwuliu",
        "tel": "0769-85515555"
    },
    {
        "com": "万象物流",
        "no": "wanxiangwuliu",
        "tel": "400-820-8088"
    },
    {
        "com": "宏品物流",
        "no": "hongpinwuliu",
        "tel": "400-612-1456"
    },
    {
        "com": "GLS",
        "no": "gls",
        "tel": "877-914-5465"
    },
    {
        "com": "上大物流",
        "no": "shangda",
        "tel": "400-021-9122"
    },
    {
        "com": "中铁快运",
        "no": "zhongtiewuliu",
        "tel": "95572"
    },
    {
        "com": "原飞航",
        "no": "yuanfeihangwuliu",
        "tel": "0755-29778899"
    },
    {
        "com": "海外环球",
        "no": "haiwaihuanqiu",
        "tel": "010-59790107"
    },
    {
        "com": "三态速递",
        "no": "santaisudi",
        "tel": "400-881-8106  "
    },
    {
        "com": "晋越快递",
        "no": "jinyuekuaidi",
        "tel": "400-638-9288"
    },
    {
        "com": "联邦快递",
        "no": "lianbangkuaidi",
        "tel": "400-889-1888"
    },
    {
        "com": "飞快达",
        "no": "feikuaida",
        "tel": "400-716-6666"
    },
    {
        "com": "全峰快递",
        "no": "quanfengkuaidi",
        "tel": "400-100-0001"
    },
    {
        "com": "如风达",
        "no": "rufengda",
        "tel": "400-010-6660"
    },
    {
        "com": "乐捷递",
        "no": "lejiedi",
        "tel": "400-618-1400"
    },
    {
        "com": "忠信达",
        "no": "zhongxinda",
        "tel": "400-646-6665"
    },
    {
        "com": "芝麻开门",
        "no": "zhimakaimen",
        "tel": "400-105-6056"
    },
    {
        "com": "赛澳递",
        "no": "saiaodi",
        "tel": "4000-345-888"
    },
    {
        "com": "海红网送",
        "no": "haihongwangsong",
        "tel": "400-632-9988"
    },
    {
        "com": "共速达",
        "no": "gongsuda",
        "tel": "400-111-0005"
    },
    {
        "com": "嘉里大通",
        "no": "jialidatong",
        "tel": "400-610-3188"
    },
    {
        "com": "OCS",
        "no": "ocs",
        "tel": "400-118-8588"
    },
    {
        "com": "USPS",
        "no": "usps",
        "tel": "800-275-8777"
    },
    {
        "com": "美国快递",
        "no": "meiguokuaidi",
        "tel": "888-611-1888"
    },
    {
        "com": "成都立即送",
        "no": "lijisong",
        "tel": "400-028-5666"
    },
    {
        "com": "银捷速递",
        "no": "yinjiesudi",
        "tel": "0755-88250666"
    },
    {
        "com": "门对门",
        "no": "menduimen",
        "tel": "400-700-7676"
    },
    {
        "com": "递四方",
        "no": "disifang",
        "tel": "0755-33933895"
    },
    {
        "com": "郑州建华",
        "no": "zhengzhoujianhua",
        "tel": "0371-65995266"
    },
    {
        "com": "河北建华",
        "no": "hebeijianhua",
        "tel": "0311-86123186"
    },
    {
        "com": "微特派",
        "no": "weitepai",
        "tel": "400-6363-000"
    },
    {
        "com": "DHL-德国件（DHL Deutschland）",
        "no": "dhlde",
        "tel": "+49 (0) 180 5 345300"
    },
    {
        "com": "通和天下",
        "no": "tonghetianxia",
        "tel": "400-0056-516 "
    },
    {
        "com": "EMS-国际件",
        "no": "emsguoji",
        "tel": "11183"
    },
    {
        "com": "FedEx-美国件",
        "no": "fedexus",
        "tel": "800-463-3339"
    },
    {
        "com": "风行天下",
        "no": "fengxingtianxia",
        "tel": "4000-404-909"
    },
    {
        "com": "康力物流",
        "no": "kangliwuliu",
        "tel": "400-156-5156 "
    },
    {
        "com": "跨越速递",
        "no": "kuayue",
        "tel": "4008-098-098 "
    },
    {
        "com": "海盟速递",
        "no": "haimengsudi",
        "tel": "400-080-6369 "
    },
    {
        "com": "圣安物流",
        "no": "shenganwuliu",
        "tel": "4006-618-169 "
    },
    {
        "com": "一统飞鸿",
        "no": "yitongfeihong",
        "tel": "61501533-608"
    },
    {
        "com": "中速快递",
        "no": "zhongsukuaidi",
        "tel": "11183"
    },
    {
        "com": "新蛋奥硕",
        "no": "neweggozzo",
        "tel": "400-820-4400"
    },
    {
        "com": "OnTrac",
        "no": "ontrac",
        "tel": "800-334-5000"
    },
    {
        "com": "七天连锁",
        "no": "sevendays",
        "tel": "400-882-1202"
    },
    {
        "com": "明亮物流",
        "no": "mingliangwuliu",
        "tel": "400-035-6568"
    },
    {
        "com": "凡客配送（作废）",
        "no": "vancl",
        "tel": "400-600-6888"
    },
    {
        "com": "华企快运",
        "no": "huaqikuaiyun",
        "tel": "400-806-8111"
    },
    {
        "com": "城市100",
        "no": "city100",
        "tel": "010-52932760 "
    },
    {
        "com": "红马甲物流",
        "no": "sxhongmajia",
        "tel": "0351-5225858"
    },
    {
        "com": "穗佳物流",
        "no": "suijiawuliu",
        "tel": "400-880-9771"
    },
    {
        "com": "飞豹快递",
        "no": "feibaokuaidi",
        "tel": "400-000-5566"
    },
    {
        "com": "传喜物流",
        "no": "chuanxiwuliu",
        "tel": "400-777-5656 "
    },
    {
        "com": "捷特快递",
        "no": "jietekuaidi",
        "tel": "400-820-8585"
    },
    {
        "com": "隆浪快递",
        "no": "longlangkuaidi",
        "tel": "021-31171576 6155201"
    },
    {
        "com": "EMS-英文",
        "no": "emsen",
        "tel": "11183"
    },
    {
        "com": "中天万运",
        "no": "zhongtianwanyun",
        "tel": "400-0056-001"
    },
    {
        "com": "香港(HongKong Post)",
        "no": "hkpost",
        "tel": "(852) 2921 2222"
    },
    {
        "com": "邦送物流",
        "no": "bangsongwuliu",
        "tel": "021-20965696"
    },
    {
        "com": "国通快递",
        "no": "guotongkuaidi",
        "tel": "400-111-1123"
    },
    {
        "com": "澳大利亚(Australia Post)",
        "no": "auspost",
        "tel": "0061-3-88479045"
    },
    {
        "com": "加拿大(Canada Post)",
        "no": "canpost",
        "tel": "416-979-8822"
    },
    {
        "com": "加拿大邮政",
        "no": "canpostfr",
        "tel": null
    },
    {
        "com": "UPS-全球件",
        "no": "upsen",
        "tel": "1-800-742-5877 "
    },
    {
        "com": "TNT-全球件",
        "no": "tnten",
        "tel": null
    },
    {
        "com": "DHL-全球件",
        "no": "dhlen",
        "tel": null
    },
    {
        "com": "顺丰-美国件",
        "no": "shunfengen",
        "tel": "1-855-901-1133"
    },
    {
        "com": "汇强快递",
        "no": "huiqiangkuaidi",
        "tel": null
    },
    {
        "com": "希优特",
        "no": "xiyoutekuaidi",
        "tel": "4008400365"
    },
    {
        "com": "昊盛物流",
        "no": "haoshengwuliu",
        "tel": "400-186-5566"
    },
    {
        "com": "尚橙物流",
        "no": "shangcheng",
        "tel": "400-890-0101"
    },
    {
        "com": "亿领速运",
        "no": "yilingsuyun",
        "tel": "400-1056-400"
    },
    {
        "com": "大洋物流",
        "no": "dayangwuliu",
        "tel": "400-820-0088"
    },
    {
        "com": "递达速运",
        "no": "didasuyun",
        "tel": "400-687-8123"
    },
    {
        "com": "易通达",
        "no": "yitongda",
        "tel": "0898-65339299"
    },
    {
        "com": "邮必佳",
        "no": "youbijia",
        "tel": "400-687-8123"
    },
    {
        "com": "亿顺航",
        "no": "yishunhang",
        "tel": "4006-018-268 "
    },
    {
        "com": "飞狐快递",
        "no": "feihukuaidi",
        "tel": "010-51389299"
    },
    {
        "com": "潇湘晨报",
        "no": "xiaoxiangchenbao",
        "tel": null
    },
    {
        "com": "巴伦支",
        "no": "balunzhi",
        "tel": "400-885-6561"
    },
    {
        "com": "Aramex",
        "no": "aramex",
        "tel": "4006318388"
    },
    {
        "com": "闽盛快递",
        "no": "minshengkuaidi",
        "tel": "0592-3725988"
    },
    {
        "com": "佳惠尔",
        "no": "syjiahuier",
        "tel": "024-23904138"
    },
    {
        "com": "民邦速递",
        "no": "minbangsudi",
        "tel": "0769-81515303"
    },
    {
        "com": "上海快通",
        "no": "shanghaikuaitong",
        "tel": null
    },
    {
        "com": "北青小红帽",
        "no": "xiaohongmao",
        "tel": "010-67756666"
    },
    {
        "com": "GSM",
        "no": "gsm",
        "tel": "021-64656011 "
    },
    {
        "com": "安能物流",
        "no": "annengwuliu",
        "tel": "400-104-0088"
    },
    {
        "com": "KCS",
        "no": "kcs",
        "tel": "800-858-5590"
    },
    {
        "com": "City-Link",
        "no": "citylink",
        "tel": "603-5565 8399"
    },
    {
        "com": "店通快递",
        "no": "diantongkuaidi",
        "tel": "021-20917385 6628285"
    },
    {
        "com": "凡宇快递",
        "no": "fanyukuaidi",
        "tel": "4006-580-358 "
    },
    {
        "com": "平安达腾飞",
        "no": "pingandatengfei",
        "tel": "4006-230-009"
    },
    {
        "com": "广东通路",
        "no": "guangdongtonglu",
        "tel": null
    },
    {
        "com": "中睿速递",
        "no": "zhongruisudi",
        "tel": "400-0375-888"
    },
    {
        "com": "快达物流",
        "no": "kuaidawuliu",
        "tel": null
    },
    {
        "com": "佳吉快递",
        "no": "jiajikuaidi",
        "tel": "400-820-5566"
    },
    {
        "com": "ADP国际快递",
        "no": "adp",
        "tel": "1588-1330"
    },
    {
        "com": "颿达国际快递",
        "no": "fardarww",
        "tel": "0755-27332618"
    },
    {
        "com": "颿达国际快递-英文",
        "no": "fandaguoji",
        "tel": "0755-27332618"
    },
    {
        "com": "林道国际快递",
        "no": "shlindao",
        "tel": "4008-200-112"
    },
    {
        "com": "中外运速递-中文",
        "no": "sinoex",
        "tel": "010-8041 8611"
    },
    {
        "com": "中外运速递",
        "no": "zhongwaiyun",
        "tel": "010-8041 8611"
    },
    {
        "com": "深圳德创物流",
        "no": "dechuangwuliu",
        "tel": "4006-989-833"
    },
    {
        "com": "林道国际快递-英文",
        "no": "ldxpres",
        "tel": "800-820-1470 "
    },
    {
        "com": "瑞典（Sweden Post）",
        "no": "ruidianyouzheng",
        "tel": "+46 8 23 22 20"
    },
    {
        "com": "PostNord(Posten AB)",
        "no": "postenab",
        "tel": "+46 771 33 33 10"
    },
    {
        "com": "偌亚奥国际快递",
        "no": "nuoyaao",
        "tel": "4008 871 871"
    },
    {
        "com": "城际速递",
        "no": "chengjisudi",
        "tel": "4000-523-525 "
    },
    {
        "com": "祥龙运通物流",
        "no": "xianglongyuntong",
        "tel": "4008-908-908"
    },
    {
        "com": "品速心达快递",
        "no": "pinsuxinda",
        "tel": "400-800-3693 "
    },
    {
        "com": "宇鑫物流",
        "no": "yuxinwuliu",
        "tel": "0371-66368798"
    },
    {
        "com": "陪行物流",
        "no": "peixingwuliu",
        "tel": "400-993-0555"
    },
    {
        "com": "户通物流",
        "no": "hutongwuliu",
        "tel": "400-060-1656"
    },
    {
        "com": "西安城联速递",
        "no": "xianchengliansudi",
        "tel": "029-89113508"
    },
    {
        "com": "煜嘉物流",
        "no": "yujiawuliu",
        "tel": null
    },
    {
        "com": "一柒国际物流",
        "no": "yiqiguojiwuliu",
        "tel": "001-(971) 238-9990"
    },
    {
        "com": "Fedex-国际件-中文",
        "no": "fedexcn",
        "tel": "400-889-1888"
    },
    {
        "com": "联邦快递-英文",
        "no": "lianbangkuaidien",
        "tel": "400-889-1888"
    },
    {
        "com": "中通（带电话）",
        "no": "zhongtongphone",
        "tel": null
    },
    {
        "com": "赛澳递for买卖宝",
        "no": "saiaodimmb",
        "tel": null
    },
    {
        "com": "上海无疆for买卖宝",
        "no": "shanghaiwujiangmmb",
        "tel": null
    },
    {
        "com": "新加坡小包(Singapore Post)",
        "no": "singpost",
        "tel": null
    },
    {
        "com": "音素快运",
        "no": "yinsu",
        "tel": "400-007-1118"
    },
    {
        "com": "南方传媒物流",
        "no": "ndwl",
        "tel": null
    },
    {
        "com": "速呈宅配",
        "no": "sucheng",
        "tel": null
    },
    {
        "com": "创一快递",
        "no": "chuangyi",
        "tel": null
    },
    {
        "com": "云南滇驿物流",
        "no": "dianyi",
        "tel": null
    },
    {
        "com": "重庆星程快递",
        "no": "cqxingcheng",
        "tel": null
    },
    {
        "com": "四川星程快递",
        "no": "scxingcheng",
        "tel": null
    },
    {
        "com": "贵州星程快递",
        "no": "gzxingcheng",
        "tel": null
    },
    {
        "com": "运通中港快递(作废)",
        "no": "ytkd",
        "tel": null
    },
    {
        "com": "Gati-英文",
        "no": "gatien",
        "tel": "4000-804-284"
    },
    {
        "com": "Gati-中文",
        "no": "gaticn",
        "tel": "4000-804-284 "
    },
    {
        "com": "jcex",
        "no": "jcex",
        "tel": null
    },
    {
        "com": "派尔快递",
        "no": "peex",
        "tel": null
    },
    {
        "com": "凯信达",
        "no": "kxda",
        "tel": null
    },
    {
        "com": "安达信",
        "no": "advancing",
        "tel": null
    },
    {
        "com": "汇文",
        "no": "huiwen",
        "tel": null
    },
    {
        "com": "亿翔",
        "no": "yxexpress",
        "tel": null
    },
    {
        "com": "东红物流",
        "no": "donghong",
        "tel": "4000-081-556"
    },
    {
        "com": "飞远配送",
        "no": "feiyuanvipshop",
        "tel": "4007-031-313"
    },
    {
        "com": "好运来",
        "no": "hlyex",
        "tel": "020-86293333"
    },
    {
        "com": "Toll",
        "no": "dpexen",
        "tel": null
    },
    {
        "com": "增益速递",
        "no": "zengyisudi",
        "tel": "4008-456-789 "
    },
    {
        "com": "四川快优达速递",
        "no": "kuaiyouda",
        "tel": "4006-068-555"
    },
    {
        "com": "日昱物流",
        "no": "riyuwuliu",
        "tel": "4008-820-800"
    },
    {
        "com": "速通物流",
        "no": "sutongwuliu",
        "tel": null
    },
    {
        "com": "晟邦物流",
        "no": "nanjingshengbang",
        "tel": "400-666-6066"
    },
    {
        "com": "爱尔兰(An Post)",
        "no": "anposten",
        "tel": "01-7057600 "
    },
    {
        "com": "日本（Japan Post）",
        "no": "japanposten",
        "tel": "+81 0570-046111"
    },
    {
        "com": "丹麦(Post Denmark)",
        "no": "postdanmarken",
        "tel": "+45 80 20 70 30 "
    },
    {
        "com": "巴西(Brazil Post/Correios)",
        "no": "brazilposten",
        "tel": "+55 61 3003 0100"
    },
    {
        "com": "荷兰挂号信(PostNL international registered mail)",
        "no": "postnlcn",
        "tel": "+31 20 500 8000"
    },
    {
        "com": "荷兰挂号信(PostNL international registered mail)",
        "no": "postnl",
        "tel": "+31 20 500 8000"
    },
    {
        "com": "乌克兰EMS-中文(EMS Ukraine)",
        "no": "emsukrainecn",
        "tel": "+38 044 234-73-84"
    },
    {
        "com": "乌克兰EMS(EMS Ukraine)",
        "no": "emsukraine",
        "tel": "+38 044 234-73-84"
    },
    {
        "com": "乌克兰邮政包裹",
        "no": "ukrpostcn",
        "tel": null
    },
    {
        "com": "乌克兰小包、大包(UkrPost)",
        "no": "ukrpost",
        "tel": "+380 (0) 800-500-440"
    },
    {
        "com": "海红for买卖宝",
        "no": "haihongmmb",
        "tel": null
    },
    {
        "com": "FedEx-英国件（FedEx UK)",
        "no": "fedexuk",
        "tel": "+ 44 2476 706 660"
    },
    {
        "com": "FedEx-英国件",
        "no": "fedexukcn",
        "tel": "+ 44 2476 706 660"
    },
    {
        "com": "叮咚快递",
        "no": "dingdong",
        "tel": null
    },
    {
        "com": "DPD",
        "no": "dpd",
        "tel": "+31 20 480 2900"
    },
    {
        "com": "UPS Freight",
        "no": "upsfreight",
        "tel": "+1 800-333-7400"
    },
    {
        "com": "ABF",
        "no": "abf",
        "tel": "(479) 785-6486"
    },
    {
        "com": "Purolator",
        "no": "purolator",
        "tel": "-8754"
    },
    {
        "com": "比利时（Bpost）",
        "no": "bpost",
        "tel": "+32 (0)2 278 50 90"
    },
    {
        "com": "比利时国际(Bpost international)",
        "no": "bpostinter",
        "tel": "+32 (0)2 278 50 90"
    },
    {
        "com": "LaserShip",
        "no": "lasership",
        "tel": "+1 (800) 527-3764"
    },
    {
        "com": "英国大包、EMS（Parcel Force）",
        "no": "parcelforce",
        "tel": "08448 00 44 66"
    },
    {
        "com": "英国邮政大包EMS",
        "no": "parcelforcecn",
        "tel": "08448 00 44 66"
    },
    {
        "com": "YODEL",
        "no": "yodel",
        "tel": "+44 800 0152 662"
    },
    {
        "com": "DHL-荷兰（DHL Netherlands）",
        "no": "dhlnetherlands",
        "tel": "+31 26-324 6700"
    },
    {
        "com": "MyHermes",
        "no": "myhermes",
        "tel": "+44 844 543 7000"
    },
    {
        "com": "DPD Germany",
        "no": "dpdgermany",
        "tel": "+49 01806 373 200"
    },
    {
        "com": "Fastway Ireland",
        "no": "fastway",
        "tel": "+353 1 4242 900"
    },
    {
        "com": "法国大包、EMS-法文（Chronopost France）",
        "no": "chronopostfra",
        "tel": "+33 (0) 969 391 391"
    },
    {
        "com": "Selektvracht",
        "no": "selektvracht",
        "tel": "+31 0900-2222120"
    },
    {
        "com": "蓝弧快递",
        "no": "lanhukuaidi",
        "tel": "4000661646"
    },
    {
        "com": "比利时(Belgium Post)",
        "no": "belgiumpost",
        "tel": "+32 2 276 22 74"
    },
    {
        "com": "UPS Mail Innovations",
        "no": "upsmailinno",
        "tel": "+1 800-500-2224"
    },
    {
        "com": "挪威（Posten Norge）",
        "no": "postennorge",
        "tel": "+47 21316260"
    },
    {
        "com": "瑞士邮政",
        "no": "swisspostcn",
        "tel": null
    },
    {
        "com": "瑞士(Swiss Post)",
        "no": "swisspost",
        "tel": "+41 848 888 888"
    },
    {
        "com": "英国邮政小包",
        "no": "royalmailcn",
        "tel": null
    },
    {
        "com": "英国小包（Royal Mail）",
        "no": "royalmail",
        "tel": "+44 1752387112"
    },
    {
        "com": "DHL Benelux",
        "no": "dhlbenelux",
        "tel": "+31 26-324 6700"
    },
    {
        "com": "Nova Poshta",
        "no": "novaposhta",
        "tel": "+7 (0) 800 500 609"
    },
    {
        "com": "DHL-波兰（DHL Poland）",
        "no": "dhlpoland",
        "tel": "+48 42 6 345 345"
    },
    {
        "com": "Estes",
        "no": "estes",
        "tel": "1-866-378-3748"
    },
    {
        "com": "TNT UK",
        "no": "tntuk",
        "tel": "+44 0800 100 600"
    },
    {
        "com": "Deltec Courier",
        "no": "deltec",
        "tel": "+44 (0) 20 8569 6767"
    },
    {
        "com": "OPEK",
        "no": "opek",
        "tel": "+48 22 732 79 99"
    },
    {
        "com": "DPD Poland",
        "no": "dpdpoland",
        "tel": "+48 801 400 373"
    },
    {
        "com": "Italy SDA",
        "no": "italysad",
        "tel": "+39 199 113366"
    },
    {
        "com": "MRW",
        "no": "mrw",
        "tel": "+34 902 300 402"
    },
    {
        "com": "Chronopost Portugal",
        "no": "chronopostport",
        "tel": "+351 707 20 28 28"
    },
    {
        "com": "西班牙(Correos de Espa?a)",
        "no": "correosdees",
        "tel": "+34 902197197"
    },
    {
        "com": "Direct Link",
        "no": "directlink",
        "tel": "+1 (908) 289-0703"
    },
    {
        "com": "ELTA Hellenic Post",
        "no": "eltahell",
        "tel": "+30 801 11 83000"
    },
    {
        "com": "捷克（?eská po?ta）",
        "no": "ceskaposta",
        "tel": "+420 840 111 244"
    },
    {
        "com": "Siodemka",
        "no": "siodemka",
        "tel": "+48 22 777 77 77"
    },
    {
        "com": "International Seur",
        "no": "seur",
        "tel": "+34 93 336 85 85"
    },
    {
        "com": "久易快递",
        "no": "jiuyicn",
        "tel": "021-64206088"
    },
    {
        "com": "克罗地亚（Hrvatska Posta）",
        "no": "hrvatska",
        "tel": "+385 0800 303 304"
    },
    {
        "com": "保加利亚（Bulgarian Posts）",
        "no": "bulgarian",
        "tel": "+3592/949 3280"
    },
    {
        "com": "Portugal Seur",
        "no": "portugalseur",
        "tel": "+351 707 50 10 10"
    },
    {
        "com": "EC-Firstclass",
        "no": "ecfirstclass",
        "tel": "+86 4006 988 223"
    },
    {
        "com": "DTDC India",
        "no": "dtdcindia",
        "tel": "+91 33004444"
    },
    {
        "com": "Safexpress",
        "no": "safexpress",
        "tel": "+91 11 26783281"
    },
    {
        "com": "韩国（Korea Post）",
        "no": "koreapost",
        "tel": "+82 2 2195 1114"
    },
    {
        "com": "TNT Australia",
        "no": "tntau",
        "tel": "+61 13 11 50"
    },
    {
        "com": "泰国（Thailand Thai Post）",
        "no": "thailand",
        "tel": "0 2573 5463"
    },
    {
        "com": "SkyNet Malaysia",
        "no": "skynetmalaysia",
        "tel": "+60 3- 56239090"
    },
    {
        "com": "马来西亚小包（Malaysia Post(Registered)）",
        "no": "malaysiapost",
        "tel": "+603 27279100"
    },
    {
        "com": "马来西亚大包、EMS（Malaysia Post(parcel,EMS)）",
        "no": "malaysiaems",
        "tel": "+603 27279100"
    },
    {
        "com": "京东",
        "no": "jd",
        "tel": "400-603-3600"
    },
    {
        "com": "沙特阿拉伯(Saudi Post)",
        "no": "saudipost",
        "tel": "+966 9200 05700"
    },
    {
        "com": "南非（South African Post Office）",
        "no": "southafrican",
        "tel": "+27 0860 111 502"
    },
    {
        "com": "OCA Argentina",
        "no": "ocaargen",
        "tel": "+34 800-999-7700"
    },
    {
        "com": "尼日利亚(Nigerian Postal)",
        "no": "nigerianpost",
        "tel": "234-09-3149531"
    },
    {
        "com": "智利(Correos Chile)",
        "no": "chile",
        "tel": "+562 600 950 2020"
    },
    {
        "com": "以色列(Israel Post)",
        "no": "israelpost",
        "tel": "+972 2 629 0691"
    },
    {
        "com": "Toll Priority(Toll Online)",
        "no": "tollpriority",
        "tel": "+61 13 15 31"
    },
    {
        "com": "Estafeta",
        "no": "estafeta",
        "tel": "+52 1-800-378-2338"
    },
    {
        "com": "港快速递",
        "no": "gdkd",
        "tel": "400-11-33333"
    },
    {
        "com": "墨西哥（Correos de Mexico）",
        "no": "mexico",
        "tel": "+52 01 800 701 7000"
    },
    {
        "com": "罗马尼亚（Posta Romanian）",
        "no": "romanian",
        "tel": "+40 021 9393 111"
    },
    {
        "com": "TNT Italy",
        "no": "tntitaly",
        "tel": "+39 199 803 868"
    },
    {
        "com": "Mexico Multipack",
        "no": "multipack",
        "tel": "+52 1800 7023200"
    },
    {
        "com": "葡萄牙（Portugal CTT）",
        "no": "portugalctt",
        "tel": "+351 707 26 26 26"
    },
    {
        "com": "Interlink Express",
        "no": "interlink",
        "tel": "+44 8702 200 300"
    },
    {
        "com": "DPD UK",
        "no": "dpduk",
        "tel": "+44 845 9 300 350"
    },
    {
        "com": "华航快递",
        "no": "hzpl",
        "tel": "400-697-0008"
    },
    {
        "com": "Gati-KWE",
        "no": "gatikwe",
        "tel": "+91 1800-180-4284"
    },
    {
        "com": "Red Express",
        "no": "redexpress",
        "tel": "+91 1800-123-2400"
    },
    {
        "com": "Mexico Senda Express",
        "no": "mexicodenda",
        "tel": "+52 1800 833 93 00"
    },
    {
        "com": "TCI XPS",
        "no": "tcixps",
        "tel": "18002000977"
    },
    {
        "com": "高铁速递",
        "no": "hre",
        "tel": "400-999-7777"
    },
    {
        "com": "新加坡EMS、大包(Singapore Speedpost)",
        "no": "speedpost",
        "tel": "+65 6222 5777"
    },
    {
        "com": "EMS-国际件-英文",
        "no": "emsinten",
        "tel": null
    },
    {
        "com": "Asendia USA",
        "no": "asendiausa",
        "tel": "+1 610 461 3661"
    },
    {
        "com": "法国大包、EMS-英文(Chronopost France)",
        "no": "chronopostfren",
        "tel": "+33 (0) 969 391 391"
    },
    {
        "com": "意大利(Poste Italiane)",
        "no": "italiane",
        "tel": "+39 803 160"
    },
    {
        "com": "冠达快递",
        "no": "gda",
        "tel": "400-990-0088"
    },
    {
        "com": "出口易",
        "no": "chukou1",
        "tel": "4006-988-223"
    },
    {
        "com": "黄马甲",
        "no": "huangmajia",
        "tel": "029-96128"
    },
    {
        "com": "新干线快递",
        "no": "anlexpress",
        "tel": null
    },
    {
        "com": "飞洋快递",
        "no": "shipgce",
        "tel": "001-877-387-9799"
    },
    {
        "com": "贝海国际速递",
        "no": "xlobo",
        "tel": "086-400-082-2200"
    },
    {
        "com": "阿联酋(Emirates Post)",
        "no": "emirates",
        "tel": "600-599-999"
    },
    {
        "com": "新顺丰（NSF）",
        "no": "nsf",
        "tel": "0064-9-2818966"
    },
    {
        "com": "巴基斯坦(Pakistan Post)",
        "no": "pakistan",
        "tel": "（+92 51）926 00 37"
    },
    {
        "com": "世运快递",
        "no": "shiyunkuaidi",
        "tel": "400-666-1111"
    },
    {
        "com": "合众速递(UCS）",
        "no": "ucs",
        "tel": "024-31515566"
    },
    {
        "com": "阿富汗(Afghan Post)",
        "no": "afghan",
        "tel": "+93 20 2104075"
    },
    {
        "com": "白俄罗斯(Belpochta)",
        "no": "belpost",
        "tel": "+375 17 293 59 10"
    },
    {
        "com": "全通快运",
        "no": "quantwl",
        "tel": null
    },
    {
        "com": "宅急便",
        "no": "zhaijibian",
        "tel": null
    },
    {
        "com": "EFS Post",
        "no": "efs",
        "tel": "0773-2308246"
    },
    {
        "com": "TNT Post",
        "no": "tntpostcn",
        "tel": "+31（0）900 0570 "
    },
    {
        "com": "英脉物流",
        "no": "gml",
        "tel": "400-880-5088"
    },
    {
        "com": "广通速递",
        "no": "gtongsudi",
        "tel": "400-080-6369"
    },
    {
        "com": "东瀚物流",
        "no": "donghanwl",
        "tel": "400-092-2229"
    },
    {
        "com": "rpx",
        "no": "rpx",
        "tel": null
    },
    {
        "com": "日日顺物流",
        "no": "rrs",
        "tel": "400-800-9999"
    },
    {
        "com": "黑猫雅玛多",
        "no": "yamato",
        "tel": null
    },
    {
        "com": "华通快运",
        "no": "htongexpress",
        "tel": null
    },
    {
        "com": "吉尔吉斯斯坦(Kyrgyz Post)",
        "no": "kyrgyzpost",
        "tel": null
    },
    {
        "com": "拉脱维亚(Latvijas Pasts)",
        "no": "latvia",
        "tel": null
    },
    {
        "com": "黎巴嫩(Liban Post)",
        "no": "libanpost",
        "tel": "+961 1 629628"
    },
    {
        "com": "立陶宛（Lietuvos pa?tas）",
        "no": "lithuania",
        "tel": "+370 700 55 400"
    },
    {
        "com": "马尔代夫(Maldives Post)",
        "no": "maldives",
        "tel": "+960 331 5555"
    },
    {
        "com": "马耳他（Malta Post）",
        "no": "malta",
        "tel": "800 7 22 44"
    },
    {
        "com": "马其顿(Macedonian Post)",
        "no": "macedonia",
        "tel": null
    },
    {
        "com": "新西兰（New Zealand Post）",
        "no": "newzealand",
        "tel": null
    },
    {
        "com": "摩尔多瓦(Posta Moldovei)",
        "no": "moldova",
        "tel": "+373 - 22 270 044"
    },
    {
        "com": "孟加拉国(EMS)",
        "no": "bangladesh",
        "tel": "9558006"
    },
    {
        "com": "塞尔维亚(PE Post of Serbia)",
        "no": "serbia",
        "tel": "0700 100 300"
    },
    {
        "com": "塞浦路斯(Cyprus Post)",
        "no": "cypruspost",
        "tel": "77778013"
    },
    {
        "com": "突尼斯EMS(Rapid-Poste)",
        "no": "tunisia",
        "tel": " (+216) 71 888 888 "
    },
    {
        "com": "乌兹别克斯坦(Post of Uzbekistan)",
        "no": "uzbekistan",
        "tel": "(99871) 233 57 47"
    },
    {
        "com": "新喀里多尼亚[法国](New Caledonia)",
        "no": "caledonia",
        "tel": null
    },
    {
        "com": "叙利亚(Syrian Post)",
        "no": "republic",
        "tel": null
    },
    {
        "com": "亚美尼亚(Haypost-Armenian Postal)",
        "no": "haypost",
        "tel": null
    },
    {
        "com": "也门(Yemen Post)",
        "no": "yemen",
        "tel": null
    },
    {
        "com": "印度(India Post)",
        "no": "india",
        "tel": "1800-11-2011"
    },
    {
        "com": "英国(大包,EMS)",
        "no": "england",
        "tel": null
    },
    {
        "com": "约旦(Jordan Post)",
        "no": "jordan",
        "tel": "-4292044"
    },
    {
        "com": "越南小包(Vietnam Posts)",
        "no": "vietnam",
        "tel": "(+84) 1900 54 54 81"
    },
    {
        "com": "黑山(Po?ta Crne Gore)",
        "no": "montenegro",
        "tel": null
    },
    {
        "com": "哥斯达黎加(Correos de Costa Rica)",
        "no": "correos",
        "tel": null
    },
    {
        "com": "西安喜来快递",
        "no": "xilaikd",
        "tel": null
    },
    {
        "com": "格陵兰[丹麦]（TELE Greenland A/S）",
        "no": "greenland",
        "tel": null
    },
    {
        "com": "菲律宾（Philippine Postal）",
        "no": "phlpost",
        "tel": null
    },
    {
        "com": "厄瓜多尔(Correos del Ecuador)",
        "no": "ecuador",
        "tel": "(593-2) 3829210"
    },
    {
        "com": "冰岛(Iceland Post)",
        "no": "iceland",
        "tel": null
    },
    {
        "com": "波兰小包(Poczta Polska)",
        "no": "emonitoring",
        "tel": "801 333 444"
    },
    {
        "com": "阿尔巴尼亚(Posta shqipatre)",
        "no": "albania",
        "tel": null
    },
    {
        "com": "阿鲁巴[荷兰]（Post Aruba）",
        "no": "aruba",
        "tel": "+297 528-7637 "
    },
    {
        "com": "埃及（Egypt Post）",
        "no": "egypt",
        "tel": "23910011"
    },
    {
        "com": "爱尔兰(An Post)",
        "no": "ireland",
        "tel": "+353 1850 57 58 59"
    },
    {
        "com": "爱沙尼亚(Eesti Post)",
        "no": "omniva",
        "tel": null
    },
    {
        "com": "云豹国际货运",
        "no": "leopard",
        "tel": null
    },
    {
        "com": "中外运空运",
        "no": "sinoairinex",
        "tel": null
    },
    {
        "com": "上海昊宏国际货物",
        "no": "hyk",
        "tel": null
    },
    {
        "com": "城晓国际快递",
        "no": "ckeex",
        "tel": null
    },
    {
        "com": "匈牙利（Magyar Posta）",
        "no": "hungary",
        "tel": "+36 1 421 7296 Searc"
    },
    {
        "com": "澳门(Macau Post)",
        "no": "macao",
        "tel": null
    },
    {
        "com": "台湾（中华邮政）",
        "no": "postserv",
        "tel": null
    },
    {
        "com": "北京EMS",
        "no": "bjemstckj",
        "tel": "010-8417 9386"
    },
    {
        "com": "快淘快递",
        "no": "kuaitao",
        "tel": "400-770-3370"
    },
    {
        "com": "秘鲁(SERPOST)",
        "no": "peru",
        "tel": "511-500"
    },
    {
        "com": "印度尼西亚EMS(Pos Indonesia-EMS)",
        "no": "indonesia",
        "tel": "+62 21 161"
    },
    {
        "com": "哈萨克斯坦(Kazpost)",
        "no": "kazpost",
        "tel": "8 800 080 08 80"
    },
    {
        "com": "立白宝凯物流",
        "no": "lbbk",
        "tel": "020-81258022"
    },
    {
        "com": "百千诚物流",
        "no": "bqcwl",
        "tel": "0755-2222 2232"
    },
    {
        "com": "皇家物流",
        "no": "pfcexpress",
        "tel": "0755-29801942"
    },
    {
        "com": "法国(La Poste)",
        "no": "csuivi",
        "tel": "+33 3631"
    },
    {
        "com": "奥地利(Austrian Post)",
        "no": "austria",
        "tel": "+43 810 010 100"
    },
    {
        "com": "乌克兰小包、大包(UkrPoshta)",
        "no": "ukraine",
        "tel": "+380 (0) 800-500-440"
    },
    {
        "com": "乌干达(Posta Uganda)",
        "no": "uganda",
        "tel": null
    },
    {
        "com": "阿塞拜疆EMS(EMS AzerExpressPost)",
        "no": "azerbaijan",
        "tel": null
    },
    {
        "com": "芬兰(Itella Posti Oy)",
        "no": "finland",
        "tel": "+358 200 71000"
    },
    {
        "com": "斯洛伐克(Slovenská Posta)",
        "no": "slovak",
        "tel": " (+421) 48 437 87 77"
    },
    {
        "com": "埃塞俄比亚(Ethiopian postal)",
        "no": "ethiopia",
        "tel": null
    },
    {
        "com": "卢森堡(Luxembourg Post)",
        "no": "luxembourg",
        "tel": "8002 8004 "
    },
    {
        "com": "毛里求斯(Mauritius Post)",
        "no": "mauritius",
        "tel": "208 2851"
    },
    {
        "com": "文莱(Brunei Postal)",
        "no": "brunei",
        "tel": "673-2382888 "
    },
    {
        "com": "Quantium",
        "no": "quantium",
        "tel": null
    },
    {
        "com": "坦桑尼亚(Tanzania Posts)",
        "no": "tanzania",
        "tel": null
    },
    {
        "com": "阿曼(Oman Post)",
        "no": "oman",
        "tel": "24769925"
    },
    {
        "com": "直布罗陀[英国]( Royal Gibraltar Post)",
        "no": "gibraltar",
        "tel": null
    },
    {
        "com": "博源恒通",
        "no": "byht",
        "tel": "15834177000"
    },
    {
        "com": "越南EMS(VNPost Express)",
        "no": "vnpost",
        "tel": null
    },
    {
        "com": "安迅物流",
        "no": "anxl",
        "tel": "010-59288730"
    },
    {
        "com": "达方物流",
        "no": "dfpost",
        "tel": "400 700 7049"
    },
    {
        "com": "兰州伙伴物流",
        "no": "huoban",
        "tel": "0931-5345730/32"
    },
    {
        "com": "天纵物流",
        "no": "tianzong",
        "tel": "400-990-8816"
    },
    {
        "com": "波黑(JP BH Posta)",
        "no": "bohei",
        "tel": null
    },
    {
        "com": "玻利维亚",
        "no": "bolivia",
        "tel": null
    },
    {
        "com": "柬埔寨(Cambodia Post)",
        "no": "cambodia",
        "tel": null
    },
    {
        "com": "巴林(Bahrain Post)",
        "no": "bahrain",
        "tel": null
    },
    {
        "com": "纳米比亚(NamPost)",
        "no": "namibia",
        "tel": "+264 61 201 3042"
    },
    {
        "com": "卢旺达(Rwanda i-posita)",
        "no": "rwanda",
        "tel": null
    },
    {
        "com": "莱索托(Lesotho Post)",
        "no": "lesotho",
        "tel": null
    },
    {
        "com": "肯尼亚(POSTA KENYA)",
        "no": "kenya",
        "tel": null
    },
    {
        "com": "喀麦隆(CAMPOST)",
        "no": "cameroon",
        "tel": null
    },
    {
        "com": "伯利兹(Belize Postal)",
        "no": "belize",
        "tel": null
    },
    {
        "com": "巴拉圭(Correo Paraguayo)",
        "no": "paraguay",
        "tel": null
    },
    {
        "com": "十方通物流",
        "no": "sfift",
        "tel": null
    },
    {
        "com": "飞鹰物流",
        "no": "hnfy",
        "tel": "400-6291-666"
    },
    {
        "com": "UPS i-parcle",
        "no": "iparcel",
        "tel": null
    },
    {
        "com": "鑫锐达",
        "no": "bjxsrd",
        "tel": null
    },
    {
        "com": "麦力快递",
        "no": "mailikuaidi",
        "tel": "400-0000-900"
    },
    {
        "com": "瑞丰速递",
        "no": "rfsd",
        "tel": "400-626-1667"
    },
    {
        "com": "美联快递",
        "no": "letseml",
        "tel": null
    },
    {
        "com": "CNPEX中邮快递",
        "no": "cnpex",
        "tel": null
    },
    {
        "com": "鑫世锐达",
        "no": "xsrd",
        "tel": null
    },
    {
        "com": "同舟行物流",
        "no": "chinatzx",
        "tel": "18062512813/18062699"
    },
    {
        "com": "秦邦快运",
        "no": "qbexpress",
        "tel": null
    },
    {
        "com": "大达物流",
        "no": "idada",
        "tel": "400-098-5656"
    },
    {
        "com": "skynet",
        "no": "skynet",
        "tel": null
    },
    {
        "com": "红马速递",
        "no": "nedahm",
        "tel": null
    },
    {
        "com": "云南中诚",
        "no": "czwlyn",
        "tel": null
    },
    {
        "com": "万博快递",
        "no": "wanboex",
        "tel": null
    },
    {
        "com": "腾达速递",
        "no": "nntengda",
        "tel": null
    },
    {
        "com": "郑州速捷",
        "no": "sujievip",
        "tel": null
    },
    {
        "com": "UBI Australia",
        "no": "gotoubi",
        "tel": null
    },
    {
        "com": "ECMS Express",
        "no": "ecmsglobal",
        "tel": null
    },
    {
        "com": "速派快递(FastGo)",
        "no": "fastgo",
        "tel": "400 886 3278 "
    },
    {
        "com": "易客满",
        "no": "ecmscn",
        "tel": "86+(400) 086-1756"
    },
    {
        "com": "俄顺达",
        "no": "eshunda",
        "tel": "0592-5798079"
    },
    {
        "com": "广东速腾物流",
        "no": "suteng",
        "tel": "4001136666"
    },
    {
        "com": "新鹏快递",
        "no": "gdxp",
        "tel": null
    },
    {
        "com": "美国韵达",
        "no": "yundaexus",
        "tel": "888-408-3332"
    },
    {
        "com": "Toll",
        "no": "toll",
        "tel": null
    },
    {
        "com": "深圳DPEX",
        "no": "szdpex",
        "tel": null
    },
    {
        "com": "百世物流",
        "no": "baishiwuliu",
        "tel": "400-8856-561"
    },
    {
        "com": "荷兰包裹(PostNL International Parcels)",
        "no": "postnlpacle",
        "tel": null
    },
    {
        "com": "乐天速递",
        "no": "ltexp",
        "tel": "021-62269059 "
    },
    {
        "com": "智通物流",
        "no": "ztong",
        "tel": "4000561818"
    },
    {
        "com": "鑫通宝物流",
        "no": "xtb",
        "tel": "13834168880"
    },
    {
        "com": "airpak expresss",
        "no": "airpak",
        "tel": null
    },
    {
        "com": "荷兰邮政-中国件",
        "no": "postnlchina",
        "tel": null
    },
    {
        "com": "法国小包（colissimo）",
        "no": "colissimo",
        "tel": "+33 3631"
    },
    {
        "com": "PCA Express",
        "no": "pcaexpress",
        "tel": null
    },
    {
        "com": "韩润",
        "no": "hanrun",
        "tel": null
    },
    {
        "com": "TNT",
        "no": "tnt",
        "tel": "800-820-9868,400-820"
    },
    {
        "com": "中远e环球",
        "no": "cosco",
        "tel": null
    },
    {
        "com": "顺达快递",
        "no": "sundarexpress",
        "tel": null
    },
    {
        "com": "捷记方舟",
        "no": "ajexpress",
        "tel": null
    },
    {
        "com": "方舟速递",
        "no": "arkexpress",
        "tel": null
    },
    {
        "com": "明大快递",
        "no": "adaexpress",
        "tel": null
    },
    {
        "com": "长江国际速递",
        "no": "changjiang",
        "tel": null
    },
    {
        "com": "八达通",
        "no": "bdatong",
        "tel": null
    },
    {
        "com": "美国申通",
        "no": "stoexpress",
        "tel": null
    },
    {
        "com": "泛捷国际速递",
        "no": "epanex",
        "tel": null
    },
    {
        "com": "顺捷丰达",
        "no": "shunjiefengda",
        "tel": "0755—88999000"
    },
    {
        "com": "华赫物流",
        "no": "nmhuahe",
        "tel": null
    },
    {
        "com": "德国(Deutsche Post)",
        "no": "deutschepost",
        "tel": null
    }];

	var initHandler = function(){
		for (var i = 0; i<wuliulist.length; i++) {
			var option="<option value='"+wuliulist[i].com+"'>";
			option+=wuliulist[i].com;
			option+="</option>";
			$('#wuliu').append(option);
		}
        var deliveryCorp=$('#deliveryCorp').val();
        if(deliveryCorp){
            $('#wuliu').children().each(function(){
                if($(this).val()==deliveryCorp){
                    $(this).attr('selected',true);
                }
            })
        }
	};

    //发货的操作
    var shippingHander =function(){
        $('.portlet-body').on('click','a.btn-danger',function(){
            //console.log('fwdgie')
            var deliveryCorp=$('#wuliu').val();
            var deliveryCode="";
            var deliveryCorpUrl="";
            for(var i=0; i<wuliulist.length; i++){
                if(wuliulist[i].com==deliveryCorp){
                    deliveryCode=wuliulist[i].no;
                    deliveryCorpUrl=wuliulist[i].url
                }
            }
            $('#deliveryCorp').val(deliveryCorp);
            $('#deliveryCode').val(deliveryCode);
            $('#deliveryCorpUrl').val(deliveryCorpUrl);
            $("#shippingForm").ajaxSubmit({
                dataType:'json',
                success:function(json){
                    if(json.type=="success"){
                        location.reload(true);
                    }else{
                        Beyond.alert("error","发货失败");
                    }
                }
            })
        });
        
    };

    //退货的操作函数
    var returnsHandler = function(){
        $('.portlet-body').on('click','a.btn-warning',function(){
            var id=$(this).data('id');
            $.ajax({
                type:"post",
                url:'returns.jhtml',
                dataType:"json",
                data:{id:id},
                success:function(json){
                    if(json.type=="success"){
                        Beyond.alert('success',"退货成功");
                        setTimeout(function(){
                            location.reload(true);
                        },300);
                    }else{
                        Beyond.alert("error",'退货失败');
                    }
                }
            })
        })
    };

    //查询物流信息
    var seachHandler=function(){
        $form=$('#findform');
        if($form){
            $form.ajaxSubmit({
                dataType:"json",
                success:function(json){
                    if(json.type=="success"){
                        var content = json.content;
                        var html="<table class='table table-striped table-bordered table-hover dataTable no-footer' style='margin-top: 10px;'>"
                        for(var i=0; i<content.length; i++){
                            html+="<tr><td>"+content[i].time;
                            html+="</td><td>"+content[i].context;
                            html+="</td></tr>";
                        }
                        html+="</table>";
                        $('#portlet_tab3').append(html);
                    }
                }
            })
        }
    }

    //修改物理信息的函数
    var editshippingHandler=function(){
        $('.portlet-body').on('click','a.btn-primary',function(){
            if($('#wuliu').attr('disabled')){
                $('#wuliu,#trackingNo').removeAttr('disabled');
                $(this).html('<i class="glyphicon glyphicon-save" style="margin-right:5px;"></i>保存');
                return;
            }
            var deliveryCorp=$('#wuliu').val();
            var deliveryCode="";
            var deliveryCorpUrl="";
            for(var i=0; i<wuliulist.length; i++){
                if(wuliulist[i].com==deliveryCorp){
                    deliveryCode=wuliulist[i].no;
                    deliveryCorpUrl=wuliulist[i].url
                }
            }
            $('#deliveryCorp').val(deliveryCorp);
            $('#deliveryCode').val(deliveryCode);
            $('#deliveryCorpUrl').val(deliveryCorpUrl);
            $form=$('#shipModifyform');
            $form.ajaxSubmit({
                dataType:'json',
                success:function(json){
                    if(json.type=='success'){
                        Beyond.alert("success","修改物理信息成功");
                        setTimeout(function(){
                            location.reload(true);
                        },800);
                        return;
                    }
                    Beyond.alert('error','修改物理信息失败');
                }
            })
        })
    }

 //退款的操作函数
    var refundsHandler = function(){
        $('.portlet-body').on('click','a.btn-purple',function(){
            var id=$(this).data('id');
            $.ajax({
                type:"post",
                url:'refunds.jhtml',
                dataType:"json",
                data:{id:id},
                success:function(json){
                    if(json.type=="success"){
                        Beyond.alert('success',"退款成功");
                        setTimeout(function(){
                            location.reload(true);
                        },300);
                    }else{
                        Beyond.alert("error",'退款失败');
                    }
                }
            })
        })
    };

    //修改价格的操作
    var editHandler=function(){
        $('.portlet-body').on('click','a.blue',function(){
            if($('#amount').attr('disabled')){
                $('#amount,#frieght').removeAttr('disabled');
                $(this).html("<i class='fa fa-check' style='margin-right:5px'></i>保存修改")
                return;
            }
            $('#updateform').ajaxSubmit({
                dataType:'json',
                success:function(json){
                    if(json.type=="success"){
                        Beyond.alert('success','修改成功');
                        setTimeout(function(){
                            location.reload(true);
                        },300);
                    }
                }
            })
        })
    }
	return {
		init:function(){
            $('form').submit(function(){
                return false;
            })
			initHandler();
            shippingHander();
            returnsHandler();
            refundsHandler();
            seachHandler();
            editHandler();
            editshippingHandler();
		}
	}
}();
Shipping.init();
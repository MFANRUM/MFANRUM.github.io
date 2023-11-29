import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c,a as e,b as t,d as a,e as o}from"./app-4376381a.js";const d={},l=o('<p>从 XP 时代开始，我幻想用语音转文字。后来，手机提前实现了这功能，电脑端的语音录入却一直没进展。</p><p>为了能在 PC 上用语音打字，我从 2013 折腾到 2022，经历了各种硬件和软件，终于找到最适合 PC 端的语音输入方案。</p><h2 id="讯飞-小麦克风" tabindex="-1"><a class="header-anchor" href="#讯飞-小麦克风" aria-hidden="true">#</a> 讯飞 + 小麦克风</h2><p>2013 年，讯飞推出 PC 版输入法。我以为 PC 语音输入的时代已经来临，买了个十几块的小麦克风，尝试语音转文字。</p><p>可测试结果却让人大跌眼镜，语音识别准确率异常的低。即便我把麦放在嘴边，依然无法录清楚，超过 80% 内容识别错误。</p><p>过低的识别率，让我怀疑是麦克风的收音出了问题，要想语音打字就需要换个好点的话筒。但囊中羞涩，只能暂停尝试。</p><h2 id="讯飞-blue-yeti" tabindex="-1"><a class="header-anchor" href="#讯飞-blue-yeti" aria-hidden="true">#</a> 讯飞 + Blue Yeti</h2><p>过了几年，经济宽裕点后，下单网红录音话筒 Blue Yeti，幻想着 4 位数的话筒能带来完美的收音识别效果。</p><figure><img src="https://img.newzone.top/20181228052211.png?imageMogr2/thumbnail/400x" alt="Blue Yeti" tabindex="0" loading="lazy"><figcaption>Blue Yeti</figcaption></figure><p>但事实却是<strong>再度被打击</strong>。</p><p>对 Blue Yeti 的收音测试中，再次发现大量杂音，收货当天就直接退货。</p><p>十几元的麦克风和一千元的话筒收音效果差不多，语音输入的识别率也都超低。这让我猜测，语音输入识别率低与硬件无关，而是 PC 端的语音输入方案尚未成熟，是软件方面导致的问题。</p><p>就这样，我再次暂停了 PC 上的语音输入尝试。</p><h2 id="外置声卡-动圈话筒" tabindex="-1"><a class="header-anchor" href="#外置声卡-动圈话筒" aria-hidden="true">#</a> 外置声卡 + 动圈话筒</h2><p>之后，用了 5 年的音箱出现问题，我升级了音响，并顺势添置了外置声卡，视听体验大幅提升。玩着玩着，突然想起我的语音输入梦，决定再尝试一次。</p><p>有了外置声卡，麦克风的选择多了许多，可以连接卡侬线接口的话筒了。</p><p>麦克风分为两类：电容麦、动圈麦。</p><p>电容麦收音好，但比较娇贵，怕潮怕摔，不能用桌面话筒架，适合用悬臂挂在空中，每次用完之后需要收起来。动圈麦的灵敏度和还原度都低于电容麦，存放和使用没什么要求，费用也会低些。</p><p>电容麦克风太麻烦，就选了简单的动圈麦 - 舒伯乐 PRO248S。</p><p>选好话筒后，又配了麦克风支架和卡侬线，连上原本的外置声卡，搞定语音输出的硬件配置。</p><figure><img src="https://img.newzone.top/2022-05-25-18-02-54.jpg?imageMogr2/thumbnail/500x" alt="收音设备" tabindex="0" loading="lazy"><figcaption>收音设备</figcaption></figure><h2 id="输入法之争" tabindex="-1"><a class="header-anchor" href="#输入法之争" aria-hidden="true">#</a> 输入法之争</h2><p>音频硬件搞定后，开始折腾语音输入法。</p><p>虽然讯飞在语音输入领域的牌子最响，但是讯飞 PC 输入法并不受重视，长年不更新。所以，我尝试了其他输入法的语音功能。测试中，搜狗的语音识别功能并不比讯飞弱，缺点也只有无法设置语音输入快捷键，整体体验上佳。于是，语音输入法切换成了搜狗。</p><p>然而，有次备份系统设置，我发现搜狗词库高达 27 万条，其中 99% 的内容是垃圾词条，即使偶尔输入过一次的内容也被输入法记录。更可怕的是，这次词库无法从云端删除，<strong>只要你输入过一次，搜狗就永远记住了</strong>。</p><p>这哪里是输入法，根本是<strong>键盘记录器</strong>。</p><p>国内其他输入法在这点上也都半斤八两，为了不被键盘记录器惦记，我只能切换为开源的小狼毫输入法。</p>',27),s={href:"https://github.com/HaujetZhao/QuickCut",target:"_blank",rel:"noopener noreferrer"},h=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-05-25-18-08-06.png?imageMogr2/thumbnail/500x",alt:"Quick Cut 界面",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Quick Cut 界面")],-1),u=e("p",null,"Quick Cut 的缺点：语音输入时，要一直按大写键，不适合长语音录入；触发键无法更改，大写键与我的常用脚本冲突了。因此，长时间的语音输入只能借助手机上的飞书妙记来完成转录。",-1),g=e("h2",{id:"最终方案-微软语音输入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最终方案-微软语音输入","aria-hidden":"true"},"#"),t(" 最终方案：微软语音输入")],-1),f={href:"https://support.microsoft.com/zh-cn/windows/%E4%BD%BF%E7%94%A8%E8%AF%AD%E9%9F%B3%E9%94%AE%E5%85%A5%E6%9D%A5%E8%AF%B4%E8%AF%9D-%E8%80%8C%E4%B8%8D%E6%98%AF%E5%9C%A8%E7%94%B5%E8%84%91%E4%B8%8A%E9%94%AE%E5%85%A5-fec94565-c4bd-329d-e59a-af033fa5689f",target:"_blank",rel:"noopener noreferrer"},_=o('<blockquote><p>微软自带的语音输入，快捷键 Win + H。3 块钱的麦克风，距离 50 厘米，很低的声音读出来了。</p></blockquote><p>测试后，发现微软语音输入确实是好用，甚至好用到有点恐怖。测试中，我临时有事，走到另外一个房间和家人说话，回来后发现刚刚的对话也被微软语音输入正确识别。</p><figure><img src="https://img.newzone.top/2022-05-25-18-13-17.png?imageMogr2/format/webp" alt="微软语音输入" tabindex="0" loading="lazy"><figcaption>微软语音输入</figcaption></figure><p>微软语音输入非常敏感，距离远、声音低也能识别。这样我不用为语音输入而特意移动话筒，可以继续把话筒放在不遮挡视野的远角。</p><p>「语音键入功能在此应用上受限制」在 Notepad++ 和微信都出现了，Visual Studio Code 没出现，但实际上这提示对语音输入并没造成影响，平常可以忽略这个提示。</p><p>虽然微软语音输入的识别率只有 85%，不如阿里云方案的 95%，可系统自带的优势太明显，微软语音输入体验感非常顺滑。</p><p>启动快捷键 <code>Win + H</code>，语音识别立即会启动。如果中途没说话，应用会自动暂停，并对前面的输入进行整理，插入合适的标点符号。停止超过一分钟，语音识别才会暂停，等待再次启动。换言之，微软语音输入能一键完成长语音录入。</p><p>之前的麦克风放着放着就坏了，所以我没测 @李乐 说的低价麦克风的语音输入效果。不过，微软输入的软件优化非常好，按照目前效果推测，用便宜的麦克风也能实现完美的收音效果。综合来说，微软语音输入是当前最完美也是兼容性最高的语音输入方案。</p><h2 id="总结与展望" tabindex="-1"><a class="header-anchor" href="#总结与展望" aria-hidden="true">#</a> 总结与展望</h2><p>语音输入的 3 种方案：</p><ul><li>文章输入：<code>微软语音输入 + 外置声卡 + 动圈话筒</code>，兼容性最高，使用方便，但精度一般，用于文章草稿阶段。</li><li>一句话输入：<code>Quick Cut + 外置声卡 + 动圈话筒</code>，一句话识别精度最高，适合聊天时使用。</li><li>语音转录：<code>飞书妙记 + 手机</code>，录音转文字，长语音的识别率超高。</li></ul><p>与 2018 年相比，2022 年的语音输入方案已经完善了许多。硬件已经不再是问题了，便宜的话筒也能达到语音输入标准。语音识别进步明显，在 AI 技术的加持下，短句识别率从 90% 上升到 95%，长句识别率则从 50% 上升到 70%，标点符号均能正确插入。</p><p>目前语音输入算法在提升最后 10% 的准确率，期待早日达到「口述与键盘输入完全一致」的一天。</p>',13);function m(b,E){const i=p("ExternalLinkIcon");return r(),c("div",null,[l,e("p",null,[t("语音输入则转用开源的 "),e("a",s,[t("Quick Cut"),a(i)]),t("，使用阿里云、腾讯云的商用语音接口，识别率比免费的搜狗和讯飞都高。")]),h,u,g,e("p",null,[t("面对 Quick Cut 的长语音输入难题时，@李乐 推荐了微软语音输入-"),e("a",f,[t("使用语音键入来说话，而不是在电脑上键入"),a(i)]),t("。")]),_])}const k=n(d,[["render",m],["__file","2018-12-28-voice_input_try.html.vue"]]);export{k as default};

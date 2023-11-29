const e=JSON.parse('{"key":"v-1ed447e6","path":"/posts/2020-10-25-dpc_watchdog_violation.html","title":"100% 蓝屏解决方案：以 DPC_WATCHDOG_VIOLATION 为例","lang":"zh-CN","frontmatter":{"title":"100% 蓝屏解决方案：以 DPC_WATCHDOG_VIOLATION 为例","date":"2020-10-25T00:00:00.000Z","category":["系统"],"tag":["蓝屏"],"star":true,"order":-30,"description":"Windows 蓝屏的原因众多，你在网上搜到的解决方案，大多与你的情况不同，无法解决实际问题。但是，如果你找到并分析电脑上的 dmp 蓝屏日志，就会发现 Windows 已经给出了你的蓝屏原因。比如 DPC_WATCHDOG_VIOLATION 蓝屏，大多是由于硬件驱动出现问题造成的。你可以通过回退、更新或卸载驱动来修复蓝屏。接下来，我将具体介绍如何导出蓝屏日志、分析并解决蓝屏原因。 导出蓝屏日志 安装 WinDbg Preview，这是微软官方推出的系统调试工具。 启动 WinDbg Preview，软件会自动检测到最新的蓝屏日志，点击 Yes 即可载入。如果想分析其他文件，可以打开文件夹 C:\\\\Windows\\\\Minidump，导出日志 *.dmp。 载入日志过程中，WinDbg Preview 会自动下载所需文件，无需额外操作。载入完成后，点击 !analyze -v，分析具体日志。 分析日志：日志前半部分可以忽略，蓝屏原因多在日志末尾几行。通过分析末尾日志，可以找出引发蓝屏的进程。注意不要强制删除未知文件。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2020-10-25-dpc_watchdog_violation.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"100% 蓝屏解决方案：以 DPC_WATCHDOG_VIOLATION 为例"}],["meta",{"property":"og:description","content":"Windows 蓝屏的原因众多，你在网上搜到的解决方案，大多与你的情况不同，无法解决实际问题。但是，如果你找到并分析电脑上的 dmp 蓝屏日志，就会发现 Windows 已经给出了你的蓝屏原因。比如 DPC_WATCHDOG_VIOLATION 蓝屏，大多是由于硬件驱动出现问题造成的。你可以通过回退、更新或卸载驱动来修复蓝屏。接下来，我将具体介绍如何导出蓝屏日志、分析并解决蓝屏原因。 导出蓝屏日志 安装 WinDbg Preview，这是微软官方推出的系统调试工具。 启动 WinDbg Preview，软件会自动检测到最新的蓝屏日志，点击 Yes 即可载入。如果想分析其他文件，可以打开文件夹 C:\\\\Windows\\\\Minidump，导出日志 *.dmp。 载入日志过程中，WinDbg Preview 会自动下载所需文件，无需额外操作。载入完成后，点击 !analyze -v，分析具体日志。 分析日志：日志前半部分可以忽略，蓝屏原因多在日志末尾几行。通过分析末尾日志，可以找出引发蓝屏的进程。注意不要强制删除未知文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T06:40:58.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"蓝屏"}],["meta",{"property":"article:published_time","content":"2020-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-29T06:40:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"100% 蓝屏解决方案：以 DPC_WATCHDOG_VIOLATION 为例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-29T06:40:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"导出蓝屏日志","slug":"导出蓝屏日志","link":"#导出蓝屏日志","children":[]},{"level":2,"title":"上传社区分析","slug":"上传社区分析","link":"#上传社区分析","children":[]},{"level":2,"title":"蓝屏解决方案","slug":"蓝屏解决方案","link":"#蓝屏解决方案","children":[{"level":3,"title":"系统模块报错","slug":"系统模块报错","link":"#系统模块报错","children":[]},{"level":3,"title":"驱动冲突","slug":"驱动冲突","link":"#驱动冲突","children":[]},{"level":3,"title":"未知程序","slug":"未知程序","link":"#未知程序","children":[]}]},{"level":2,"title":"蓝屏解决集锦","slug":"蓝屏解决集锦","link":"#蓝屏解决集锦","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"装不了 WinDbg","slug":"装不了-windbg","link":"#装不了-windbg","children":[]},{"level":3,"title":"分析日志时报错","slug":"分析日志时报错","link":"#分析日志时报错","children":[]},{"level":3,"title":"找不到 minidump 文件","slug":"找不到-minidump-文件","link":"#找不到-minidump-文件","children":[]}]}],"git":{"createdTime":1701240058000,"updatedTime":1701240058000,"contributors":[{"name":"MFANRUM","email":"34179178+MFANRUM@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1643},"filePathRelative":"_posts/2020-10-25-dpc_watchdog_violation.md","localizedDate":"2020年10月25日","excerpt":"<p>Windows 蓝屏的原因众多，你在网上搜到的解决方案，大多与你的情况不同，无法解决实际问题。但是，如果你找到并分析电脑上的 dmp 蓝屏日志，就会发现 Windows 已经给出了你的蓝屏原因。比如 DPC_WATCHDOG_VIOLATION 蓝屏，大多是由于硬件驱动出现问题造成的。你可以通过回退、更新或卸载驱动来修复蓝屏。接下来，我将具体介绍如何导出蓝屏日志、分析并解决蓝屏原因。</p>\\n<h2> 导出蓝屏日志</h2>\\n<ol>\\n<li>\\n<p>安装 <a href=\\"https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&amp;activetab=pivot:overviewtab\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WinDbg Preview</a>，这是微软官方推出的系统调试工具。</p>\\n</li>\\n<li>\\n<p>启动 WinDbg Preview，软件会自动检测到最新的蓝屏日志，点击 Yes 即可载入。如果想分析其他文件，可以打开文件夹 <code>C:\\\\Windows\\\\Minidump</code>，导出日志 <code>*.dmp</code>。</p>\\n</li>\\n<li>\\n<p>载入日志过程中，WinDbg Preview 会自动下载所需文件，无需额外操作。载入完成后，点击 <code>!analyze -v</code>，分析具体日志。</p>\\n<figure><img src=\\"https://img.newzone.top/20201025223307.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>分析日志：日志前半部分可以忽略，蓝屏原因多在日志末尾几行。通过分析末尾日志，可以找出引发蓝屏的进程。注意不要强制删除未知文件。</p>\\n<figure><img src=\\"https://img.newzone.top/20201025224308.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};

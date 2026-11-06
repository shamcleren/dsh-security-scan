window.__ModuleLoader__.load({
	id: "@shamcleren/dsh-security-scan",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/locales.ts
		const zh = {
			noRepairRemote: "未检测到可展示的远端，先通过本地修复分支交付。",
			repairDelivery: "修复交付方式",
			deliveryPr: "会话决定，PR 优先（默认）",
			deliveryLocal: "本地修改",
			deliveryPreferenceHint: "每个任务记住交付选择；发起修复前可调整。",
			deliveryPrHint: "在本地修复分支完成修改和验证，通过对话决定交付。能建 PR 时优先建议 PR，否则保留本地分支；提交、推送和建 PR 由你最终决定。",
			deliveryLocalHint: "在扫描目录直接修改，不自动提交或推送；保留已有改动。",
			repairPrSelected: "在会话中修复",
			prBase: "目标分支 / 起点提交",
			prBranch: "修复分支",
			viewRepairPr: "查看 PR 差异",
			refreshDelivery: "刷新交付状态",
			prPending: "修复保留在本地分支，请到会话查看差异并决定交付；确认创建 PR 后可刷新链接。",
			rescanRepairBranch: "复扫修复分支",
			prRepository: "独立修复分支需要有效的本地 Git 仓库，请检查仓库或明确选择本地修改。",
			prRemote: "远端无法安全展示，仍可在本地修复分支完成修改，并在会话中决定交付。",
			prDirty: "仓库包含未提交修改，无法从相同内容创建独立修复分支。请先处理改动并重新扫描，或明确选择本地修改。",
			prBranchMissing: "当前为分离 HEAD，无法确定修复起点分支；请切换到目标分支并重新扫描。",
			prChanged: "仓库起点已变化，请刷新交付状态并核对后再发起。",
			prWorktree: "修复工作区不可用或分支已变化，未改动原工作区；请检查修复会话。",
			prUrl: "PR 链接不属于本次修复仓库。",
			working: "处理中…",
			retryRepair: "重试发起修复",
			critical: "严重",
			high: "高危",
			medium: "中危",
			low: "低危",
			info: "提示",
			nextSteps: "接下来，处理扫描结果",
			followUpHint: "选中问题交给修复会话；会话改完代码会自动复扫，再回到这里查看对比。",
			actionable: "项待处理",
			selectFindings: "选择问题",
			selectionHint: "已确认和待复核问题均可选择，每次最多 20 项。",
			repairFindings: "进入修复会话",
			repairHint: "会话按核实、最小修改、回归测试、复扫的顺序处理，操作沿用 DSH 权限。",
			rescan: "按原配置复扫",
			rescanHint: "修复会话完成后会自动复扫；也可以在这里按原配置手动复扫，两份报告都会保留。",
			repairStarted: "本次修复选择",
			findingSearch: "搜索问题或文件",
			findingType: "问题类型",
			allTypes: "全部类型",
			sourceRisk: "源码风险",
			dependencyRisk: "依赖漏洞",
			secretRisk: "凭据泄漏",
			riskLevel: "风险级别",
			allLevels: "全部级别",
			reviewState: "复核状态",
			allReviewStates: "全部状态",
			selectVisible: "全选当前结果",
			selectFirst: "选取当前结果前",
			deselectVisible: "取消当前结果",
			clearSelection: "清空选择",
			resetFilters: "重置筛选",
			matchingFindings: "匹配",
			selectedFindings: "已选",
			hiddenSelected: "筛选外已选",
			selectionLimit: "已达单次上限，可取消部分选择后调整。",
			noMatches: "没有匹配结果，试试其他筛选条件。",
			repairUnavailable: "修复会话仅适用于本地工作区扫描；远端、固定版本和暂存区请先在本地工作区扫描。",
			noActionable: "没有待处理的问题；覆盖情况仍需查看下方报告。",
			openRepair: "打开修复会话",
			repairSelected: "修复选中问题",
			rescanUnavailable: "原运行记录不可用，无法恢复扫描配置；请从扫描任务发起。",
			viewComparison: "查看复扫结果",
			viewProgress: "查看进度",
			comparisonTitle: "与上次扫描对比",
			comparisonHint: "“本次未再发现”只表示相同扫描条件下未检出，不代表已修复；AI 补充发现需人工复核。",
			comparisonIncomplete: "范围、扫描器版本或覆盖情况不可比，保留为待验证，不能认定已修复。",
			previousReport: "查看上次报告",
			notObserved: "本次未再发现",
			remaining: "仍然存在",
			added: "新增",
			unverified: "待验证",
			moreActions: "更多操作",
			activeRuns: "进行中",
			needsAttention: "需关注",
			allRuns: "全部记录",
			runSearch: "搜索任务或仓库",
			rescanLabel: "复扫",
			scanQueued: "扫描已加入队列，可以打开会话或稍后查看报告。",
			connectionLost: "暂时无法连接，正在自动重试；当前内容可能不是最新状态。",
			unsavedTitle: "还有未保存的修改",
			unsavedHint: "离开后本次修改会丢失。",
			keepEditing: "继续编辑",
			discard: "放弃修改并离开",
			repairExists: "这份报告已关联修复会话，请打开已有会话继续处理。",
			emptySubmission: "未提供复核或新增结果；仅查看进度请使用覆盖检查点。",
			chineseRequired: "请用中文填写依据、修复建议和验证情况，保留原始标识及未验证说明。",
			redactedSecret: "凭据已被工具脱敏，不能据此排除风险；请保留待复核并核实原始值。",
			sourcePreview: "扫描源码位置",
			closeSource: "关闭源码",
			sourceUnavailable: "无法读取扫描时的源码：文件可能已变化、删除或仓库不可用，请重新扫描。",
			nativeCompleted: "Agent 执行已完成",
			nativeStopped: "Agent 执行已停止，请查看结束原因",
			coveragePartial: "扫描覆盖存在缺口，请查看报告中的未覆盖原因。",
			resultConfirmed: "已确认",
			resultPending: "待复核",
			resultDismissed: "已排除",
			agentRounds: "轮",
			agentPreset: "执行模式：安全审计（基础工具＋审计工具＋上下文压缩）",
			agentPresetHint: "工作台启动时创建安全审计会话；从对话启动时，在原会话后续轮次审计，保留原模型和会话配置。",
			agentPresetMissing: "安全审计模式不可用，请检查 preset 扩展目录及同名文件是否冲突。",
			scanReportNotice: "安全扫描 · 报告与执行结果",
			agentOutputLimit: "模型单次输出达到 token 上限",
			syncSession: "同步到 DSH 会话",
			syncSessionHint: "从对话启动会复用原会话；工作台 AI 扫描创建执行会话。此选项控制仅规则扫描的观察会话和额外进度通知。",
			openSession: "打开会话",
			conversationTrigger: "会话发起",
			coverageDetails: "覆盖缺口与诊断",
			sessionUnavailable: "会话同步不可用或写入失败；扫描继续，请在运行记录查看结果。",
			invalidArguments: "模型工具参数不符合格式，已反馈具体字段供纠正。",
			unreadCitation: "引用包含未读取的行，需要先补充取证。",
			citationRequired: "引用未覆盖问题所在行。",
			sourceOnly: "该文件不在可复核源码范围内；依赖和非源码发现保留在规则报告。",
			readBudget: "读取内容过大，需要减少文件或行数。",
			sourceChanged: "代码已在扫描后变化，需要重新扫描。",
			unknownFinding: "候选编号不在本次源码复核列表中。",
			planRequired: "需要先提交审查计划。",
			planStarted: "已有审查计划，应继续取证或提交结论。",
			unsupportedTool: "请求了未开放的工具或错误的结束顺序。",
			enginesTitle: "扫描环境",
			engineReady: "已就绪",
			engineInstalling: "正在准备",
			engineFailed: "准备失败",
			engineIdle: "尚未准备",
			engineRetry: "准备 / 重试",
			managedDefault: "由插件自动管理",
			engineOverrides: "高级设置",
			overrideHint: "留空使用插件内置版本；如需使用已有工具，可填写绝对路径。自定义工具仍须满足已验证版本。",
			semgrepPurpose: "Python、Go、JS / TS 代码规则",
			gitleaksPurpose: "检测意外提交的密钥",
			viewEnvironment: "查看扫描环境",
			engineChecking: "检查已安装版本",
			engineDownload: "下载并校验运行工具",
			enginePython: "准备独立 Python 环境",
			engineSemgrep: "安装锁定的 Semgrep 依赖",
			engineGitleaks: "下载并校验 Gitleaks",
			engineFailureHint: "请检查网络、目录权限与可用空间，然后重试。自定义路径不受影响。",
			engineLockHint: "另一个安装进程持有锁；等待它完成后重试。异常退出留下的锁需先核实归属。",
			engineUnsupportedHint: "此平台暂不支持自动安装，可在高级设置中配置已有扫描器。",
			engineIntegrityHint: "安装包完整性校验失败，未执行该文件；请检查下载来源后重试。",
			sourceSection: "代码来源",
			policySection: "范围与基线",
			taskIntro: "为每个仓库保存扫描范围、基线和自动检查策略。",
			rulesReport: "原始规则报告",
			agentAdditional: "补充发现",
			copySuffix: "（副本）",
			agentModelMissing: "尚未配置 DSH 默认模型",
			agentStepLimit: "已达到调用轮次限制",
			agentTimeLimit: "已达到运行时限",
			agentContextLimit: "上下文或输出超出预算",
			agentModelFailed: "模型请求失败，请检查 DSH 模型配置",
			agentInvalid: "模型未能返回有效工具调用",
			agentEvidenceMissing: "部分候选缺少可复核的源码证据",
			agent: "AI 证据复核",
			agentEnable: "启用 Agentic AI",
			agentHint: "规则扫描后由 DSH 模型自主选取证据、追踪风险并生成建议。选中的源码会发送给该模型；自动检查也使用此配置。",
			agentDefault: "跟随 DSH 默认模型",
			agentAdvanced: "模型选择",
			agentModelsLoading: "正在加载模型…",
			agentModelsRefresh: "刷新模型",
			agentModelsHint: "来自 DSH 已配置的模型；选择默认项会跟随 DSH 默认模型变化。",
			agentModelsEmpty: "暂无可选模型，请先在 DSH 模型设置中配置，再刷新列表。",
			agentModelsFailed: "部分模型列表加载失败，可重试刷新；已保存的选择仍会保留。",
			agentSavedModel: "已保存，未在列表中",
			agentSavedModelHint: "该模型未在当前列表中，可能未被列出或配置已移除。保留原选择；运行前请核实 DSH 模型配置。",
			agentSteps: "最多模型调用轮次",
			agentMinutes: "最长运行分钟数",
			agentTokens: "每轮最大输出 Token",
			agentBudget: "退出、输出上限和上下文管理沿用 DSH 原生运行时，插件不设置额外轮数或时限。",
			flow: "代码快照 → 规则与基线 → AI 证据复核 → HTML 报告",
			agentDetails: "AI 执行记录",
			agentRound: "模型调用",
			agentFiles: "已读取文件",
			agentReviewed: "已复核候选",
			listing: "发现代码文件",
			planning: "确定审查范围",
			reading: "读取快照证据",
			reviewing: "保存复核结论",
			rejected: "拒绝无效操作",
			agentIncomplete: "AI 复核未完成",
			agentCompleted: "AI 流程已结束（非安全认证）",
			duplicate: "复制任务",
			taskSearch: "搜索任务或仓库",
			noTaskMatch: "没有匹配的任务",
			entry: "安全扫描",
			title: "安全扫描工作台",
			subtitle: "管理代码审查任务、自动检查和扫描报告",
			back: "返回 DSH",
			tasks: "扫描任务",
			runs: "运行记录",
			settings: "扫描设置",
			reports: "历史报告",
			newTask: "新建任务",
			refresh: "刷新",
			loading: "正在加载…",
			emptyTasks: "还没有扫描任务",
			emptyTasksHint: "添加本地代码目录或仓库地址，保存后可以随时运行。",
			emptyRuns: "暂无运行记录",
			emptyReports: "暂无报告",
			name: "任务名称",
			kind: "代码来源",
			local: "本地目录",
			remote: "仓库地址",
			target: "目录或仓库地址",
			localHint: "填写代码目录的绝对路径",
			remoteHint: "HTTPS 或 SSH 地址，使用本机 Git 授权；不要填写 Token 或密码",
			ref: "分支或提交（可选）",
			refHint: "本地留空扫描工作区文件；远端留空使用默认分支。",
			scope: "扫描范围",
			full: "全量",
			diff: "增量",
			staged: "暂存区",
			stagedHint: "读取 Git 暂存区，与 HEAD 比较，不包含未暂存的修改。",
			baseline: "比较基线",
			none: "不比较",
			git: "Git 分支 / 提交",
			previousBaseline: "上一次报告（默认）",
			base: "基线分支或提交",
			baseHint: "增量扫描使用它与当前提交的共同祖先。",
			previousBaselineNext: "下次运行将对比 {date} 的报告，只把之后出现的问题标为新增。",
			previousBaselineFirst: "还没有已完成的报告：第一次扫描不做对比，之后每次自动对比上一份报告。",
			comparedWith: "查看对比的上次报告",
			firstScan: "首次扫描，未对比",
			resultAdded: "新增",
			engine: "扫描方式",
			auto: "静态规则扫描",
			inventory: "仅盘点文件（不执行安全规则）",
			dependencies: "查询依赖漏洞",
			dependenciesHint: "启用后向官方 OSV 发送依赖名称和版本，不发送源码。",
			secrets: "检测泄漏密钥",
			secretsHint: "插件自动准备 Gitleaks；报告只保留脱敏位置。",
			view: "报告初始筛选",
			viewHint: "只影响打开报告时的默认筛选；没有可对比的基线时显示全部问题。",
			all: "全部问题",
			new: "新增问题",
			autoScan: "DSH 编辑后自动检查",
			autoHint: "观察扫描设置中的编辑工具；合并连续编辑后按此任务配置运行。",
			deleteRun: "删除记录",
			deleteReport: "删除报告",
			confirmDelete: "确认删除",
			deleted: "已删除",
			deleteRunHint: "永久删除这条运行记录。扫描任务、历史报告和 DSH 对话会保留。",
			deleteReportHint: "永久删除这份报告的 HTML、JSON 及内含的代码证据，无法恢复。保留运行记录和 DSH 对话；已导出的副本不受影响。删除后，下次扫描自动对比更早的一份报告；正在运行的扫描正在使用的报告不可删除。",
			runBusy: "扫描仍在执行或收尾，请结束后再删除。",
			reportInUse: "正在执行的扫描或修复正在使用这份报告，请等待结束后再删除。",
			runNotFound: "记录已不存在，请刷新列表。",
			reportNotFound: "报告已不存在，请刷新列表。",
			unsafeReportDelete: "报告目录包含未知内容、链接或无效数据，未执行删除。请检查报告目录。",
			save: "保存任务",
			saveRun: "保存并运行",
			cancel: "取消",
			edit: "编辑",
			run: "立即扫描",
			remove: "移除",
			removeTitle: "移除任务定义",
			removeHint: "运行记录和报告会保留；已安装的 Git hooks 不会自动移除。",
			confirm: "确认",
			queued: "排队中",
			running: "扫描中",
			cancelling: "正在取消",
			succeeded: "已完成",
			partial: "已结束（旧记录）",
			failed: "失败",
			cancelled: "已取消",
			interrupted: "已中断",
			preparing: "准备代码快照",
			scanning: "执行扫描",
			baselinePhase: "比较基线",
			reportPhase: "生成报告",
			finished: "已结束",
			manual: "手动",
			editTrigger: "编辑触发",
			taskName: "任务",
			createdAt: "开始时间",
			status: "状态",
			actions: "操作",
			findings: "候选问题",
			openReport: "查看报告",
			closeReport: "返回工作台",
			downloadHtml: "下载 HTML",
			downloadJson: "下载 JSON 留档",
			reportHint: "JSON 是报告唯一数据源；HTML 用于查看。规则完成不等于模型已复核。",
			rulesHint: "每个任务可独立启用 AI 复核；执行结束后发布最终报告。也可在 DSH 会话中使用 dsh-security-review。",
			hook: "Git hooks",
			hookTitle: "管理 Git 自动检查",
			hookHint: "只修改下面列出的仓库 hook，不覆盖已有用户脚本。保存任务不会自动安装或更新 hook。Git hooks 执行 Semgrep 静态规则，不启动模型，也不启用依赖查询或密钥检测。",
			hookEvent: "触发时机",
			preCommit: "提交前（暂存区）",
			prePush: "推送前（实际提交）",
			hookInstall: "安装 hook",
			hookRemove: "卸载本插件 hook",
			hookConfirm: "确认修改仓库 hook",
			enforce: "扫描失败或不完整时阻断",
			enforceHint: "默认仅提醒。候选风险不冒充已确认漏洞来阻断提交。",
			hookDone: "Git hook 操作已完成。",
			semgrepPath: "Semgrep 路径",
			gitleaksPath: "Gitleaks 路径",
			reportDirectory: "报告保存目录",
			hookTools: "触发自动检查的 DSH 工具",
			hookToolsHint: "每行一个工具名，默认包含 write、edit、str_replace_editor；编辑器的 view 操作不会触发。",
			legacyAuto: "其他工作区使用全局自动检查",
			legacyHint: "保留旧版设置：没有匹配自动任务的工作区，编辑后对 HEAD 做增量规则检查。",
			saveSettings: "保存设置",
			settingsSaved: "扫描设置已保存。",
			scannerHint: "首次自动下载已校验的扫描器和独立 Python，随后复用，无需修改系统环境。扫描任务会等待环境就绪。",
			readOnly: "当前设置只读",
			invalidInput: "请检查目录、基线和扫描模式的组合。",
			operationFailed: "操作失败，请检查路径、Git 授权或 Host 日志。",
			taskChanged: "任务已在其他页面修改，请刷新后重新编辑。",
			taskBusy: "任务已有排队或运行中的扫描，请先取消或等待结束。",
			queueFull: "队列已满，请稍后重试。",
			taskNotFound: "任务已不存在，请刷新。",
			pathRequired: "请填写绝对路径。",
			codeDirectory: "请选择具体的代码目录。",
			serviceStopped: "服务正在停止，请重新连接。",
			storeLocked: "任务目录已锁定：可能有实例仍在运行，或锁的归属无法确认。请检查后重启 DSH。",
			localHookOnly: "Git hook 只适用于本地仓库。",
			scanFailed: "扫描失败，请检查仓库、分支、扫描器或 Host 日志。",
			hostRestarted: "Host 重启中断了上次扫描，可以手动重新运行。",
			storeFailed: "任务记录写入失败，请检查目录权限和磁盘空间。",
			hookFailed: "无法修改 hook：检查是否已有脚本或 hooksPath，以及推送基线是否有效。",
			tooLarge: "报告过大，请缩小扫描范围。",
			taskLimit: "最多保存 100 个任务。",
			reportAccess: "报告目录暂时无法读取，可在扫描设置中修改；任务记录仍保留。",
			autoLabel: "自动检查",
			taskSaved: "任务已保存。",
			source: "代码仓库",
			noBaseline: "未设置基线",
			countSuffix: "项",
			cacheHit: "缓存命中",
			dynamic: "运行时基线检查",
			dynamicRisk: "运行时风险",
			repairTrigger: "修复复扫",
			nothingToRepair: "复扫后没有需要继续修复的问题。",
			checksSection: "检查项",
			automationSection: "修复与自动化",
			checksHint: "规则、依赖、密钥和运行时检查不调用模型、不消耗 Token；只有 AI 复核使用 DSH 模型。",
			rulesCheck: "静态规则扫描",
			rulesCheckHint: "Semgrep 规则覆盖 Python、Go、JS / TS 常见漏洞模式。",
			dynamicHint: "向已启动的服务发送最多 12 个同源只读 GET 请求，检查安全响应头、Cookie、CORS 和敏感文件暴露；不登录、不提交表单、不发送攻击载荷。",
			dynamicUrl: "服务地址（可选）",
			dynamicUrlHint: "留空则跳过；只填写你有权测试的本地或测试环境地址。",
			dynamicAuthorized: "我确认有权对该地址执行只读检查",
			lastRun: "最近一次",
			neverRun: "尚未运行",
			coverageGap: "覆盖不完整",
			stepSelect: "选择问题",
			stepRepair: "会话修复",
			stepRescan: "复扫验证",
			stepCompare: "对比结果",
			compareHint: "仍然存在或新增的问题可以发回同一会话，继续下一轮修复。",
			quickConfirmed: "选中已确认",
			quickHigh: "选中高危及以上",
			continueRepair: "继续修复剩余问题",
			repairRound: "第 {n} 轮",
			suppressSelected: "标记为误报",
			suppressTitle: "标记为误报并在以后的扫描中隐藏",
			suppressHint: "只对当前仓库生效。同一文件、同一规则、同一段代码再次命中时自动标记为已排除；代码改动或文件改名后会重新显示。排除记录保存在本机，不写入被扫描的仓库。",
			suppressReason: "排除原因（必填）",
			suppressReasonHint: "例如：参数来自内部常量配置，不接收外部输入。",
			suppressConfirm: "确认排除",
			suppressDone: "已排除 {n} 项，之后的扫描会自动隐藏。",
			selectToExclude: "选择要标记为误报的问题",
			inRepair: "修复中",
			repairExcludeHint: "修复会话核实为误报的问题，可在会话里同意排除，也可以在下方手动标记。",
			suppressedTag: "你已排除",
			suppressedCount: "已被你排除",
			suppressAiOnly: "AI 补充的发现没有稳定指纹，无法在后续扫描中自动排除。",
			suppressionsTitle: "已排除的问题",
			suppressionsHint: "这些问题在后续扫描中自动标记为已排除，不计入失败阈值，也不交给 AI 复核。恢复后，下一次扫描会重新显示。CLI 和 Git hook 使用同一份列表。",
			suppressionsEmpty: "还没有排除记录。在报告的“接下来，处理扫描结果”中选中问题后点击“标记为误报”。",
			suppressionRestore: "恢复",
			suppressionRestored: "已恢复，下次扫描会重新显示该问题。",
			suppressionSearch: "搜索仓库、文件或原因",
			suppressionLimit: "排除记录已达 5000 条上限，请先恢复不再需要的记录。",
			suppressionsUnavailable: "排除记录无法读取或正被其他进程写入，请稍后重试并检查 suppressions.json 的权限。",
			suppressionNotFound: "这条排除记录已不存在，列表已刷新。"
		};
		const en = {
			noRepairRemote: "No safe remote detected. Deliver through the local repair branch first.",
			repairDelivery: "Repair delivery",
			deliveryPr: "Decide in conversation, prefer PR (default)",
			deliveryLocal: "Local edits",
			deliveryPreferenceHint: "Remembered per task; review the choice before starting repairs.",
			deliveryPrHint: "Repair and validate on a local branch, then decide delivery in conversation. Prefer a PR when available; otherwise retain the local branch. You decide whether to commit, push or create a PR.",
			deliveryLocalHint: "Edit the scanned directory, preserving existing changes. No automatic commit or push.",
			repairPrSelected: "Repair in conversation",
			prBase: "Target branch / starting commit",
			prBranch: "Repair branch",
			viewRepairPr: "View PR diff",
			refreshDelivery: "Refresh delivery status",
			prPending: "Changes remain on the local branch. Review the diff and decide delivery in the session; refresh after approving PR creation.",
			rescanRepairBranch: "Rescan repair branch",
			prRepository: "An isolated repair branch requires a local Git repository. Check the repository or explicitly choose local edits.",
			prRemote: "The remote cannot be displayed safely. Continue on the local repair branch and decide delivery in conversation.",
			prDirty: "Uncommitted changes prevent an equivalent isolated branch. Resolve them and rescan, or explicitly choose local edits.",
			prBranchMissing: "Detached HEAD has no PR target branch. Switch to the target branch and rescan.",
			prChanged: "Repository starting point changed. Refresh and review before retrying.",
			prWorktree: "Repair worktree is unavailable or its branch changed. Original workspace was not modified; check the repair session.",
			prUrl: "PR URL does not belong to this repair repository.",
			working: "Working…",
			retryRepair: "Retry repair session",
			critical: "Critical",
			high: "High",
			medium: "Medium",
			low: "Low",
			info: "Info",
			nextSteps: "Act on scan results",
			followUpHint: "Send selected findings to a repair session. It rescans automatically after editing; compare the results here.",
			actionable: "to review",
			selectFindings: "Select findings",
			selectionHint: "Select up to 20 confirmed or pending findings.",
			repairFindings: "Open a repair session",
			repairHint: "The session verifies, applies a minimal fix, adds a regression test and rescans, using normal DSH permissions.",
			rescan: "Rescan with original settings",
			rescanHint: "The repair session rescans automatically; you can also rescan here with the original settings. Both reports are retained.",
			repairStarted: "Selected for repair",
			findingSearch: "Search findings or files",
			findingType: "Finding type",
			allTypes: "All types",
			sourceRisk: "Source risks",
			dependencyRisk: "Dependency vulnerabilities",
			secretRisk: "Exposed credentials",
			riskLevel: "Risk level",
			allLevels: "All levels",
			reviewState: "Review status",
			allReviewStates: "All statuses",
			selectVisible: "Select all matching",
			selectFirst: "Select first matching",
			deselectVisible: "Deselect matching",
			clearSelection: "Clear selection",
			resetFilters: "Reset filters",
			matchingFindings: "Matching",
			selectedFindings: "Selected",
			hiddenSelected: "Selected outside filters",
			selectionLimit: "Selection limit reached. Deselect findings to adjust.",
			noMatches: "No matches. Try another filter.",
			repairUnavailable: "Repair sessions require a local working-tree scan. Scan locally first for remote repositories, fixed revisions or staged changes.",
			noActionable: "No actionable findings. Check coverage in the report below.",
			openRepair: "Open repair session",
			repairSelected: "Repair selected findings",
			rescanUnavailable: "The original run record is unavailable. Start from a saved scan task.",
			viewComparison: "View rescan results",
			viewProgress: "View progress",
			comparisonTitle: "Compared with the previous scan",
			comparisonHint: "“Not observed” means undetected under comparable scan conditions, not proven fixed. AI findings need manual verification.",
			comparisonIncomplete: "Scope, scanner versions or coverage differ. Results remain unverified.",
			previousReport: "View previous report",
			notObserved: "Not observed this time",
			remaining: "Still present",
			added: "New",
			unverified: "Unverified",
			moreActions: "More actions",
			activeRuns: "Active",
			needsAttention: "Needs attention",
			allRuns: "All runs",
			runSearch: "Search tasks or repositories",
			rescanLabel: "Rescan",
			scanQueued: "Scan queued. Open its session or return later for the report.",
			connectionLost: "Connection unavailable. Retrying automatically; displayed data may be stale.",
			unsavedTitle: "Unsaved changes",
			unsavedHint: "Leaving will discard these changes.",
			keepEditing: "Keep editing",
			discard: "Discard and leave",
			repairExists: "This report already has a repair session. Open it to continue.",
			emptySubmission: "Submit at least one review or finding; use the checkpoint to inspect progress.",
			chineseRequired: "Evidence, recommendations and verification must be written in Chinese.",
			redactedSecret: "The tool redacted this credential. Keep it pending until its original value is verified.",
			sourcePreview: "Scanned source location",
			closeSource: "Close source",
			sourceUnavailable: "The scanned source is unavailable or has changed. Run a new scan.",
			nativeCompleted: "Agent execution completed",
			nativeStopped: "Agent stopped; see its termination reason",
			coveragePartial: "Scan coverage has gaps; see the report for details.",
			resultConfirmed: "Confirmed",
			resultPending: "Pending",
			resultDismissed: "Dismissed",
			agentRounds: "rounds",
			agentPreset: "Execution mode: Security audit (native tools + compaction)",
			agentPresetHint: "Workbench scans create a security audit session. Conversation scans continue in the original session, keeping its model and configuration.",
			agentPresetMissing: "Security audit preset unavailable. Check the preset directory and conflicting files.",
			scanReportNotice: "Security scan · Report and execution outcome",
			agentOutputLimit: "Model response reached the output token limit",
			syncSession: "Sync to a DSH session",
			syncSessionHint: "Conversation scans reuse their session; workbench AI scans create one. This option controls rule-only observation sessions and extra progress notices.",
			openSession: "Open session",
			conversationTrigger: "Conversation",
			coverageDetails: "Coverage and diagnostics",
			sessionUnavailable: "Session synchronization failed or is unavailable. Scanning continues; see run history for results.",
			invalidArguments: "Model tool arguments were invalid. Field details were returned for correction.",
			unreadCitation: "Citations include unread lines. Read those lines first.",
			citationRequired: "Citations do not cover the finding location.",
			sourceOnly: "File is outside source review scope. Dependency and non-source findings remain in the rules report.",
			readBudget: "Evidence response is too large. Request fewer files or lines.",
			sourceChanged: "Source changed after scanning. Run a new scan.",
			unknownFinding: "Candidate ID is outside this source review.",
			planRequired: "Select a review plan first.",
			planStarted: "The plan is active. Continue collecting evidence or submitting results.",
			unsupportedTool: "Tool is unavailable or finish was requested in the wrong order.",
			enginesTitle: "Scan environment",
			engineReady: "Ready",
			engineInstalling: "Preparing",
			engineFailed: "Setup failed",
			engineIdle: "Not prepared",
			engineRetry: "Prepare / retry",
			managedDefault: "Managed by the plugin",
			engineOverrides: "Advanced settings",
			overrideHint: "Leave blank for managed tools, or provide absolute paths to existing tools. Custom tools must match verified versions.",
			semgrepPurpose: "Python, Go and JS / TS rules",
			gitleaksPurpose: "Detect accidentally committed secrets",
			viewEnvironment: "View environment",
			engineChecking: "Checking installed versions",
			engineDownload: "Downloading and verifying runtime tools",
			enginePython: "Preparing private Python",
			engineSemgrep: "Installing locked Semgrep dependencies",
			engineGitleaks: "Downloading and verifying Gitleaks",
			engineFailureHint: "Check connectivity, directory permissions and free space, then retry. Custom paths are unaffected.",
			engineLockHint: "Another setup owns the lock. Retry after it completes. Inspect ownership before removing a lock left by an interrupted process.",
			engineUnsupportedHint: "Automatic setup is unavailable on this platform. Configure existing scanners in advanced settings.",
			engineIntegrityHint: "Package integrity verification failed. The file was not executed. Check the download source before retrying.",
			sourceSection: "Code source",
			policySection: "Scope and baseline",
			taskIntro: "Save scan scope, baseline and automatic checks for each repository.",
			rulesReport: "Original rules report",
			agentAdditional: "Additional findings",
			copySuffix: "(copy)",
			agentModelMissing: "No DSH default model configured",
			agentStepLimit: "Model call limit reached",
			agentTimeLimit: "Time limit reached",
			agentContextLimit: "Context or output budget exceeded",
			agentModelFailed: "Model request failed. Check DSH model settings.",
			agentInvalid: "Model did not return valid tool calls",
			agentEvidenceMissing: "Some candidates lack reviewable source evidence",
			agent: "AI evidence review",
			agentEnable: "Enable Agentic AI",
			agentHint: "After scanning, the DSH model selects evidence, traces risks and suggests fixes. Selected source is sent to that model. Automatic checks use this policy too.",
			agentDefault: "Use the DSH default model",
			agentAdvanced: "Model selection",
			agentModelsLoading: "Loading models…",
			agentModelsRefresh: "Refresh models",
			agentModelsHint: "Models configured in DSH. The default option follows changes to the DSH default model.",
			agentModelsEmpty: "No models listed. Configure models in DSH settings, then refresh.",
			agentModelsFailed: "Some model lists could not be loaded. Refresh to retry; saved selections are retained.",
			agentSavedModel: "Saved, not listed",
			agentSavedModelHint: "This model is not advertised or its configuration was removed. Your selection is retained; check DSH model settings before running.",
			agentSteps: "Maximum model calls",
			agentMinutes: "Maximum minutes",
			agentTokens: "Maximum output tokens per call",
			agentBudget: "Exit conditions, output limits and context management come from the native DSH runtime; the plugin adds no round or time limit.",
			flow: "Snapshot → Rules and baseline → AI evidence review → HTML report",
			agentDetails: "AI activity",
			agentRound: "Model calls",
			agentFiles: "Files read",
			agentReviewed: "Candidates reviewed",
			listing: "Discovering files",
			planning: "Planning review",
			reading: "Reading snapshot evidence",
			reviewing: "Saving conclusions",
			rejected: "Invalid operation rejected",
			agentIncomplete: "AI review incomplete",
			agentCompleted: "AI flow finished (not security certification)",
			duplicate: "Duplicate task",
			taskSearch: "Search tasks or repositories",
			noTaskMatch: "No matching tasks",
			entry: "Security scan",
			title: "Security workspace",
			subtitle: "Manage code audits, automatic checks and reports",
			back: "Back to DSH",
			tasks: "Tasks",
			runs: "Runs",
			settings: "Scan settings",
			reports: "Reports",
			newTask: "New task",
			refresh: "Refresh",
			loading: "Loading…",
			emptyTasks: "No scan tasks yet",
			emptyTasksHint: "Add a local directory or repository URL, then run it whenever needed.",
			emptyRuns: "No runs yet",
			emptyReports: "No reports yet",
			name: "Task name",
			kind: "Source",
			local: "Local directory",
			remote: "Repository URL",
			target: "Directory or repository URL",
			localHint: "Enter an absolute code directory path",
			remoteHint: "HTTPS or SSH URL; uses local Git authorization. Do not embed credentials.",
			ref: "Branch or commit (optional)",
			refHint: "Blank scans local working files or the remote default branch.",
			scope: "Scope",
			full: "Full",
			diff: "Diff",
			staged: "Staged",
			stagedHint: "Reads the Git index against HEAD; excludes unstaged edits.",
			baseline: "Baseline",
			none: "No comparison",
			git: "Git branch / commit",
			previousBaseline: "Previous report (default)",
			base: "Baseline branch or commit",
			baseHint: "Diff scans use its merge base with the current commit.",
			previousBaselineNext: "The next run compares with the report from {date}; only findings that appeared since then are marked new.",
			previousBaselineFirst: "No finished report yet. The first scan is not compared; later scans compare with the previous report automatically.",
			comparedWith: "View the report it compared with",
			firstScan: "First scan, not compared",
			resultAdded: "New",
			engine: "Scan method",
			auto: "Static rules",
			inventory: "Inventory only (no security rules)",
			dependencies: "Check dependency vulnerabilities",
			dependenciesHint: "Sends package names and versions to OSV, not source code.",
			secrets: "Detect exposed secrets",
			secretsHint: "Gitleaks is prepared automatically. Reports redact matched secrets.",
			view: "Initial report filter",
			viewHint: "Only sets the filter a report opens with; without a comparable baseline it shows all findings.",
			all: "All findings",
			new: "New findings",
			autoScan: "Scan after DSH edits",
			autoHint: "Coalesces calls to configured edit tools and runs this saved task.",
			deleteRun: "Delete record",
			deleteReport: "Delete report",
			confirmDelete: "Confirm deletion",
			deleted: "Deleted",
			deleteRunHint: "Permanently delete this run record. The task, reports and DSH conversations remain.",
			deleteReportHint: "Permanently delete this report’s HTML, JSON and embedded evidence. This cannot be undone. Run records, DSH conversations and exported copies remain. Later scans then compare with an earlier report; a report used by an active scan cannot be deleted.",
			runBusy: "The scan is still running or finishing. Try again once it ends.",
			reportInUse: "An active scan or repair is using this report. Delete it after that work ends.",
			runNotFound: "This record no longer exists. Refresh the list.",
			reportNotFound: "This report no longer exists. Refresh the list.",
			unsafeReportDelete: "The report directory contains unknown content, links or invalid data. Deletion was refused. Check the report directory.",
			save: "Save task",
			saveRun: "Save and run",
			cancel: "Cancel",
			edit: "Edit",
			run: "Run scan",
			remove: "Remove",
			removeTitle: "Remove task definition",
			removeHint: "Run history and reports remain. Installed Git hooks are not removed.",
			confirm: "Confirm",
			queued: "Queued",
			running: "Running",
			cancelling: "Cancelling",
			succeeded: "Completed",
			partial: "Ended (legacy record)",
			failed: "Failed",
			cancelled: "Cancelled",
			interrupted: "Interrupted",
			preparing: "Preparing snapshot",
			scanning: "Scanning",
			baselinePhase: "Comparing baseline",
			reportPhase: "Writing report",
			finished: "Finished",
			manual: "Manual",
			editTrigger: "After edit",
			taskName: "Task",
			createdAt: "Started",
			status: "Status",
			actions: "Actions",
			findings: "Candidates",
			openReport: "View report",
			closeReport: "Back to workspace",
			downloadHtml: "Download HTML",
			downloadJson: "Download JSON",
			reportHint: "JSON is the source of truth; HTML is the view. Rule completion does not imply model review.",
			rulesHint: "Enable AI review per task. Original and reviewed reports are retained. You can also use dsh-security-review in a DSH conversation.",
			hook: "Git hooks",
			hookTitle: "Manage Git checks",
			hookHint: "Only the selected repository hook is changed. Existing scripts are preserved. Saving a task does not install or update hooks. Git hooks run Semgrep rules only, without model review, dependency queries or secret scanning.",
			hookEvent: "Trigger",
			preCommit: "Before commit (index)",
			prePush: "Before push (pushed commits)",
			hookInstall: "Install hook",
			hookRemove: "Remove plugin hook",
			hookConfirm: "Confirm repository hook change",
			enforce: "Block on scan failure or incomplete coverage",
			enforceHint: "Advisory by default. Candidates are not treated as confirmed vulnerabilities.",
			hookDone: "Git hook operation completed.",
			semgrepPath: "Semgrep path",
			gitleaksPath: "Gitleaks path",
			reportDirectory: "Report directory",
			hookTools: "DSH edit tools that trigger scans",
			hookToolsHint: "One per line. Defaults include write, edit and str_replace_editor; editor view operations do not trigger scans.",
			legacyAuto: "Use global auto checks for other workspaces",
			legacyHint: "Preserves the previous setting: workspaces without an automatic task are checked against HEAD after edits.",
			saveSettings: "Save settings",
			settingsSaved: "Scan settings saved.",
			scannerHint: "Verified scanners and private Python are prepared once and reused without changing the system environment. Scans wait for setup.",
			readOnly: "Settings are read-only",
			invalidInput: "Check the directory, baseline and scan mode.",
			operationFailed: "Operation failed. Check paths, Git access or the Host log.",
			taskChanged: "This task changed in another window. Refresh before editing.",
			taskBusy: "This task already has an active run. Cancel it or wait.",
			queueFull: "Queue is full. Try again later.",
			taskNotFound: "Task no longer exists. Refresh the page.",
			pathRequired: "An absolute path is required.",
			codeDirectory: "Select a specific code directory.",
			serviceStopped: "Service is stopping. Reconnect to continue.",
			storeLocked: "The task directory is locked: an instance may still be running, or lock ownership could not be verified. Inspect it, then restart DSH.",
			localHookOnly: "Git hooks require a local repository.",
			scanFailed: "Scan failed. Check the repository, branch, scanner or Host log.",
			hostRestarted: "Host restart interrupted the run. Run it again when ready.",
			storeFailed: "Unable to persist tasks. Check directory access and disk space.",
			hookFailed: "Unable to change hook. Check existing scripts, hooksPath and push baseline.",
			tooLarge: "Report is too large. Reduce scan scope.",
			taskLimit: "At most 100 saved tasks.",
			reportAccess: "Report directory is unavailable. Update it in Scan settings; task records are retained.",
			autoLabel: "Automatic",
			taskSaved: "Task saved.",
			source: "Repository",
			noBaseline: "No baseline",
			countSuffix: "items",
			cacheHit: "cache hit",
			dynamic: "Runtime baseline check",
			dynamicRisk: "Runtime risk",
			repairTrigger: "Repair rescan",
			nothingToRepair: "No remaining issues need another repair round.",
			checksSection: "Checks",
			automationSection: "Repair and automation",
			checksHint: "Rule, dependency, secret and runtime checks call no model and use no tokens; only AI review uses the DSH model.",
			rulesCheck: "Static rules",
			rulesCheckHint: "Semgrep rules for common Python, Go and JS / TS vulnerability patterns.",
			dynamicHint: "Sends at most 12 same-origin read-only GET requests to a running service to check security headers, cookies, CORS and exposed files. No login, form submission or attack payloads.",
			dynamicUrl: "Service URL (optional)",
			dynamicUrlHint: "Leave empty to skip. Only use local or test services you are authorized to test.",
			dynamicAuthorized: "I am authorized to run read-only checks against this URL",
			lastRun: "Last run",
			neverRun: "Not run yet",
			coverageGap: "Partial coverage",
			stepSelect: "Select",
			stepRepair: "Repair",
			stepRescan: "Rescan",
			stepCompare: "Compare",
			compareHint: "Send remaining or added issues back to the same session for another round.",
			quickConfirmed: "Select confirmed",
			quickHigh: "Select high and above",
			continueRepair: "Continue repairing remaining issues",
			repairRound: "round {n}",
			suppressSelected: "Mark as false positive",
			suppressTitle: "Mark as false positive and hide in later scans",
			suppressHint: "Applies to this repository only. The same rule matching the same code in the same file is excluded automatically; edited code or renamed files appear again. Exclusions stay on this machine and are never written into the scanned repository.",
			suppressReason: "Reason (required)",
			suppressReasonHint: "For example: the argument comes from an internal constant and never from user input.",
			suppressConfirm: "Exclude",
			suppressDone: "Excluded {n}; later scans hide them automatically.",
			selectToExclude: "Select findings to mark as false positives",
			inRepair: "In repair",
			repairExcludeHint: "Findings the repair session verifies as false positives can be excluded from that conversation after you agree, or marked here.",
			suppressedTag: "Excluded by you",
			suppressedCount: "excluded by you",
			suppressAiOnly: "AI-added findings have no stable fingerprint and cannot be excluded automatically in later scans.",
			suppressionsTitle: "Excluded findings",
			suppressionsHint: "Later scans mark these as dismissed, skip them in failure thresholds and AI review. Restore one to see it again in the next scan. The CLI and Git hooks use the same list.",
			suppressionsEmpty: "No exclusions yet. In a report, select findings under \"Act on scan results\" and choose \"Mark as false positive\".",
			suppressionRestore: "Restore",
			suppressionRestored: "Restored. The next scan will show this finding again.",
			suppressionSearch: "Search repository, file or reason",
			suppressionLimit: "The exclusion list reached its 5000-item limit. Restore entries you no longer need first.",
			suppressionsUnavailable: "The exclusion list is unreadable or being written by another process. Retry later and check permissions on suppressions.json.",
			suppressionNotFound: "This exclusion no longer exists; the list was refreshed."
		};
		function errorKey(code) {
			const keys = {
				"empty-submission": "emptySubmission",
				"chinese-required": "chineseRequired",
				"redacted-secret": "redactedSecret",
				"scan-session-unavailable": "sessionUnavailable",
				"invalid-arguments": "invalidArguments",
				"unread-citation": "unreadCitation",
				"citation-required": "citationRequired",
				"source-only": "sourceOnly",
				"read-budget": "readBudget",
				"source-changed": "sourceChanged",
				"unknown-finding": "unknownFinding",
				"plan-required": "planRequired",
				"plan-already-started": "planStarted",
				"unsupported-tool": "unsupportedTool",
				"tool-rejected": "unsupportedTool",
				"evidence-unavailable": "agentEvidenceMissing",
				"file-budget": "agentContextLimit",
				"finding-budget": "agentContextLimit",
				"evidence-required": "agentEvidenceMissing",
				"report-directory-unavailable": "reportAccess",
				"invalid-input": "invalidInput",
				"task-changed": "taskChanged",
				"task-busy": "taskBusy",
				"queue-full": "queueFull",
				"task-not-found": "taskNotFound",
				"absolute-path-required": "pathRequired",
				"code-directory-required": "codeDirectory",
				"service-stopped": "serviceStopped",
				"task-store-locked": "storeLocked",
				"local-hook-only": "localHookOnly",
				"settings-read-only": "readOnly",
				"scan-failed": "scanFailed",
				"host-restarted": "hostRestarted",
				"store-write-failed": "storeFailed",
				"task-store-full": "storeFailed",
				"hook-failed": "hookFailed",
				"source-unavailable": "sourceUnavailable",
				"invalid-source-location": "sourceUnavailable",
				"report-too-large": "tooLarge",
				"task-limit": "taskLimit",
				cancelled: "cancelled"
			};
			Object.assign(keys, {
				"repair-pr-repository": "prRepository",
				"repair-pr-remote": "prRemote",
				"repair-pr-dirty": "prDirty",
				"repair-pr-branch": "prBranchMissing",
				"repair-pr-changed": "prChanged",
				"repair-pr-worktree": "prWorktree",
				"repair-pr-url": "prUrl",
				"repair-unavailable": "repairUnavailable",
				"nothing-to-repair": "nothingToRepair",
				"repair-exists": "repairExists",
				"run-busy": "runBusy",
				"report-in-use": "reportInUse",
				"run-not-found": "runNotFound",
				"report-not-found": "reportNotFound",
				"unsafe-report-delete": "unsafeReportDelete",
				"suppression-limit": "suppressionLimit",
				"unsafe-suppressions": "suppressionsUnavailable",
				"suppressions-locked": "suppressionsUnavailable",
				"suppression-not-found": "suppressionNotFound",
				"finding-not-suppressible": "suppressAiOnly"
			});
			return keys[code] ?? "operationFailed";
		}
		function agentReasonKey(reason) {
			return {
				"empty-submission": "emptySubmission",
				"chinese-required": "chineseRequired",
				"redacted-secret": "redactedSecret",
				completed: "agentCompleted",
				"step-limit": "agentStepLimit",
				"time-limit": "agentTimeLimit",
				"context-limit": "agentContextLimit",
				"output-limit": "agentOutputLimit",
				"preset-unavailable": "agentPresetMissing",
				"model-unavailable": "agentModelMissing",
				"model-failed": "agentModelFailed",
				"invalid-response": "agentInvalid",
				"evidence-unavailable": "agentEvidenceMissing",
				cancelled: "cancelled"
			}[reason] ?? "agentIncomplete";
		}
		function enginePhaseKey(phase) {
			return {
				"empty-submission": "emptySubmission",
				"chinese-required": "chineseRequired",
				"redacted-secret": "redactedSecret",
				idle: "engineIdle",
				checking: "engineChecking",
				download: "engineDownload",
				python: "enginePython",
				semgrep: "engineSemgrep",
				gitleaks: "engineGitleaks",
				ready: "engineReady"
			}[phase] ?? "engineInstalling";
		}
		function engineErrorKey(code) {
			return code === "toolchain-locked" ? "engineLockHint" : code === "toolchain-unsupported" ? "engineUnsupportedHint" : code === "toolchain-integrity" ? "engineIntegrityHint" : "engineFailureHint";
		}
		//#endregion
		//#region src/client/ReportFollowUp.tsx
		/** Runtime findings point at an HTTP endpoint instead of a source line. */
		const place = (item) => item.endpoint ?? item.file + ":" + item.line;
		const steps = [
			"stepSelect",
			"stepRepair",
			"stepRescan",
			"stepCompare"
		];
		const stepHints = [
			"selectionHint",
			"repairHint",
			"rescanHint",
			"compareHint"
		];
		function ReportFollowUp({ id, remote, t, busy, runs, action, openSession, showRuns, openReport, notify }) {
			const [data, setData] = (0, react.useState)(), [error, setError] = (0, react.useState)("");
			const [mode, setMode] = (0, react.useState)("pr");
			const [selected, setSelected] = (0, react.useState)([]), [query, setQuery] = (0, react.useState)(""), [pickerOpen, setPickerOpen] = (0, react.useState)(false);
			const [category, setCategory] = (0, react.useState)(""), [severity, setSeverity] = (0, react.useState)(""), [status, setStatus] = (0, react.useState)("");
			const [suppressing, setSuppressing] = (0, react.useState)(false), [reason, setReason] = (0, react.useState)("");
			(0, react.useEffect)(() => {
				let disposed = false;
				setData(void 0);
				setSelected([]);
				setPickerOpen(false);
				setError("");
				setQuery("");
				setCategory("");
				setSeverity("");
				setStatus("");
				setSuppressing(false);
				setReason("");
				remote.reportActions(id).then((value) => {
					if (!disposed) {
						setData(value);
						setMode(value.repairMode);
					}
				}).catch((error) => {
					if (!disposed) setError(error instanceof Error ? error.message : "operation-failed");
				});
				return () => {
					disposed = true;
				};
			}, [id, remote]);
			const following = !!data?.run?.repair?.admitted;
			(0, react.useEffect)(() => {
				if (!following) return;
				let disposed = false;
				const timer = setInterval(() => {
					remote.reportActions(id).then((value) => {
						if (disposed) return;
						setData(value);
						setSelected((current) => current.filter((key) => value.findings.some((item) => item.id === key && item.status !== "dismissed" && !item.suppressed)));
					}).catch(() => {});
				}, 5e3);
				return () => {
					disposed = true;
					clearInterval(timer);
				};
			}, [
				following,
				id,
				remote
			]);
			if (error) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "alert",
				role: "alert",
				children: t(errorKey(error))
			});
			if (!data) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				role: "status",
				children: t("loading")
			});
			const rescan = runs.find((run) => run.previousReportId === id);
			const repair = data.run?.repair;
			const findings = data.findings.filter((item) => item.status !== "dismissed" && !item.suppressed);
			const suppressedCount = data.findings.filter((item) => item.suppressed).length;
			const selectedItems = findings.filter((item) => selected.includes(item.id));
			const canSuppress = selectedItems.length > 0 && selectedItems.every((item) => item.suppressible);
			const inRepair = new Set(repair?.findingIds ?? []);
			const pickable = data.repairable || findings.some((item) => item.suppressible);
			const visible = findings.filter((item) => (item.title + " " + place(item)).toLowerCase().includes(query.trim().toLowerCase()) && (!category || item.category === category) && (!severity || item.severity === severity) && (!status || item.status === status));
			const selectedVisible = visible.filter((item) => selected.includes(item.id)).length;
			const available = visible.filter((item) => !selected.includes(item.id));
			const capacity = Math.max(0, 20 - selected.length);
			const addCount = Math.min(capacity, available.length);
			const confirmed = findings.filter((item) => item.status === "confirmed"), severe = findings.filter((item) => item.severity === "critical" || item.severity === "high");
			const addAll = (items) => {
				setPickerOpen(true);
				setSelected((current) => [.../* @__PURE__ */ new Set([...current, ...items.map((item) => item.id)])].slice(0, 20));
			};
			const leftover = data.comparison?.items.filter((item) => item.change !== "notObserved" && item.status !== "dismissed" && !item.suppressed).length ?? 0;
			const canContinue = !!data.repairChain && leftover > 0;
			const stage = data.comparison ? 3 : rescan ? rescan.reportId ? 3 : 2 : repair?.admitted ? 2 : repair || selected.length ? 1 : 0;
			const quickSelect = (label, items) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				disabled: busy || !capacity || items.every((item) => selected.includes(item.id)),
				onClick: () => addAll(items),
				children: [
					t(label),
					" (",
					items.length,
					")"
				]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "card follow-up",
				"aria-label": t("nextSteps"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "card-head",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "grow",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("nextSteps") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: t("followUpHint")
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "tag",
								children: [
									findings.length,
									" ",
									t("actionable")
								]
							}),
							suppressedCount ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "tag",
								children: [
									suppressedCount,
									" ",
									t("suppressedCount")
								]
							}) : null
						]
					}),
					data.repairable || data.comparison ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ol", {
						className: "stepper",
						children: steps.map((key, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
							className: index < stage ? "done" : index === stage ? "current" : "",
							"aria-current": index === stage ? "step" : void 0,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "step-dot",
								"aria-hidden": "true",
								children: index < stage ? "✓" : index + 1
							}), t(key)]
						}, key))
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted step-hint",
						children: t(stepHints[stage])
					})] }) : null,
					data.repairable && findings.length && !repair && (confirmed.length || severe.length) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "quick-select",
						children: [
							confirmed.length ? quickSelect("quickConfirmed", confirmed) : null,
							severe.length ? quickSelect("quickHigh", severe) : null,
							selected.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "muted",
								children: [
									t("selectedFindings"),
									" ",
									selected.length,
									"/20"
								]
							}) : null
						]
					}) : null,
					repair ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: "muted",
						children: [
							t("repairStarted"),
							" · ",
							repair.findingIds.length,
							" · ",
							t("repairExcludeHint")
						]
					}) : null,
					pickable && findings.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
						className: "finding-picker",
						open: pickerOpen || void 0,
						onToggle: (event) => setPickerOpen(event.currentTarget.open),
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("summary", { children: [
								t(repair ? "selectToExclude" : "selectFindings"),
								" · ",
								selected.length,
								"/20"
							] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: "search",
									disabled: busy,
									"aria-label": t("findingSearch"),
									placeholder: t("findingSearch"),
									value: query,
									onChange: (event) => setQuery(event.target.value)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "finding-filters",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [t("findingType"), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											"aria-label": t("findingType"),
											disabled: busy,
											value: category,
											onChange: (event) => setCategory(event.target.value),
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "",
												children: t("allTypes")
											}), [
												"sourceRisk",
												"dependencyRisk",
												"secretRisk",
												"dynamicRisk"
											].filter((key) => key !== "dynamicRisk" || findings.some((item) => item.category === key)).map((key) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
												value: key,
												children: [
													t(key),
													" (",
													findings.filter((item) => item.category === key).length,
													")"
												]
											}, key))]
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [t("riskLevel"), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											"aria-label": t("riskLevel"),
											disabled: busy,
											value: severity,
											onChange: (event) => setSeverity(event.target.value),
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "",
												children: t("allLevels")
											}), [
												"critical",
												"high",
												"medium",
												"low",
												"info"
											].map((key) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: key,
												children: t(key)
											}, key))]
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [t("reviewState"), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											"aria-label": t("reviewState"),
											disabled: busy,
											value: status,
											onChange: (event) => setStatus(event.target.value),
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "",
													children: t("allReviewStates")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "confirmed",
													children: t("resultConfirmed")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "needs-review",
													children: t("resultPending")
												})
											]
										})] })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "actions finding-selection",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy || !addCount,
											onClick: () => setSelected((current) => [.../* @__PURE__ */ new Set([...current, ...available.map((item) => item.id)])].slice(0, 20)),
											children: available.length > capacity ? t("selectFirst") + " " + addCount : t("selectVisible")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy || !selectedVisible,
											onClick: () => setSelected((current) => current.filter((key) => !visible.some((item) => item.id === key))),
											children: t("deselectVisible")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy || !selected.length,
											onClick: () => setSelected([]),
											children: t("clearSelection")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy || !(query || category || severity || status),
											onClick: () => {
												setQuery("");
												setCategory("");
												setSeverity("");
												setStatus("");
											},
											children: t("resetFilters")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											disabled: busy || !canSuppress || suppressing,
											onClick: () => setSuppressing(true),
											children: [t("suppressSelected"), selectedItems.length ? " (" + selectedItems.length + ")" : ""]
										})
									]
								}),
								selectedItems.some((item) => !item.suppressible) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: t("suppressAiOnly")
								}) : null,
								suppressing ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
									className: "suppress-form",
									"aria-label": t("suppressTitle"),
									onSubmit: (event) => {
										event.preventDefault();
										action(async () => {
											const result = await remote.suppress(id, selectedItems.map((item) => item.id), reason.trim());
											setSuppressing(false);
											setReason("");
											setSelected([]);
											notify?.(t("suppressDone").replace("{n}", String(result.added + result.existing)));
											setData(await remote.reportActions(id));
										});
									},
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("suppressTitle") }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "muted",
											children: t("suppressHint")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [t("suppressReason"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
											required: true,
											maxLength: 500,
											disabled: busy,
											value: reason,
											placeholder: t("suppressReasonHint"),
											onChange: (event) => setReason(event.target.value)
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "actions",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
												className: "primary",
												type: "submit",
												disabled: busy || !reason.trim() || !canSuppress,
												children: [
													t("suppressConfirm"),
													" (",
													selectedItems.length,
													")"
												]
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: busy,
												onClick: () => {
													setSuppressing(false);
													setReason("");
												},
												children: t("cancel")
											})]
										})
									]
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "muted",
									role: "status",
									children: [
										t("matchingFindings"),
										" ",
										visible.length,
										" · ",
										t("selectedFindings"),
										" ",
										selected.length,
										"/20 · ",
										t("hiddenSelected"),
										" ",
										selected.length - selectedVisible,
										selected.length === 20 ? " · " + t("selectionLimit") : ""
									]
								})
							] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "finding-list",
								children: [visible.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: "finding-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: selected.includes(item.id),
											disabled: busy || !selected.includes(item.id) && selected.length >= 20,
											onChange: (event) => setSelected((current) => event.target.checked ? [...current, item.id] : current.filter((key) => key !== item.id))
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "grow",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [
												t(item.category),
												" · ",
												place(item),
												" · ",
												t(item.status === "confirmed" ? "resultConfirmed" : "resultPending")
											] })]
										}),
										inRepair.has(item.id) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag ai",
											children: t("inRepair")
										}) : null,
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t(item.severity)
										})
									]
								}, item.id)), !visible.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "empty",
									children: t("noMatches")
								}) : null]
							})
						]
					}) : null,
					!data.repairable || !findings.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted",
						children: findings.length ? t("repairUnavailable") : t("noActionable")
					}) : null,
					data.repairable && findings.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "repair-delivery",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [t("repairDelivery"), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
								"aria-label": t("repairDelivery"),
								value: repair?.mode ?? mode,
								disabled: busy || !!repair,
								onChange: (event) => setMode(event.target.value),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "pr",
									children: t("deliveryPr")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "local",
									children: t("deliveryLocal")
								})]
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t((repair?.mode ?? mode) === "pr" ? "deliveryPrHint" : "deliveryLocalHint")
							}),
							(repair?.mode ?? mode) === "pr" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								repair?.workspace ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "muted",
									children: [
										repair.workspace.repositoryUrl || t("noRepairRemote"),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
										t("prBase"),
										": ",
										repair.workspace.base,
										" · ",
										repair.workspace.commit.slice(0, 12),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
										t("prBranch"),
										": ",
										repair.workspace.branch
									]
								}) : data.prPreview ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "muted",
									children: [
										data.prPreview.repositoryUrl || t("noRepairRemote"),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
										t("prBase"),
										": ",
										data.prPreview.base,
										" · ",
										data.prPreview.commit.slice(0, 12)
									]
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									role: "alert",
									children: t(errorKey(data.prError ?? "repair-pr-repository"))
								}),
								repair?.workspace?.prUrl ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
									href: repair.workspace.prUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									children: t("viewRepairPr")
								}) : repair ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: t("prPending")
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									disabled: busy,
									onClick: () => {
										action(async () => setData(await remote.reportActions(id)));
									},
									children: t("refreshDelivery")
								})
							] }) : null
						]
					}) : null,
					data.run?.repairSource ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: "muted",
						children: [
							t("rescanRepairBranch"),
							": ",
							data.run.repairSource.branch,
							data.run.repairSource.prUrl ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [" · ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: data.run.repairSource.prUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("viewRepairPr")
							})] }) : null
						]
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "actions",
						children: [
							canContinue ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								className: "primary",
								disabled: busy,
								onClick: () => {
									action(async () => {
										openSession((await remote.continueRepair(id)).sessionId);
									});
								},
								children: [
									t("continueRepair"),
									" · ",
									t("repairRound").replace("{n}", String(data.repairChain.round))
								]
							}) : null,
							data.repairable && findings.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								className: canContinue ? "" : "primary",
								disabled: busy || !repair && (!selected.length || mode === "pr" && !data.prPreview),
								onClick: () => {
									action(async () => {
										const result = await remote.repair(id, repair?.findingIds ?? selected, repair?.mode ?? mode, data.prPreview?.revision);
										setData(await remote.reportActions(id));
										openSession(result.sessionId);
									});
								},
								children: repair ? t(repair.admitted ? "openRepair" : "retryRepair") : t(mode === "pr" ? "repairPrSelected" : "repairSelected") + (selected.length ? " (" + selected.length + ")" : "")
							}) : null,
							data.run ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								disabled: busy || runs.some((run) => run.taskId === data.run.taskId && [
									"queued",
									"running",
									"cancelling"
								].includes(run.status)),
								onClick: () => {
									action(async () => {
										await remote.rescan(id);
										showRuns();
									});
								},
								children: t(repair?.mode === "pr" || data.run?.repairSource ? "rescanRepairBranch" : "rescan")
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t("rescanUnavailable")
							}),
							rescan ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								disabled: busy,
								onClick: () => rescan.reportId ? openReport(rescan.reportId) : showRuns(),
								children: rescan.reportId ? t("viewComparison") : t("viewProgress")
							}) : null
						]
					}),
					data.comparison ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
						className: "comparison",
						open: true,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("comparisonTitle") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t(data.comparison.comparable ? "comparisonHint" : "comparisonIncomplete")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								disabled: busy,
								onClick: () => openReport(data.comparison.previousId),
								children: t("previousReport")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "comparison-counts",
								children: [
									"notObserved",
									"remaining",
									"added",
									"unverified"
								].map((change) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "tag",
									children: [
										t(change),
										" · ",
										data.comparison.items.filter((item) => item.change === change).length
									]
								}, change))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "finding-list",
								children: data.comparison.items.map((item, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "finding-row",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "tag",
										children: t(item.change)
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [
										t(item.category),
										" · ",
										place(item),
										" · ",
										t(item.status === "confirmed" ? "resultConfirmed" : item.status === "dismissed" ? "resultDismissed" : "resultPending")
									] })] })]
								}, index))
							})
						]
					}) : null
				]
			});
		}
		//#endregion
		//#region src/client/ModelPicker.tsx
		const key = (value) => JSON.stringify([value.provider, value.model]);
		function modelChoices(models, selected) {
			const choices = [...new Map(models.map((model) => [key(model), model])).values()];
			return selected.provider && !choices.some((model) => key(model) === key(selected)) ? [...choices, {
				...selected,
				name: selected.model,
				providerName: selected.provider,
				saved: true
			}] : choices;
		}
		function ModelPicker({ remote, value, defaultModel, onChange, t }) {
			const [catalog, setCatalog] = (0, react.useState)({
				models: [],
				partial: false
			});
			const [revision, refresh] = (0, react.useState)(0), [loading, setLoading] = (0, react.useState)(true);
			(0, react.useEffect)(() => {
				let disposed = false;
				setLoading(true);
				remote.models().then((result) => {
					if (!disposed) setCatalog(result);
				}).catch(() => {
					if (!disposed) setCatalog((current) => ({
						...current,
						partial: true
					}));
				}).finally(() => {
					if (!disposed) setLoading(false);
				});
				return () => {
					disposed = true;
				};
			}, [remote, revision]);
			const choices = modelChoices(catalog.models, value);
			const defaultName = defaultModel ? catalog.models.find((model) => key(model) === key(defaultModel)) : void 0;
			const defaultLabel = defaultModel ? defaultName ? defaultName.name + " · " + defaultName.providerName : defaultModel.model : t("agentModelMissing");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "model-picker",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: "field",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("agentAdvanced") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							value: value.provider ? key(value) : "",
							onChange: (event) => {
								const choice = choices.find((model) => key(model) === event.target.value);
								if (choice) onChange({
									provider: choice.provider,
									model: choice.model
								});
								else if (!event.target.value) onChange({
									provider: "",
									model: ""
								});
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
								value: "",
								children: [
									t("agentDefault"),
									" · ",
									defaultLabel
								]
							}), choices.map((model) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
								value: key(model),
								children: [
									model.name,
									model.name !== model.model ? " (" + model.model + ")" : "",
									" · ",
									model.providerName,
									model.saved ? " · " + t("agentSavedModel") : ""
								]
							}, key(model)))]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: loading,
						onClick: () => refresh((value) => value + 1),
						children: t(loading ? "agentModelsLoading" : "agentModelsRefresh")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted",
						role: "status",
						children: t(loading ? "agentModelsLoading" : catalog.partial ? "agentModelsFailed" : catalog.models.length ? "agentModelsHint" : "agentModelsEmpty")
					}),
					choices.some((model) => model.saved) && !loading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted",
						children: t("agentSavedModelHint")
					}) : null
				]
			});
		}
		//#endregion
		//#region src/client/Suppressions.tsx
		/** Settings section for user exclusions; it loads independently so a broken list never hides other settings. */
		function Suppressions({ remote, t, busy, action, notify }) {
			const [items, setItems] = (0, react.useState)(), [error, setError] = (0, react.useState)(""), [query, setQuery] = (0, react.useState)("");
			const load = async () => {
				try {
					setItems(await remote.suppressions());
					setError("");
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : "operation-failed");
				}
			};
			(0, react.useEffect)(() => {
				load();
			}, [remote]);
			const needle = query.trim().toLowerCase();
			const visible = (items ?? []).filter((item) => [
				item.sourceLabel,
				item.file,
				item.reason,
				item.title,
				item.rule
			].join(" ").toLowerCase().includes(needle));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "card suppressions",
				"aria-label": t("suppressionsTitle"),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "card-head",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "grow",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: t("suppressionsTitle") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "muted",
							children: t("suppressionsHint")
						})]
					}), items ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "tag",
						children: items.length
					}) : null]
				}), error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "alert",
					role: "alert",
					children: t(errorKey(error))
				}) : !items ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					role: "status",
					children: t("loading")
				}) : !items.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "muted",
					children: t("suppressionsEmpty")
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [items.length > 5 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					className: "search",
					"aria-label": t("suppressionSearch"),
					placeholder: t("suppressionSearch"),
					value: query,
					onChange: (event) => setQuery(event.target.value)
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "finding-list",
					children: [visible.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "finding-row",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "grow",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: item.title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [
									item.sourceLabel,
									" · ",
									item.file,
									" · ",
									item.rule
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [
									new Date(item.createdAt).toLocaleDateString(),
									" · ",
									item.reason
								] })
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							disabled: busy,
							"aria-label": t("suppressionRestore") + " " + item.title,
							onClick: () => {
								action(async () => {
									try {
										await remote.unsuppress(item.id);
										notify(t("suppressionRestored"));
									} finally {
										await load();
									}
								});
							},
							children: t("suppressionRestore")
						})]
					}, item.id)), !visible.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "empty",
						children: t("noMatches")
					}) : null]
				})] })]
			});
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
		var _a$1;
		function $constructor(name, initializer, params) {
			function init(inst, def) {
				if (!inst._zod) Object.defineProperty(inst, "_zod", {
					value: {
						def,
						constr: _,
						traits: /* @__PURE__ */ new Set()
					},
					enumerable: false
				});
				if (inst._zod.traits.has(name)) return;
				inst._zod.traits.add(name);
				initializer(inst, def);
				const proto = _.prototype;
				const keys = Object.keys(proto);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					if (!(k in inst)) inst[k] = proto[k].bind(inst);
				}
			}
			const Parent = params?.Parent ?? Object;
			class Definition extends Parent {}
			Object.defineProperty(Definition, "name", { value: name });
			function _(def) {
				var _a;
				const inst = params?.Parent ? new Definition() : this;
				init(inst, def);
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				for (const fn of inst._zod.deferred) fn();
				return inst;
			}
			Object.defineProperty(_, "init", { value: init });
			Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
				if (params?.Parent && inst instanceof params.Parent) return true;
				return inst?._zod?.traits?.has(name);
			} });
			Object.defineProperty(_, "name", { value: name });
			return _;
		}
		var $ZodAsyncError = class extends Error {
			constructor() {
				super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
			}
		};
		var $ZodEncodeError = class extends Error {
			constructor(name) {
				super(`Encountered unidirectional transform during encode: ${name}`);
				this.name = "ZodEncodeError";
			}
		};
		(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
		const globalConfig = globalThis.__zod_globalConfig;
		function config(newConfig) {
			if (newConfig) Object.assign(globalConfig, newConfig);
			return globalConfig;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
		function getEnumValues(entries) {
			const numericValues = Object.values(entries).filter((v) => typeof v === "number");
			return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
		}
		function jsonStringifyReplacer(_, value) {
			if (typeof value === "bigint") return value.toString();
			return value;
		}
		function cached(getter) {
			return { get value() {
				{
					const value = getter();
					Object.defineProperty(this, "value", { value });
					return value;
				}
			} };
		}
		function nullish(input) {
			return input === null || input === void 0;
		}
		function cleanRegex(source) {
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			return source.slice(start, end);
		}
		function floatSafeRemainder(val, step) {
			const ratio = val / step;
			const roundedRatio = Math.round(ratio);
			const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
			if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
			return ratio - roundedRatio;
		}
		const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
		function defineLazy(object, key, getter) {
			let value = void 0;
			Object.defineProperty(object, key, {
				get() {
					if (value === EVALUATING) return;
					if (value === void 0) {
						value = EVALUATING;
						value = getter();
					}
					return value;
				},
				set(v) {
					Object.defineProperty(object, key, { value: v });
				},
				configurable: true
			});
		}
		function assignProp(target, prop, value) {
			Object.defineProperty(target, prop, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		function mergeDefs(...defs) {
			const mergedDescriptors = {};
			for (const def of defs) {
				const descriptors = Object.getOwnPropertyDescriptors(def);
				Object.assign(mergedDescriptors, descriptors);
			}
			return Object.defineProperties({}, mergedDescriptors);
		}
		function esc(str) {
			return JSON.stringify(str);
		}
		function slugify(input) {
			return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}
		const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
		function isObject(data) {
			return typeof data === "object" && data !== null && !Array.isArray(data);
		}
		const allowsEval = /* @__PURE__*/ cached(() => {
			if (globalConfig.jitless) return false;
			if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
			try {
				new Function("");
				return true;
			} catch (_) {
				return false;
			}
		});
		function isPlainObject(o) {
			if (isObject(o) === false) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			if (typeof ctor !== "function") return true;
			const prot = ctor.prototype;
			if (isObject(prot) === false) return false;
			if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
			return true;
		}
		function shallowClone(o) {
			if (isPlainObject(o)) return { ...o };
			if (Array.isArray(o)) return [...o];
			if (o instanceof Map) return new Map(o);
			if (o instanceof Set) return new Set(o);
			return o;
		}
		const propertyKeyTypes = /* @__PURE__*/ new Set([
			"string",
			"number",
			"symbol"
		]);
		function escapeRegex(str) {
			return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function clone(inst, def, params) {
			const cl = new inst._zod.constr(def ?? inst._zod.def);
			if (!def || params?.parent) cl._zod.parent = inst;
			return cl;
		}
		function normalizeParams(_params) {
			const params = _params;
			if (!params) return {};
			if (typeof params === "string") return { error: () => params };
			if (params?.message !== void 0) {
				if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
				params.error = params.message;
			}
			delete params.message;
			if (typeof params.error === "string") return {
				...params,
				error: () => params.error
			};
			return params;
		}
		function optionalKeys(shape) {
			return Object.keys(shape).filter((k) => {
				return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
			});
		}
		const NUMBER_FORMAT_RANGES = {
			safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			int32: [-2147483648, 2147483647],
			uint32: [0, 4294967295],
			float32: [-34028234663852886e22, 34028234663852886e22],
			float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
		};
		function pick(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = {};
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						newShape[key] = currDef.shape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function omit(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = { ...schema._zod.def.shape };
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						delete newShape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function extend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) {
				const existingShape = schema._zod.def.shape;
				for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function safeExtend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function merge(a, b) {
			if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			return clone(a, mergeDefs(a._zod.def, {
				get shape() {
					const _shape = {
						...a._zod.def.shape,
						...b._zod.def.shape
					};
					assignProp(this, "shape", _shape);
					return _shape;
				},
				get catchall() {
					return b._zod.def.catchall;
				},
				checks: b._zod.def.checks ?? []
			}));
		}
		function partial(Class, schema, mask) {
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const oldShape = schema._zod.def.shape;
					const shape = { ...oldShape };
					if (mask) for (const key in mask) {
						if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						shape[key] = Class ? new Class({
							type: "optional",
							innerType: oldShape[key]
						}) : oldShape[key];
					}
					else for (const key in oldShape) shape[key] = Class ? new Class({
						type: "optional",
						innerType: oldShape[key]
					}) : oldShape[key];
					assignProp(this, "shape", shape);
					return shape;
				},
				checks: []
			}));
		}
		function required(Class, schema, mask) {
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const oldShape = schema._zod.def.shape;
				const shape = { ...oldShape };
				if (mask) for (const key in mask) {
					if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
					if (!mask[key]) continue;
					shape[key] = new Class({
						type: "nonoptional",
						innerType: oldShape[key]
					});
				}
				else for (const key in oldShape) shape[key] = new Class({
					type: "nonoptional",
					innerType: oldShape[key]
				});
				assignProp(this, "shape", shape);
				return shape;
			} }));
		}
		function aborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
			return false;
		}
		function explicitlyAborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
			return false;
		}
		function prefixIssues(path, issues) {
			return issues.map((iss) => {
				var _a;
				(_a = iss).path ?? (_a.path = []);
				iss.path.unshift(path);
				return iss;
			});
		}
		function unwrapMessage(message) {
			return typeof message === "string" ? message : message?.message;
		}
		function finalizeIssue(iss, ctx, config) {
			const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
			const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
			rest.path ?? (rest.path = []);
			rest.message = message;
			if (ctx?.reportInput) rest.input = _input;
			return rest;
		}
		function getLengthableOrigin(input) {
			if (Array.isArray(input)) return "array";
			if (typeof input === "string") return "string";
			return "unknown";
		}
		function issue(...args) {
			const [iss, input, inst] = args;
			if (typeof iss === "string") return {
				message: iss,
				code: "custom",
				input,
				inst
			};
			return { ...iss };
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
		const initializer$1 = (inst, def) => {
			inst.name = "$ZodError";
			Object.defineProperty(inst, "_zod", {
				value: inst._zod,
				enumerable: false
			});
			Object.defineProperty(inst, "issues", {
				value: def,
				enumerable: false
			});
			inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
			Object.defineProperty(inst, "toString", {
				value: () => inst.message,
				enumerable: false
			});
		};
		const $ZodError = $constructor("$ZodError", initializer$1);
		const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
		function flattenError(error, mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of error.issues) if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		function formatError(error, mapper = (issue) => issue.message) {
			const fieldErrors = { _errors: [] };
			const processError = (error, path = []) => {
				for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
				else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else {
					const fullpath = [...path, ...issue.path];
					if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
					else {
						let curr = fieldErrors;
						let i = 0;
						while (i < fullpath.length) {
							const el = fullpath[i];
							if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
							else {
								curr[el] = curr[el] || { _errors: [] };
								curr[el]._errors.push(mapper(issue));
							}
							curr = curr[el];
							i++;
						}
					}
				}
			};
			processError(error);
			return fieldErrors;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
		const _parse = (_Err) => (schema, value, _ctx, _params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			if (result.issues.length) {
				const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, _params?.callee);
				throw e;
			}
			return result.value;
		};
		const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			if (result.issues.length) {
				const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, params?.callee);
				throw e;
			}
			return result.value;
		};
		const _safeParse = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			return result.issues.length ? {
				success: false,
				error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
		const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			return result.issues.length ? {
				success: false,
				error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
		const _encode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parse(_Err)(schema, value, ctx);
		};
		const _decode = (_Err) => (schema, value, _ctx) => {
			return _parse(_Err)(schema, value, _ctx);
		};
		const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parseAsync(_Err)(schema, value, ctx);
		};
		const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _parseAsync(_Err)(schema, value, _ctx);
		};
		const _safeEncode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParse(_Err)(schema, value, ctx);
		};
		const _safeDecode = (_Err) => (schema, value, _ctx) => {
			return _safeParse(_Err)(schema, value, _ctx);
		};
		const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParseAsync(_Err)(schema, value, ctx);
		};
		const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _safeParseAsync(_Err)(schema, value, _ctx);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const cuid = /^[cC][0-9a-z]{6,}$/;
		const cuid2 = /^[0-9a-z]+$/;
		const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
		const xid = /^[0-9a-vA-V]{20}$/;
		const ksuid = /^[A-Za-z0-9]{27}$/;
		const nanoid = /^[a-zA-Z0-9_-]{21}$/;
		/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
		const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
		/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
		const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
		/** Returns a regex for validating an RFC 9562/4122 UUID.
		*
		* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
		const uuid = (version) => {
			if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
			return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
		};
		/** Practical email validation */
		const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
		const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
		function emoji() {
			return new RegExp(_emoji$1, "u");
		}
		const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
		const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
		const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
		const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
		const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
		const base64url = /^[A-Za-z0-9_-]*$/;
		const httpProtocol = /^https?$/;
		const e164 = /^\+[1-9]\d{6,14}$/;
		const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
		const date$2 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
		function timeSource(args) {
			const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
			return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
		}
		function time$1(args) {
			return new RegExp(`^${timeSource(args)}$`);
		}
		function datetime$1(args) {
			const time = timeSource({ precision: args.precision });
			const opts = ["Z"];
			if (args.local) opts.push("");
			if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
			const timeRegex = `${time}(?:${opts.join("|")})`;
			return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
		}
		const string$1 = (params) => {
			const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
			return new RegExp(`^${regex}$`);
		};
		const integer = /^-?\d+$/;
		const number$1 = /^-?\d+(?:\.\d+)?$/;
		const boolean$1 = /^(?:true|false)$/i;
		const lowercase = /^[^A-Z]*$/;
		const uppercase = /^[^a-z]*$/;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
		const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
			var _a;
			inst._zod ?? (inst._zod = {});
			inst._zod.def = def;
			(_a = inst._zod).onattach ?? (_a.onattach = []);
		});
		const numericOriginMap = {
			number: "number",
			bigint: "bigint",
			object: "date"
		};
		const $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
				if (def.value < curr) {
					if (def.inclusive) bag.maximum = def.value;
					else bag.exclusiveMaximum = def.value;
				}
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
				if (def.value > curr) {
					if (def.inclusive) bag.minimum = def.value;
					else bag.exclusiveMinimum = def.value;
				}
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				var _a;
				(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
			});
			inst._zod.check = (payload) => {
				if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
				if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
				payload.issues.push({
					origin: typeof payload.value,
					code: "not_multiple_of",
					divisor: def.value,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
			$ZodCheck.init(inst, def);
			def.format = def.format || "float64";
			const isInt = def.format?.includes("int");
			const origin = isInt ? "int" : "number";
			const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				bag.minimum = minimum;
				bag.maximum = maximum;
				if (isInt) bag.pattern = integer;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (isInt) {
					if (!Number.isInteger(input)) {
						payload.issues.push({
							expected: origin,
							format: def.format,
							code: "invalid_type",
							continue: false,
							input,
							inst
						});
						return;
					}
					if (!Number.isSafeInteger(input)) {
						if (input > 0) payload.issues.push({
							input,
							code: "too_big",
							maximum: Number.MAX_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						else payload.issues.push({
							input,
							code: "too_small",
							minimum: Number.MIN_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						return;
					}
				}
				if (input < minimum) payload.issues.push({
					origin: "number",
					input,
					code: "too_small",
					minimum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
				if (input > maximum) payload.issues.push({
					origin: "number",
					input,
					code: "too_big",
					maximum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
				if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length <= def.maximum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: def.maximum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
				if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length >= def.minimum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: def.minimum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.minimum = def.length;
				bag.maximum = def.length;
				bag.length = def.length;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				const length = input.length;
				if (length === def.length) return;
				const origin = getLengthableOrigin(input);
				const tooBig = length > def.length;
				payload.issues.push({
					origin,
					...tooBig ? {
						code: "too_big",
						maximum: def.length
					} : {
						code: "too_small",
						minimum: def.length
					},
					inclusive: true,
					exact: true,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
			var _a, _b;
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				if (def.pattern) {
					bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
					bag.patterns.add(def.pattern);
				}
			});
			if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: def.format,
					input: payload.value,
					...def.pattern ? { pattern: def.pattern.toString() } : {},
					inst,
					continue: !def.abort
				});
			});
			else (_b = inst._zod).check ?? (_b.check = () => {});
		});
		const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "regex",
					input: payload.value,
					pattern: def.pattern.toString(),
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
			def.pattern ?? (def.pattern = lowercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
			def.pattern ?? (def.pattern = uppercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
			$ZodCheck.init(inst, def);
			const escapedRegex = escapeRegex(def.includes);
			const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
			def.pattern = pattern;
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.includes(def.includes, def.position)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "includes",
					includes: def.includes,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.startsWith(def.prefix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "starts_with",
					prefix: def.prefix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.endsWith(def.suffix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "ends_with",
					suffix: def.suffix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.check = (payload) => {
				payload.value = def.tx(payload.value);
			};
		});
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
		var Doc = class {
			constructor(args = []) {
				this.content = [];
				this.indent = 0;
				if (this) this.args = args;
			}
			indented(fn) {
				this.indent += 1;
				fn(this);
				this.indent -= 1;
			}
			write(arg) {
				if (typeof arg === "function") {
					arg(this, { execution: "sync" });
					arg(this, { execution: "async" });
					return;
				}
				const lines = arg.split("\n").filter((x) => x);
				const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
				const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
				for (const line of dedented) this.content.push(line);
			}
			compile() {
				const F = Function;
				const args = this?.args;
				const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
				return new F(...args, lines.join("\n"));
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
		const version = {
			major: 4,
			minor: 4,
			patch: 3
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
		const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
			var _a;
			inst ?? (inst = {});
			inst._zod.def = def;
			inst._zod.bag = inst._zod.bag || {};
			inst._zod.version = version;
			const checks = [...inst._zod.def.checks ?? []];
			if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
			for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
			if (checks.length === 0) {
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				inst._zod.deferred?.push(() => {
					inst._zod.run = inst._zod.parse;
				});
			} else {
				const runChecks = (payload, checks, ctx) => {
					let isAborted = aborted(payload);
					let asyncResult;
					for (const ch of checks) {
						if (ch._zod.def.when) {
							if (explicitlyAborted(payload)) continue;
							if (!ch._zod.def.when(payload)) continue;
						} else if (isAborted) continue;
						const currLen = payload.issues.length;
						const _ = ch._zod.check(payload);
						if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
						if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
							await _;
							if (payload.issues.length === currLen) return;
							if (!isAborted) isAborted = aborted(payload, currLen);
						});
						else {
							if (payload.issues.length === currLen) continue;
							if (!isAborted) isAborted = aborted(payload, currLen);
						}
					}
					if (asyncResult) return asyncResult.then(() => {
						return payload;
					});
					return payload;
				};
				const handleCanaryResult = (canary, payload, ctx) => {
					if (aborted(canary)) {
						canary.aborted = true;
						return canary;
					}
					const checkResult = runChecks(payload, checks, ctx);
					if (checkResult instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
					}
					return inst._zod.parse(checkResult, ctx);
				};
				inst._zod.run = (payload, ctx) => {
					if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
					if (ctx.direction === "backward") {
						const canary = inst._zod.parse({
							value: payload.value,
							issues: []
						}, {
							...ctx,
							skipChecks: true
						});
						if (canary instanceof Promise) return canary.then((canary) => {
							return handleCanaryResult(canary, payload, ctx);
						});
						return handleCanaryResult(canary, payload, ctx);
					}
					const result = inst._zod.parse(payload, ctx);
					if (result instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return result.then((result) => runChecks(result, checks, ctx));
					}
					return runChecks(result, checks, ctx);
				};
			}
			defineLazy(inst, "~standard", () => ({
				validate: (value) => {
					try {
						const r = safeParse$1(inst, value);
						return r.success ? { value: r.data } : { issues: r.error?.issues };
					} catch (_) {
						return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
					}
				},
				vendor: "zod",
				version: 1
			}));
		});
		const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
			inst._zod.parse = (payload, _) => {
				if (def.coerce) try {
					payload.value = String(payload.value);
				} catch (_) {}
				if (typeof payload.value === "string") return payload;
				payload.issues.push({
					expected: "string",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			$ZodString.init(inst, def);
		});
		const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
			def.pattern ?? (def.pattern = guid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
			if (def.version) {
				const v = {
					v1: 1,
					v2: 2,
					v3: 3,
					v4: 4,
					v5: 5,
					v6: 6,
					v7: 7,
					v8: 8
				}[def.version];
				if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
				def.pattern ?? (def.pattern = uuid(v));
			} else def.pattern ?? (def.pattern = uuid());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
			def.pattern ?? (def.pattern = email);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				try {
					const trimmed = payload.value.trim();
					if (!def.normalize && def.protocol?.source === httpProtocol.source) {
						if (!/^https?:\/\//i.test(trimmed)) {
							payload.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: payload.value,
								inst,
								continue: !def.abort
							});
							return;
						}
					}
					const url = new URL(trimmed);
					if (def.hostname) {
						def.hostname.lastIndex = 0;
						if (!def.hostname.test(url.hostname)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid hostname",
							pattern: def.hostname.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.protocol) {
						def.protocol.lastIndex = 0;
						if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid protocol",
							pattern: def.protocol.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.normalize) payload.value = url.href;
					else payload.value = trimmed;
					return;
				} catch (_) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
			def.pattern ?? (def.pattern = emoji());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
			def.pattern ?? (def.pattern = nanoid);
			$ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
			def.pattern ?? (def.pattern = cuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
			def.pattern ?? (def.pattern = cuid2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
			def.pattern ?? (def.pattern = ulid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
			def.pattern ?? (def.pattern = xid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
			def.pattern ?? (def.pattern = ksuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
			def.pattern ?? (def.pattern = datetime$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
			def.pattern ?? (def.pattern = date$2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
			def.pattern ?? (def.pattern = time$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
			def.pattern ?? (def.pattern = duration$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
			def.pattern ?? (def.pattern = ipv4);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv4`;
		});
		const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
			def.pattern ?? (def.pattern = ipv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv6`;
			inst._zod.check = (payload) => {
				try {
					new URL(`http://[${payload.value}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "ipv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv4);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				const parts = payload.value.split("/");
				try {
					if (parts.length !== 2) throw new Error();
					const [address, prefix] = parts;
					if (!prefix) throw new Error();
					const prefixNum = Number(prefix);
					if (`${prefixNum}` !== prefix) throw new Error();
					if (prefixNum < 0 || prefixNum > 128) throw new Error();
					new URL(`http://[${address}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		function isValidBase64(data) {
			if (data === "") return true;
			if (/\s/.test(data)) return false;
			if (data.length % 4 !== 0) return false;
			try {
				atob(data);
				return true;
			} catch {
				return false;
			}
		}
		const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
			def.pattern ?? (def.pattern = base64);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64";
			inst._zod.check = (payload) => {
				if (isValidBase64(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		function isValidBase64URL(data) {
			if (!base64url.test(data)) return false;
			const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
			return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
		}
		const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
			def.pattern ?? (def.pattern = base64url);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64url";
			inst._zod.check = (payload) => {
				if (isValidBase64URL(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
			def.pattern ?? (def.pattern = e164);
			$ZodStringFormat.init(inst, def);
		});
		function isValidJWT(token, algorithm = null) {
			try {
				const tokensParts = token.split(".");
				if (tokensParts.length !== 3) return false;
				const [header] = tokensParts;
				if (!header) return false;
				const parsedHeader = JSON.parse(atob(header));
				if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
				if (!parsedHeader.alg) return false;
				if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
				return true;
			} catch {
				return false;
			}
		}
		const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				if (isValidJWT(payload.value, def.alg)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "jwt",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Number(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
				const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
				payload.issues.push({
					expected: "number",
					code: "invalid_type",
					input,
					inst,
					...received ? { received } : {}
				});
				return payload;
			};
		});
		const $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
			$ZodCheckNumberFormat.init(inst, def);
			$ZodNumber.init(inst, def);
		});
		const $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = boolean$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Boolean(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "boolean") return payload;
				payload.issues.push({
					expected: "boolean",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload) => payload;
		});
		const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				payload.issues.push({
					expected: "never",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		function handleArrayResult(result, final, index) {
			if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
			final.value[index] = result.value;
		}
		const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!Array.isArray(input)) {
					payload.issues.push({
						expected: "array",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = Array(input.length);
				const proms = [];
				for (let i = 0; i < input.length; i++) {
					const item = input[i];
					const result = def.element._zod.run({
						value: item,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
					else handleArrayResult(result, payload, i);
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
			const isPresent = key in input;
			if (result.issues.length) {
				if (isOptionalIn && isOptionalOut && !isPresent) return;
				final.issues.push(...prefixIssues(key, result.issues));
			}
			if (!isPresent && !isOptionalIn) {
				if (!result.issues.length) final.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [key]
				});
				return;
			}
			if (result.value === void 0) {
				if (isPresent) final.value[key] = void 0;
			} else final.value[key] = result.value;
		}
		function normalizeDef(def) {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				...def,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		}
		function handleCatchall(proms, input, payload, ctx, def, inst) {
			const unrecognized = [];
			const keySet = def.keySet;
			const _catchall = def.catchall._zod;
			const t = _catchall.def.type;
			const isOptionalIn = _catchall.optin === "optional";
			const isOptionalOut = _catchall.optout === "optional";
			for (const key in input) {
				if (key === "__proto__") continue;
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
				else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		}
		const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
			$ZodType.init(inst, def);
			if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
				const sh = def.shape;
				Object.defineProperty(def, "shape", { get: () => {
					const newSh = { ...sh };
					Object.defineProperty(def, "shape", { value: newSh });
					return newSh;
				} });
			}
			const _normalized = cached(() => normalizeDef(def));
			defineLazy(inst._zod, "propValues", () => {
				const shape = def.shape;
				const propValues = {};
				for (const key in shape) {
					const field = shape[key]._zod;
					if (field.values) {
						propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
						for (const v of field.values) propValues[key].add(v);
					}
				}
				return propValues;
			});
			const isObject$1 = isObject;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$1(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = {};
				const proms = [];
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const isOptionalIn = el._zod.optin === "optional";
					const isOptionalOut = el._zod.optout === "optional";
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
					else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
				}
				if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
				return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
			};
		});
		const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
			$ZodObject.init(inst, def);
			const superParse = inst._zod.parse;
			const _normalized = cached(() => normalizeDef(def));
			const generateFastpass = (shape) => {
				const doc = new Doc([
					"shape",
					"payload",
					"ctx"
				]);
				const normalized = _normalized.value;
				const parseStr = (key) => {
					const k = esc(key);
					return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
				};
				doc.write(`const input = payload.value;`);
				const ids = Object.create(null);
				let counter = 0;
				for (const key of normalized.keys) ids[key] = `key_${counter++}`;
				doc.write(`const newResult = {};`);
				for (const key of normalized.keys) {
					const id = ids[key];
					const k = esc(key);
					const schema = shape[key];
					const isOptionalIn = schema?._zod?.optin === "optional";
					const isOptionalOut = schema?._zod?.optout === "optional";
					doc.write(`const ${id} = ${parseStr(key)};`);
					if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
					else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
					else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
				}
				doc.write(`payload.value = newResult;`);
				doc.write(`return payload;`);
				const fn = doc.compile();
				return (payload, ctx) => fn(shape, payload, ctx);
			};
			let fastpass;
			const isObject$2 = isObject;
			const jit = !globalConfig.jitless;
			const fastEnabled = jit && allowsEval.value;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$2(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
					if (!fastpass) fastpass = generateFastpass(def.shape);
					payload = fastpass(payload, ctx);
					if (!catchall) return payload;
					return handleCatchall([], input, payload, ctx, value, inst);
				}
				return superParse(payload, ctx);
			};
		});
		function handleUnionResults(results, final, inst, ctx) {
			for (const result of results) if (result.issues.length === 0) {
				final.value = result.value;
				return final;
			}
			const nonaborted = results.filter((r) => !aborted(r));
			if (nonaborted.length === 1) {
				final.value = nonaborted[0].value;
				return nonaborted[0];
			}
			final.issues.push({
				code: "invalid_union",
				input: final.value,
				inst,
				errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			});
			return final;
		}
		const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "values", () => {
				if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
			});
			defineLazy(inst._zod, "pattern", () => {
				if (def.options.every((o) => o._zod.pattern)) {
					const patterns = def.options.map((o) => o._zod.pattern);
					return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
				}
			});
			const first = def.options.length === 1 ? def.options[0]._zod.run : null;
			inst._zod.parse = (payload, ctx) => {
				if (first) return first(payload, ctx);
				let async = false;
				const results = [];
				for (const option of def.options) {
					const result = option._zod.run({
						value: payload.value,
						issues: []
					}, ctx);
					if (result instanceof Promise) {
						results.push(result);
						async = true;
					} else {
						if (result.issues.length === 0) return result;
						results.push(result);
					}
				}
				if (!async) return handleUnionResults(results, payload, inst, ctx);
				return Promise.all(results).then((results) => {
					return handleUnionResults(results, payload, inst, ctx);
				});
			};
		});
		const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				const left = def.left._zod.run({
					value: input,
					issues: []
				}, ctx);
				const right = def.right._zod.run({
					value: input,
					issues: []
				}, ctx);
				if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
					return handleIntersectionResults(payload, left, right);
				});
				return handleIntersectionResults(payload, left, right);
			};
		});
		function mergeValues(a, b) {
			if (a === b) return {
				valid: true,
				data: a
			};
			if (a instanceof Date && b instanceof Date && +a === +b) return {
				valid: true,
				data: a
			};
			if (isPlainObject(a) && isPlainObject(b)) {
				const bKeys = Object.keys(b);
				const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
				const newObj = {
					...a,
					...b
				};
				for (const key of sharedKeys) {
					const sharedValue = mergeValues(a[key], b[key]);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
					};
					newObj[key] = sharedValue.data;
				}
				return {
					valid: true,
					data: newObj
				};
			}
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return {
					valid: false,
					mergeErrorPath: []
				};
				const newArray = [];
				for (let index = 0; index < a.length; index++) {
					const itemA = a[index];
					const itemB = b[index];
					const sharedValue = mergeValues(itemA, itemB);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
					};
					newArray.push(sharedValue.data);
				}
				return {
					valid: true,
					data: newArray
				};
			}
			return {
				valid: false,
				mergeErrorPath: []
			};
		}
		function handleIntersectionResults(result, left, right) {
			const unrecKeys = /* @__PURE__ */ new Map();
			let unrecIssue;
			for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
				unrecIssue ?? (unrecIssue = iss);
				for (const k of iss.keys) {
					if (!unrecKeys.has(k)) unrecKeys.set(k, {});
					unrecKeys.get(k).l = true;
				}
			} else result.issues.push(iss);
			for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
				if (!unrecKeys.has(k)) unrecKeys.set(k, {});
				unrecKeys.get(k).r = true;
			}
			else result.issues.push(iss);
			const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
			if (bothKeys.length && unrecIssue) result.issues.push({
				...unrecIssue,
				keys: bothKeys
			});
			if (aborted(result)) return result;
			const merged = mergeValues(left.value, right.value);
			if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
			result.value = merged.data;
			return result;
		}
		const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
			$ZodType.init(inst, def);
			const values = getEnumValues(def.entries);
			const valuesSet = new Set(values);
			inst._zod.values = valuesSet;
			inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (valuesSet.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
			$ZodType.init(inst, def);
			if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
			const values = new Set(def.values);
			inst._zod.values = values;
			inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (values.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values: def.values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				const _out = def.transform(payload.value, payload);
				if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				if (_out instanceof Promise) throw new $ZodAsyncError();
				payload.value = _out;
				payload.fallback = true;
				return payload;
			};
		});
		function handleOptionalResult(result, input) {
			if (input === void 0 && (result.issues.length || result.fallback)) return {
				issues: [],
				value: void 0
			};
			return result;
		}
		const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.optout = "optional";
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
			});
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (def.innerType._zod.optin === "optional") {
					const input = payload.value;
					const result = def.innerType._zod.run(payload, ctx);
					if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
					return handleOptionalResult(result, input);
				}
				if (payload.value === void 0) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
			inst._zod.parse = (payload, ctx) => {
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
			});
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (payload.value === null) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) {
					payload.value = def.defaultValue;
					/**
					* $ZodDefault returns the default value immediately in forward direction.
					* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
					return payload;
				}
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
				return handleDefaultResult(result, def);
			};
		});
		function handleDefaultResult(payload, def) {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return payload;
		}
		const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) payload.value = def.defaultValue;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => {
				const v = def.innerType._zod.values;
				return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
				return handleNonOptionalResult(result, inst);
			};
		});
		function handleNonOptionalResult(payload, inst) {
			if (!payload.issues.length && payload.value === void 0) payload.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: payload.value,
				inst
			});
			return payload;
		}
		const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => {
					payload.value = result.value;
					if (result.issues.length) {
						payload.value = def.catchValue({
							...payload,
							error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
							input: payload.value
						});
						payload.issues = [];
						payload.fallback = true;
					}
					return payload;
				});
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
					payload.fallback = true;
				}
				return payload;
			};
		});
		const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => def.in._zod.values);
			defineLazy(inst._zod, "optin", () => def.in._zod.optin);
			defineLazy(inst._zod, "optout", () => def.out._zod.optout);
			defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") {
					const right = def.out._zod.run(payload, ctx);
					if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
					return handlePipeResult(right, def.in, ctx);
				}
				const left = def.in._zod.run(payload, ctx);
				if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
				return handlePipeResult(left, def.out, ctx);
			};
		});
		function handlePipeResult(left, next, ctx) {
			if (left.issues.length) {
				left.aborted = true;
				return left;
			}
			return next._zod.run({
				value: left.value,
				issues: left.issues,
				fallback: left.fallback
			}, ctx);
		}
		const $ZodPreprocess = /*@__PURE__*/ $constructor("$ZodPreprocess", (inst, def) => {
			$ZodPipe.init(inst, def);
		});
		const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
			defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then(handleReadonlyResult);
				return handleReadonlyResult(result);
			};
		});
		function handleReadonlyResult(payload) {
			payload.value = Object.freeze(payload.value);
			return payload;
		}
		const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
			$ZodCheck.init(inst, def);
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _) => {
				return payload;
			};
			inst._zod.check = (payload) => {
				const input = payload.value;
				const r = def.fn(input);
				if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
				handleRefineResult(r, payload, input, inst);
			};
		});
		function handleRefineResult(result, payload, input, inst) {
			if (!result) {
				const _iss = {
					code: "custom",
					input,
					inst,
					path: [...inst._zod.def.path ?? []],
					continue: !inst._zod.def.abort
				};
				if (inst._zod.def.params) _iss.params = inst._zod.def.params;
				payload.issues.push(issue(_iss));
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
		var _a;
		var $ZodRegistry = class {
			constructor() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
			}
			add(schema, ..._meta) {
				const meta = _meta[0];
				this._map.set(schema, meta);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
				return this;
			}
			clear() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
				return this;
			}
			remove(schema) {
				const meta = this._map.get(schema);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
				this._map.delete(schema);
				return this;
			}
			get(schema) {
				const p = schema._zod.parent;
				if (p) {
					const pm = { ...this.get(p) ?? {} };
					delete pm.id;
					const f = {
						...pm,
						...this._map.get(schema)
					};
					return Object.keys(f).length ? f : void 0;
				}
				return this._map.get(schema);
			}
			has(schema) {
				return this._map.has(schema);
			}
		};
		function registry() {
			return new $ZodRegistry();
		}
		(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
		const globalRegistry = globalThis.__zod_globalRegistry;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
		// @__NO_SIDE_EFFECTS__
		function _string(Class, params) {
			return new Class({
				type: "string",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _email(Class, params) {
			return new Class({
				type: "string",
				format: "email",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _guid(Class, params) {
			return new Class({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuid(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv4(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v4",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv6(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v6",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv7(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v7",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _url(Class, params) {
			return new Class({
				type: "string",
				format: "url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _emoji(Class, params) {
			return new Class({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _nanoid(Class, params) {
			return new Class({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link _cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		// @__NO_SIDE_EFFECTS__
		function _cuid(Class, params) {
			return new Class({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cuid2(Class, params) {
			return new Class({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ulid(Class, params) {
			return new Class({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _xid(Class, params) {
			return new Class({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ksuid(Class, params) {
			return new Class({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv4(Class, params) {
			return new Class({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv6(Class, params) {
			return new Class({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv4(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv6(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64(Class, params) {
			return new Class({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64url(Class, params) {
			return new Class({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _e164(Class, params) {
			return new Class({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _jwt(Class, params) {
			return new Class({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDateTime(Class, params) {
			return new Class({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: false,
				local: false,
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDate(Class, params) {
			return new Class({
				type: "string",
				format: "date",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoTime(Class, params) {
			return new Class({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDuration(Class, params) {
			return new Class({
				type: "string",
				format: "duration",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _number(Class, params) {
			return new Class({
				type: "number",
				checks: [],
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _int(Class, params) {
			return new Class({
				type: "number",
				check: "number_format",
				abort: false,
				format: "safeint",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _boolean(Class, params) {
			return new Class({
				type: "boolean",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _unknown(Class) {
			return new Class({ type: "unknown" });
		}
		// @__NO_SIDE_EFFECTS__
		function _never(Class, params) {
			return new Class({
				type: "never",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lt(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lte(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gt(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gte(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _multipleOf(value, params) {
			return new $ZodCheckMultipleOf({
				check: "multiple_of",
				...normalizeParams(params),
				value
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _maxLength(maximum, params) {
			return new $ZodCheckMaxLength({
				check: "max_length",
				...normalizeParams(params),
				maximum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _minLength(minimum, params) {
			return new $ZodCheckMinLength({
				check: "min_length",
				...normalizeParams(params),
				minimum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _length(length, params) {
			return new $ZodCheckLengthEquals({
				check: "length_equals",
				...normalizeParams(params),
				length
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _regex(pattern, params) {
			return new $ZodCheckRegex({
				check: "string_format",
				format: "regex",
				...normalizeParams(params),
				pattern
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lowercase(params) {
			return new $ZodCheckLowerCase({
				check: "string_format",
				format: "lowercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uppercase(params) {
			return new $ZodCheckUpperCase({
				check: "string_format",
				format: "uppercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _includes(includes, params) {
			return new $ZodCheckIncludes({
				check: "string_format",
				format: "includes",
				...normalizeParams(params),
				includes
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _startsWith(prefix, params) {
			return new $ZodCheckStartsWith({
				check: "string_format",
				format: "starts_with",
				...normalizeParams(params),
				prefix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _endsWith(suffix, params) {
			return new $ZodCheckEndsWith({
				check: "string_format",
				format: "ends_with",
				...normalizeParams(params),
				suffix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _overwrite(tx) {
			return new $ZodCheckOverwrite({
				check: "overwrite",
				tx
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _normalize(form) {
			return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
		}
		// @__NO_SIDE_EFFECTS__
		function _trim() {
			return /* @__PURE__ */ _overwrite((input) => input.trim());
		}
		// @__NO_SIDE_EFFECTS__
		function _toLowerCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _toUpperCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _slugify() {
			return /* @__PURE__ */ _overwrite((input) => slugify(input));
		}
		// @__NO_SIDE_EFFECTS__
		function _array(Class, element, params) {
			return new Class({
				type: "array",
				element,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _refine(Class, fn, _params) {
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...normalizeParams(_params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _superRefine(fn, params) {
			const ch = /* @__PURE__ */ _check((payload) => {
				payload.addIssue = (issue$2) => {
					if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
					else {
						const _issue = issue$2;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = ch);
						_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
						payload.issues.push(issue(_issue));
					}
				};
				return fn(payload.value, payload);
			}, params);
			return ch;
		}
		// @__NO_SIDE_EFFECTS__
		function _check(fn, params) {
			const ch = new $ZodCheck({
				check: "custom",
				...normalizeParams(params)
			});
			ch._zod.check = fn;
			return ch;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
		function initializeContext(params) {
			let target = params?.target ?? "draft-2020-12";
			if (target === "draft-4") target = "draft-04";
			if (target === "draft-7") target = "draft-07";
			return {
				processors: params.processors ?? {},
				metadataRegistry: params?.metadata ?? globalRegistry,
				target,
				unrepresentable: params?.unrepresentable ?? "throw",
				override: params?.override ?? (() => {}),
				io: params?.io ?? "output",
				counter: 0,
				seen: /* @__PURE__ */ new Map(),
				cycles: params?.cycles ?? "ref",
				reused: params?.reused ?? "inline",
				external: params?.external ?? void 0
			};
		}
		function process(schema, ctx, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const seen = ctx.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			ctx.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
				else {
					const _json = result.schema;
					const processor = ctx.processors[def.type];
					if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
					processor(schema, ctx, _json, params);
				}
				const parent = schema._zod.parent;
				if (parent) {
					if (!result.ref) result.ref = parent;
					process(parent, ctx, params);
					ctx.seen.get(parent).isParent = true;
				}
			}
			const meta = ctx.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (ctx.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return ctx.seen.get(schema).schema;
		}
		function extractDefs(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const idToSchema = /* @__PURE__ */ new Map();
			for (const entry of ctx.seen.entries()) {
				const id = ctx.metadataRegistry.get(entry[0])?.id;
				if (id) {
					const existing = idToSchema.get(id);
					if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
					idToSchema.set(id, entry[0]);
				}
			}
			const makeURI = (entry) => {
				const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
				if (ctx.external) {
					const externalId = ctx.external.registry.get(entry[0])?.id;
					const uriGenerator = ctx.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (ctx.external) {
					const ext = ctx.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (ctx.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (ctx.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
		}
		function finalize(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const flattenRef = (zodSchema) => {
				const seen = ctx.seen.get(zodSchema);
				if (seen.ref === null) return;
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref);
					const refSeen = ctx.seen.get(ref);
					const refSchema = refSeen.schema;
					if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else Object.assign(schema, refSchema);
					Object.assign(schema, _cached);
					if (zodSchema._zod.parent === ref) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (!(key in _cached)) delete schema[key];
					}
					if (refSchema.$ref && refSeen.def) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
					}
				}
				const parent = zodSchema._zod.parent;
				if (parent && parent !== ref) {
					flattenRef(parent);
					const parentSeen = ctx.seen.get(parent);
					if (parentSeen?.schema.$ref) {
						schema.$ref = parentSeen.schema.$ref;
						if (parentSeen.def) for (const key in schema) {
							if (key === "$ref" || key === "allOf") continue;
							if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
						}
					}
				}
				ctx.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
			const result = {};
			if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
			else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
			else if (ctx.target === "openapi-3.0") {}
			if (ctx.external?.uri) {
				const id = ctx.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = ctx.external.uri(id);
			}
			Object.assign(result, root.def ?? root.schema);
			const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
			if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
			const defs = ctx.external?.defs ?? {};
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) {
					if (seen.def.id === seen.defId) delete seen.def.id;
					defs[seen.defId] = seen.def;
				}
			}
			if (ctx.external) {} else if (Object.keys(defs).length > 0) {
				if (ctx.target === "draft-2020-12") result.$defs = defs;
				else result.definitions = defs;
			}
			try {
				const finalized = JSON.parse(JSON.stringify(result));
				Object.defineProperty(finalized, "~standard", {
					value: {
						...schema["~standard"],
						jsonSchema: {
							input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
							output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
						}
					},
					enumerable: false,
					writable: false
				});
				return finalized;
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
		function isTransforming(_schema, _ctx) {
			const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
			if (ctx.seen.has(_schema)) return false;
			ctx.seen.add(_schema);
			const def = _schema._zod.def;
			if (def.type === "transform") return true;
			if (def.type === "array") return isTransforming(def.element, ctx);
			if (def.type === "set") return isTransforming(def.valueType, ctx);
			if (def.type === "lazy") return isTransforming(def.getter(), ctx);
			if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
			if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			if (def.type === "pipe") {
				if (_schema._zod.traits.has("$ZodCodec")) return true;
				return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			}
			if (def.type === "object") {
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			}
			if (def.type === "union") {
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			}
			if (def.type === "tuple") {
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			}
			return false;
		}
		/**
		* Creates a toJSONSchema method for a schema instance.
		* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
		*/
		const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
			const ctx = initializeContext({
				...params,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
			const { libraryOptions, target } = params ?? {};
			const ctx = initializeContext({
				...libraryOptions ?? {},
				target,
				io,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
		const formatMap = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: ""
		};
		const stringProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			json.type = "string";
			const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
			if (typeof minimum === "number") json.minLength = minimum;
			if (typeof maximum === "number") json.maxLength = maximum;
			if (format) {
				json.format = formatMap[format] ?? format;
				if (json.format === "") delete json.format;
				if (format === "time") delete json.format;
			}
			if (contentEncoding) json.contentEncoding = contentEncoding;
			if (patterns && patterns.size > 0) {
				const regexes = [...patterns];
				if (regexes.length === 1) json.pattern = regexes[0].source;
				else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
					...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
					pattern: regex.source
				}))];
			}
		};
		const numberProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
			if (typeof format === "string" && format.includes("int")) json.type = "integer";
			else json.type = "number";
			const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
			const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
			const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
			if (exMin) {
				if (legacy) {
					json.minimum = exclusiveMinimum;
					json.exclusiveMinimum = true;
				} else json.exclusiveMinimum = exclusiveMinimum;
			} else if (typeof minimum === "number") json.minimum = minimum;
			if (exMax) {
				if (legacy) {
					json.maximum = exclusiveMaximum;
					json.exclusiveMaximum = true;
				} else json.exclusiveMaximum = exclusiveMaximum;
			} else if (typeof maximum === "number") json.maximum = maximum;
			if (typeof multipleOf === "number") json.multipleOf = multipleOf;
		};
		const booleanProcessor = (_schema, _ctx, json, _params) => {
			json.type = "boolean";
		};
		const neverProcessor = (_schema, _ctx, json, _params) => {
			json.not = {};
		};
		const enumProcessor = (schema, _ctx, json, _params) => {
			const def = schema._zod.def;
			const values = getEnumValues(def.entries);
			if (values.every((v) => typeof v === "number")) json.type = "number";
			if (values.every((v) => typeof v === "string")) json.type = "string";
			json.enum = values;
		};
		const literalProcessor = (schema, ctx, json, _params) => {
			const def = schema._zod.def;
			const vals = [];
			for (const val of def.values) if (val === void 0) {
				if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
			} else if (typeof val === "bigint") {
				if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
				else vals.push(Number(val));
			} else vals.push(val);
			if (vals.length === 0) {} else if (vals.length === 1) {
				const val = vals[0];
				json.type = val === null ? "null" : typeof val;
				if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
				else json.const = val;
			} else {
				if (vals.every((v) => typeof v === "number")) json.type = "number";
				if (vals.every((v) => typeof v === "string")) json.type = "string";
				if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
				if (vals.every((v) => v === null)) json.type = "null";
				json.enum = vals;
			}
		};
		const customProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
		};
		const transformProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
		};
		const arrayProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			const { minimum, maximum } = schema._zod.bag;
			if (typeof minimum === "number") json.minItems = minimum;
			if (typeof maximum === "number") json.maxItems = maximum;
			json.type = "array";
			json.items = process(def.element, ctx, {
				...params,
				path: [...params.path, "items"]
			});
		};
		const objectProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			json.properties = {};
			const shape = def.shape;
			for (const key in shape) json.properties[key] = process(shape[key], ctx, {
				...params,
				path: [
					...params.path,
					"properties",
					key
				]
			});
			const allKeys = new Set(Object.keys(shape));
			const requiredKeys = new Set([...allKeys].filter((key) => {
				const v = def.shape[key]._zod;
				if (ctx.io === "input") return v.optin === void 0;
				else return v.optout === void 0;
			}));
			if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
			if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
			else if (!def.catchall) {
				if (ctx.io === "output") json.additionalProperties = false;
			} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
				...params,
				path: [...params.path, "additionalProperties"]
			});
		};
		const unionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const isExclusive = def.inclusive === false;
			const options = def.options.map((x, i) => process(x, ctx, {
				...params,
				path: [
					...params.path,
					isExclusive ? "oneOf" : "anyOf",
					i
				]
			}));
			if (isExclusive) json.oneOf = options;
			else json.anyOf = options;
		};
		const intersectionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const a = process(def.left, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					0
				]
			});
			const b = process(def.right, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					1
				]
			});
			const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
			json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
		};
		const nullableProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const inner = process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			if (ctx.target === "openapi-3.0") {
				seen.ref = def.innerType;
				json.nullable = true;
			} else json.anyOf = [inner, { type: "null" }];
		};
		const nonoptionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		const defaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.default = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const prefaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const catchProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			let catchValue;
			try {
				catchValue = def.catchValue(void 0);
			} catch {
				throw new Error("Dynamic catch values are not supported in JSON Schema");
			}
			json.default = catchValue;
		};
		const pipeProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			const inIsTransform = def.in._zod.traits.has("$ZodTransform");
			const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
			process(innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = innerType;
		};
		const readonlyProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.readOnly = true;
		};
		const optionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
		const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
			$ZodISODateTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function datetime(params) {
			return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
		}
		const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
			$ZodISODate.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function date$1(params) {
			return /* @__PURE__ */ _isoDate(ZodISODate, params);
		}
		const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
			$ZodISOTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function time(params) {
			return /* @__PURE__ */ _isoTime(ZodISOTime, params);
		}
		const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
			$ZodISODuration.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function duration(params) {
			return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
		const initializer = (inst, issues) => {
			$ZodError.init(inst, issues);
			inst.name = "ZodError";
			Object.defineProperties(inst, {
				format: { value: (mapper) => formatError(inst, mapper) },
				flatten: { value: (mapper) => flattenError(inst, mapper) },
				addIssue: { value: (issue) => {
					inst.issues.push(issue);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				addIssues: { value: (issues) => {
					inst.issues.push(...issues);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				isEmpty: { get() {
					return inst.issues.length === 0;
				} }
			});
		};
		const ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
		const parse = /* @__PURE__ */ _parse(ZodRealError);
		const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
		const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
		const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
		const encode = /* @__PURE__ */ _encode(ZodRealError);
		const decode = /* @__PURE__ */ _decode(ZodRealError);
		const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
		const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
		const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
		const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
		const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
		const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
		const _installedGroups = /* @__PURE__ */ new WeakMap();
		function _installLazyMethods(inst, group, methods) {
			const proto = Object.getPrototypeOf(inst);
			let installed = _installedGroups.get(proto);
			if (!installed) {
				installed = /* @__PURE__ */ new Set();
				_installedGroups.set(proto, installed);
			}
			if (installed.has(group)) return;
			installed.add(group);
			for (const key in methods) {
				const fn = methods[key];
				Object.defineProperty(proto, key, {
					configurable: true,
					enumerable: false,
					get() {
						const bound = fn.bind(this);
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: bound
						});
						return bound;
					},
					set(v) {
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: v
						});
					}
				});
			}
		}
		const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
			$ZodType.init(inst, def);
			Object.assign(inst["~standard"], { jsonSchema: {
				input: createStandardJSONSchemaMethod(inst, "input"),
				output: createStandardJSONSchemaMethod(inst, "output")
			} });
			inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
			inst.def = def;
			inst.type = def.type;
			Object.defineProperty(inst, "_def", { value: def });
			inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
			inst.safeParse = (data, params) => safeParse(inst, data, params);
			inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
			inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
			inst.spa = inst.safeParseAsync;
			inst.encode = (data, params) => encode(inst, data, params);
			inst.decode = (data, params) => decode(inst, data, params);
			inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
			inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
			inst.safeEncode = (data, params) => safeEncode(inst, data, params);
			inst.safeDecode = (data, params) => safeDecode(inst, data, params);
			inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
			inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
			_installLazyMethods(inst, "ZodType", {
				check(...chks) {
					const def = this.def;
					return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
						check: ch,
						def: { check: "custom" },
						onattach: []
					} } : ch)] }), { parent: true });
				},
				with(...chks) {
					return this.check(...chks);
				},
				clone(def, params) {
					return clone(this, def, params);
				},
				brand() {
					return this;
				},
				register(reg, meta) {
					reg.add(this, meta);
					return this;
				},
				refine(check, params) {
					return this.check(refine(check, params));
				},
				superRefine(refinement, params) {
					return this.check(superRefine(refinement, params));
				},
				overwrite(fn) {
					return this.check(/* @__PURE__ */ _overwrite(fn));
				},
				optional() {
					return optional(this);
				},
				exactOptional() {
					return exactOptional(this);
				},
				nullable() {
					return nullable(this);
				},
				nullish() {
					return optional(nullable(this));
				},
				nonoptional(params) {
					return nonoptional(this, params);
				},
				array() {
					return array(this);
				},
				or(arg) {
					return union([this, arg]);
				},
				and(arg) {
					return intersection(this, arg);
				},
				transform(tx) {
					return pipe(this, transform(tx));
				},
				default(d) {
					return _default(this, d);
				},
				prefault(d) {
					return prefault(this, d);
				},
				catch(params) {
					return _catch(this, params);
				},
				pipe(target) {
					return pipe(this, target);
				},
				readonly() {
					return readonly(this);
				},
				describe(description) {
					const cl = this.clone();
					globalRegistry.add(cl, { description });
					return cl;
				},
				meta(...args) {
					if (args.length === 0) return globalRegistry.get(this);
					const cl = this.clone();
					globalRegistry.add(cl, args[0]);
					return cl;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(fn) {
					return fn(this);
				}
			});
			Object.defineProperty(inst, "description", {
				get() {
					return globalRegistry.get(inst)?.description;
				},
				configurable: true
			});
			return inst;
		});
		/** @internal */
		const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
			const bag = inst._zod.bag;
			inst.format = bag.format ?? null;
			inst.minLength = bag.minimum ?? null;
			inst.maxLength = bag.maximum ?? null;
			_installLazyMethods(inst, "_ZodString", {
				regex(...args) {
					return this.check(/* @__PURE__ */ _regex(...args));
				},
				includes(...args) {
					return this.check(/* @__PURE__ */ _includes(...args));
				},
				startsWith(...args) {
					return this.check(/* @__PURE__ */ _startsWith(...args));
				},
				endsWith(...args) {
					return this.check(/* @__PURE__ */ _endsWith(...args));
				},
				min(...args) {
					return this.check(/* @__PURE__ */ _minLength(...args));
				},
				max(...args) {
					return this.check(/* @__PURE__ */ _maxLength(...args));
				},
				length(...args) {
					return this.check(/* @__PURE__ */ _length(...args));
				},
				nonempty(...args) {
					return this.check(/* @__PURE__ */ _minLength(1, ...args));
				},
				lowercase(params) {
					return this.check(/* @__PURE__ */ _lowercase(params));
				},
				uppercase(params) {
					return this.check(/* @__PURE__ */ _uppercase(params));
				},
				trim() {
					return this.check(/* @__PURE__ */ _trim());
				},
				normalize(...args) {
					return this.check(/* @__PURE__ */ _normalize(...args));
				},
				toLowerCase() {
					return this.check(/* @__PURE__ */ _toLowerCase());
				},
				toUpperCase() {
					return this.check(/* @__PURE__ */ _toUpperCase());
				},
				slugify() {
					return this.check(/* @__PURE__ */ _slugify());
				}
			});
		});
		const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			_ZodString.init(inst, def);
			inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
			inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
			inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
			inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
			inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
			inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
			inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
			inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
			inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
			inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
			inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
			inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
			inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
			inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
			inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
			inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
			inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
			inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
			inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
			inst.datetime = (params) => inst.check(datetime(params));
			inst.date = (params) => inst.check(date$1(params));
			inst.time = (params) => inst.check(time(params));
			inst.duration = (params) => inst.check(duration(params));
		});
		function string(params) {
			return /* @__PURE__ */ _string(ZodString, params);
		}
		const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			_ZodString.init(inst, def);
		});
		const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
			$ZodEmail.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
			$ZodGUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
			$ZodUUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
			$ZodURL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
			$ZodEmoji.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
			$ZodNanoID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
			$ZodCUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
			$ZodCUID2.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
			$ZodULID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
			$ZodXID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
			$ZodKSUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
			$ZodIPv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
			$ZodIPv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
			$ZodCIDRv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
			$ZodCIDRv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
			$ZodBase64.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
			$ZodBase64URL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
			$ZodE164.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
			$ZodJWT.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
			$ZodNumber.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
			_installLazyMethods(inst, "ZodNumber", {
				gt(value, params) {
					return this.check(/* @__PURE__ */ _gt(value, params));
				},
				gte(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				min(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				lt(value, params) {
					return this.check(/* @__PURE__ */ _lt(value, params));
				},
				lte(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				max(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				int(params) {
					return this.check(int(params));
				},
				safe(params) {
					return this.check(int(params));
				},
				positive(params) {
					return this.check(/* @__PURE__ */ _gt(0, params));
				},
				nonnegative(params) {
					return this.check(/* @__PURE__ */ _gte(0, params));
				},
				negative(params) {
					return this.check(/* @__PURE__ */ _lt(0, params));
				},
				nonpositive(params) {
					return this.check(/* @__PURE__ */ _lte(0, params));
				},
				multipleOf(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				step(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				finite() {
					return this;
				}
			});
			const bag = inst._zod.bag;
			inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
			inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
			inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
			inst.isFinite = true;
			inst.format = bag.format ?? null;
		});
		function number(params) {
			return /* @__PURE__ */ _number(ZodNumber, params);
		}
		const ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
			$ZodNumberFormat.init(inst, def);
			ZodNumber.init(inst, def);
		});
		function int(params) {
			return /* @__PURE__ */ _int(ZodNumberFormat, params);
		}
		const ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
			$ZodBoolean.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
		});
		function boolean(params) {
			return /* @__PURE__ */ _boolean(ZodBoolean, params);
		}
		const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
			$ZodUnknown.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => void 0;
		});
		function unknown() {
			return /* @__PURE__ */ _unknown(ZodUnknown);
		}
		const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
			$ZodNever.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
		});
		function never(params) {
			return /* @__PURE__ */ _never(ZodNever, params);
		}
		const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
			$ZodArray.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
			inst.element = def.element;
			_installLazyMethods(inst, "ZodArray", {
				min(n, params) {
					return this.check(/* @__PURE__ */ _minLength(n, params));
				},
				nonempty(params) {
					return this.check(/* @__PURE__ */ _minLength(1, params));
				},
				max(n, params) {
					return this.check(/* @__PURE__ */ _maxLength(n, params));
				},
				length(n, params) {
					return this.check(/* @__PURE__ */ _length(n, params));
				},
				unwrap() {
					return this.element;
				}
			});
		});
		function array(element, params) {
			return /* @__PURE__ */ _array(ZodArray, element, params);
		}
		const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
			$ZodObjectJIT.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
			defineLazy(inst, "shape", () => {
				return def.shape;
			});
			_installLazyMethods(inst, "ZodObject", {
				keyof() {
					return _enum(Object.keys(this._zod.def.shape));
				},
				catchall(catchall) {
					return this.clone({
						...this._zod.def,
						catchall
					});
				},
				passthrough() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				loose() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				strict() {
					return this.clone({
						...this._zod.def,
						catchall: never()
					});
				},
				strip() {
					return this.clone({
						...this._zod.def,
						catchall: void 0
					});
				},
				extend(incoming) {
					return extend(this, incoming);
				},
				safeExtend(incoming) {
					return safeExtend(this, incoming);
				},
				merge(other) {
					return merge(this, other);
				},
				pick(mask) {
					return pick(this, mask);
				},
				omit(mask) {
					return omit(this, mask);
				},
				partial(...args) {
					return partial(ZodOptional, this, args[0]);
				},
				required(...args) {
					return required(ZodNonOptional, this, args[0]);
				}
			});
		});
		function object(shape, params) {
			const def = {
				type: "object",
				shape: shape ?? {},
				...normalizeParams(params)
			};
			return new ZodObject(def);
		}
		const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
			$ZodUnion.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
			inst.options = def.options;
		});
		function union(options, params) {
			return new ZodUnion({
				type: "union",
				options,
				...normalizeParams(params)
			});
		}
		const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
			$ZodIntersection.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
		});
		function intersection(left, right) {
			return new ZodIntersection({
				type: "intersection",
				left,
				right
			});
		}
		const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
			$ZodEnum.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
			inst.enum = def.entries;
			inst.options = Object.values(def.entries);
			const keys = new Set(Object.keys(def.entries));
			inst.extract = (values, params) => {
				const newEntries = {};
				for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
			inst.exclude = (values, params) => {
				const newEntries = { ...def.entries };
				for (const value of values) if (keys.has(value)) delete newEntries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
		});
		function _enum(values, params) {
			const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
			return new ZodEnum({
				type: "enum",
				entries,
				...normalizeParams(params)
			});
		}
		const ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
			$ZodLiteral.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
			inst.values = new Set(def.values);
			Object.defineProperty(inst, "value", { get() {
				if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
				return def.values[0];
			} });
		});
		function literal(value, params) {
			return new ZodLiteral({
				type: "literal",
				values: Array.isArray(value) ? value : [value],
				...normalizeParams(params)
			});
		}
		const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
			$ZodTransform.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
			inst._zod.parse = (payload, _ctx) => {
				if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				payload.addIssue = (issue$1) => {
					if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
					else {
						const _issue = issue$1;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = inst);
						payload.issues.push(issue(_issue));
					}
				};
				const output = def.transform(payload.value, payload);
				if (output instanceof Promise) return output.then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				payload.value = output;
				payload.fallback = true;
				return payload;
			};
		});
		function transform(fn) {
			return new ZodTransform({
				type: "transform",
				transform: fn
			});
		}
		const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function optional(innerType) {
			return new ZodOptional({
				type: "optional",
				innerType
			});
		}
		const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
			$ZodExactOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function exactOptional(innerType) {
			return new ZodExactOptional({
				type: "optional",
				innerType
			});
		}
		const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
			$ZodNullable.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nullable(innerType) {
			return new ZodNullable({
				type: "nullable",
				innerType
			});
		}
		const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
			$ZodDefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeDefault = inst.unwrap;
		});
		function _default(innerType, defaultValue) {
			return new ZodDefault({
				type: "default",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
			$ZodPrefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function prefault(innerType, defaultValue) {
			return new ZodPrefault({
				type: "prefault",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
			$ZodNonOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nonoptional(innerType, params) {
			return new ZodNonOptional({
				type: "nonoptional",
				innerType,
				...normalizeParams(params)
			});
		}
		const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
			$ZodCatch.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeCatch = inst.unwrap;
		});
		function _catch(innerType, catchValue) {
			return new ZodCatch({
				type: "catch",
				innerType,
				catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
			});
		}
		const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
			$ZodPipe.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
			inst.in = def.in;
			inst.out = def.out;
		});
		function pipe(in_, out) {
			return new ZodPipe({
				type: "pipe",
				in: in_,
				out
			});
		}
		const ZodPreprocess = /*@__PURE__*/ $constructor("ZodPreprocess", (inst, def) => {
			ZodPipe.init(inst, def);
			$ZodPreprocess.init(inst, def);
		});
		const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
			$ZodReadonly.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function readonly(innerType) {
			return new ZodReadonly({
				type: "readonly",
				innerType
			});
		}
		const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
			$ZodCustom.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
		});
		function refine(fn, _params = {}) {
			return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
		}
		function superRefine(fn, params) {
			return /* @__PURE__ */ _superRefine(fn, params);
		}
		function preprocess(fn, schema) {
			return new ZodPreprocess({
				type: "pipe",
				in: transform(fn),
				out: schema
			});
		}
		//#endregion
		//#region src/agent-contract.ts
		/** Shared configuration and audit metadata; safe to import in the browser. */
		const AgentPolicySchema = object({
			enabled: boolean().default(false),
			provider: string().trim().max(200).default(""),
			model: string().trim().max(200).default(""),
			maxSteps: number().int().min(3).max(40).optional(),
			maxMinutes: number().int().min(1).max(30).optional(),
			maxTokens: number().int().min(1024).max(16384).optional()
		}).strict().refine((value) => !value.enabled || Boolean(value.provider) === Boolean(value.model), "Provider and model must be selected together");
		const ReviewAreaSchema = _enum([
			"entry-points",
			"authentication",
			"authorization",
			"injection",
			"data-exposure",
			"business-logic"
		]);
		const AgentEventSchema = object({
			step: number().int().nonnegative(),
			kind: _enum([
				"planning",
				"listing",
				"reading",
				"reviewing",
				"rejected",
				"finished"
			]),
			files: array(string().max(2e3)).max(10).default([]),
			code: string().regex(/^[a-z-]{1,80}$/u).optional(),
			count: number().int().nonnegative().default(0)
		}).strict();
		const AgentAuditSchema = object({
			status: _enum(["completed", "incomplete"]),
			reason: _enum([
				"completed",
				"step-limit",
				"time-limit",
				"context-limit",
				"output-limit",
				"model-unavailable",
				"preset-unavailable",
				"model-failed",
				"invalid-response",
				"evidence-unavailable",
				"cancelled"
			]),
			preset: string().max(200).optional(),
			nativeEnd: string().max(80).optional(),
			nativeErrorCode: string().max(100).optional(),
			provider: string().max(200),
			model: string().max(200),
			steps: number().int().nonnegative(),
			areas: array(ReviewAreaSchema).max(6),
			files: array(string().max(2e3)).max(5e3),
			eligibleCandidates: number().int().nonnegative().optional(),
			excludedCandidates: number().int().nonnegative().optional(),
			reviewedFindings: number().int().nonnegative(),
			additionalFindings: number().int().nonnegative().default(0),
			inputTokens: number().nonnegative(),
			outputTokens: number().nonnegative(),
			cacheReadTokens: number().nonnegative().default(0),
			cacheWriteTokens: number().nonnegative().default(0),
			usageAvailable: boolean(),
			events: array(AgentEventSchema).max(200)
		}).strict();
		function formatTokenCount(value) {
			if (!Number.isFinite(value) || value < 0) return "0";
			const compact = (unit, suffix) => (value / unit).toFixed(1).replace(/\.0$/u, "") + suffix;
			if (value >= 1e6) return compact(1e6, "M");
			if (value >= 1e3) return compact(1e3, "K");
			return String(Math.round(value));
		}
		function cacheHitPercent(inputTokens, cacheReadTokens) {
			if (!(inputTokens > 0 && cacheReadTokens > 0)) return;
			return Math.min(100, Math.round(100 * cacheReadTokens / inputTokens));
		}
		/** Compact usage for lists: `24.1M tok · 缓存命中 98%`. Omits cache when the provider did not report reads. */
		function formatAgentUsage(audit, cacheHitLabel) {
			if (!audit.usageAvailable) return;
			const total = formatTokenCount(audit.inputTokens + audit.outputTokens) + " tok";
			const hit = cacheHitPercent(audit.inputTokens, audit.cacheReadTokens);
			return hit === void 0 ? total : total + " · " + cacheHitLabel + " " + hit + "%";
		}
		//#endregion
		//#region src/ui-contract.ts
		/** Browser-safe configuration and wire contracts. No filesystem or scanner imports. */
		const SECURITY_CHANNEL = "/security-scan";
		const shortText = string().trim().max(2e3);
		/** Runtime checks target an explicit HTTP(S) service; credentials and fragments never enter stored config. */
		function dynamicTarget(value) {
			const url = new URL(value);
			if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.hash) throw new Error("dynamic-url");
			return url;
		}
		const validTarget = (value) => {
			try {
				dynamicTarget(value);
				return true;
			} catch {
				return false;
			}
		};
		const RepairModeSchema = _enum(["pr", "local"]);
		const RepairWorkspaceSchema = object({
			repository: shortText,
			repositoryUrl: shortText,
			base: shortText,
			commit: string().regex(/^[a-f0-9]{40,64}$/),
			branch: shortText,
			directory: shortText,
			target: shortText,
			sourceIdentity: shortText,
			prUrl: string().url().optional()
		}).strict();
		/** 0.17 and earlier pinned one chosen report; that choice now means the task's previous report. */
		function legacyBaseline(value) {
			if (!value || typeof value !== "object" || Array.isArray(value) || !("baselineId" in value || Reflect.get(value, "baseline") === "report")) return value;
			const { baselineId: _pinned, ...config } = value;
			return config.baseline === "report" ? {
				...config,
				baseline: "previous"
			} : config;
		}
		const TaskConfigSchema = preprocess(legacyBaseline, object({
			name: string().trim().min(1).max(100),
			kind: _enum(["local", "remote"]),
			target: shortText.min(1),
			ref: shortText.default(""),
			scope: _enum([
				"full",
				"diff",
				"staged"
			]),
			/** `previous` compares with the newest report of the same task, resolved when a run is queued. */
			baseline: _enum([
				"none",
				"git",
				"previous"
			]),
			base: shortText.default(""),
			engine: _enum(["auto", "inventory"]),
			dependencies: boolean().default(false),
			secrets: boolean().default(false),
			syncSession: boolean().default(true),
			repairMode: RepairModeSchema.default("pr"),
			dynamicUrl: shortText.default(""),
			dynamicAuthorized: boolean().default(false),
			view: _enum(["all", "new"]).default("all"),
			autoScan: boolean().default(false),
			agent: AgentPolicySchema.default(() => AgentPolicySchema.parse({}))
		}).strict().superRefine((value, ctx) => {
			const invalid = (field) => ctx.addIssue({
				code: "custom",
				message: "Invalid task combination",
				path: [field]
			});
			if (value.scope === "diff" && (value.baseline !== "git" || !value.base)) invalid("base");
			if (value.baseline === "git" && !value.base) invalid("base");
			if (value.scope === "staged" && (value.kind !== "local" || value.ref || value.baseline !== "none")) invalid("scope");
			if (value.autoScan && (value.kind !== "local" || value.ref || value.scope === "staged")) invalid("autoScan");
			if (value.dynamicUrl && (!validTarget(value.dynamicUrl) || !value.dynamicAuthorized)) invalid("dynamicUrl");
		}));
		/** Conversation scans reuse their own task per target; workbench tasks are never rewritten by a conversation. */
		const TaskSchema = object({
			id: string().uuid(),
			revision: number().int().positive(),
			updatedAt: string().datetime(),
			config: TaskConfigSchema,
			origin: _enum(["workbench", "conversation"]).optional()
		}).strict();
		/** Runs from 0.17 and earlier kept their pinned comparison report inside the config; it is the run's baseline. */
		function legacyRun(value) {
			if (!value || typeof value !== "object" || Array.isArray(value) || "baselineReportId" in value) return value;
			const config = Reflect.get(value, "config");
			const pinned = config && typeof config === "object" && Reflect.get(config, "baseline") === "report" ? Reflect.get(config, "baselineId") : void 0;
			return typeof pinned === "string" && pinned ? {
				...value,
				baselineReportId: pinned
			} : value;
		}
		const RunSchema = preprocess(legacyRun, object({
			id: string().uuid(),
			taskId: string().uuid(),
			config: TaskConfigSchema,
			status: _enum([
				"queued",
				"running",
				"cancelling",
				"succeeded",
				"partial",
				"failed",
				"cancelled",
				"interrupted"
			]),
			phase: _enum([
				"queued",
				"preparing",
				"scanning",
				"baseline",
				"dynamic",
				"report",
				"agent",
				"finished"
			]),
			trigger: _enum([
				"manual",
				"edit",
				"conversation",
				"repair"
			]),
			createdAt: string().datetime(),
			finishedAt: string().datetime().optional(),
			reportId: string().uuid().optional(),
			rulesReportId: string().uuid().optional(),
			reportRoot: shortText.optional(),
			error: shortText.optional(),
			previousReportId: string().uuid().optional(),
			previousReportRoot: shortText.optional(),
			/** Report this run compares with when the task baseline is `previous`; absent means a first scan. */
			baselineReportId: string().uuid().optional(),
			repairSource: RepairWorkspaceSchema.optional(),
			repair: object({
				mode: RepairModeSchema.default("local"),
				workspace: RepairWorkspaceSchema.optional(),
				admitted: boolean().optional(),
				requestId: string().uuid(),
				sessionId: string().max(200),
				findingIds: array(string().max(200)).min(1).max(20)
			}).strict().optional(),
			originSessionId: string().max(200).optional(),
			/** Repair conversation that requested this rescan and receives its final notice. */
			repairSessionId: string().max(200).optional(),
			sessionId: string().max(200).optional(),
			sessionWarning: boolean().optional(),
			diagnostics: array(shortText).max(12).optional(),
			findings: number().int().nonnegative().optional(),
			coverage: _enum(["complete", "partial"]).optional(),
			/** `added` is present only when a comparable baseline decided which findings are new. */
			resultSummary: object({
				confirmed: number().int().nonnegative(),
				pending: number().int().nonnegative(),
				dismissed: number().int().nonnegative(),
				added: number().int().nonnegative().optional()
			}).strict().optional(),
			agent: AgentAuditSchema.optional()
		}).strict());
		const SettingsSchema = object({
			semgrepPath: shortText.min(1),
			gitleaksPath: shortText.min(1),
			reportDirectory: shortText.min(1),
			autoScan: boolean(),
			hookTools: array(string().trim().min(1).max(100)).max(30)
		}).strict();
		const ReportItemSchema = object({
			id: string().uuid(),
			createdAt: string(),
			source: string(),
			scope: string(),
			findings: number(),
			json: string(),
			html: string(),
			agent: object({
				model: string().max(400),
				usageAvailable: boolean(),
				inputTokens: number().nonnegative(),
				outputTokens: number().nonnegative(),
				cacheReadTokens: number().nonnegative()
			}).strict().optional()
		});
		const ToolchainStateSchema = object({
			status: _enum([
				"idle",
				"installing",
				"ready",
				"failed"
			]),
			phase: _enum([
				"idle",
				"checking",
				"download",
				"python",
				"semgrep",
				"gitleaks",
				"ready"
			]),
			semgrep: string(),
			gitleaks: string(),
			error: string()
		});
		const ModelCatalogSchema = object({
			models: array(object({
				provider: string().min(1),
				providerName: string(),
				model: string().min(1),
				name: string()
			})),
			partial: boolean()
		});
		const UiStateSchema = object({
			tasks: array(TaskSchema),
			runs: array(RunSchema),
			reports: array(ReportItemSchema),
			settings: SettingsSchema,
			settingsWritable: boolean(),
			toolchains: ToolchainStateSchema.optional(),
			agentDefault: object({
				provider: string(),
				model: string()
			}).nullable().default(null),
			warnings: array(string()).default([])
		});
		object({
			taskId: string().uuid(),
			revision: number().int().positive(),
			event: _enum(["pre-commit", "pre-push"]),
			action: _enum(["install", "remove"]),
			enforce: boolean(),
			base: shortText.default(""),
			confirm: literal(true)
		}).strict();
		/** A user's decision that one finding is a false positive in one repository. Matching uses stable scanner identity, never report IDs. */
		const SuppressionSchema = object({
			id: string().uuid(),
			sourceIdentity: string().min(1).max(2e3),
			sourceLabel: string().max(2e3),
			engine: string().min(1).max(100),
			rule: string().min(1).max(200),
			file: string().max(2e3),
			fingerprint: string().min(1).max(200),
			title: string().max(500),
			reason: string().trim().min(1).max(500),
			createdAt: string().datetime(),
			reportId: string().uuid()
		}).strict();
		object({
			id: string().uuid(),
			findingIds: array(string().min(1).max(200)).min(1).max(100),
			reason: string().trim().min(1).max(500)
		}).strict();
		const FindingItemSchema = object({
			category: _enum([
				"sourceRisk",
				"dependencyRisk",
				"secretRisk",
				"dynamicRisk"
			]).default("sourceRisk"),
			id: string(),
			title: string(),
			file: string(),
			line: number(),
			severity: _enum([
				"critical",
				"high",
				"medium",
				"low",
				"info"
			]),
			status: _enum([
				"confirmed",
				"needs-review",
				"dismissed"
			]),
			endpoint: string().optional(),
			/** Excluded by the user, either when this report was written or afterwards. */
			suppressed: boolean().default(false),
			/** AI-only findings have no stable fingerprint across scans, so they cannot be excluded. */
			suppressible: boolean().default(false)
		});
		const ReportActionsSchema = object({
			findings: array(FindingItemSchema),
			run: RunSchema.optional(),
			repairable: boolean(),
			repairMode: RepairModeSchema.default("pr"),
			prPreview: object({
				repositoryUrl: shortText,
				base: shortText,
				commit: shortText,
				revision: string().regex(/^[a-f0-9]{64}$/)
			}).optional(),
			prError: shortText.optional(),
			comparison: object({
				previousId: string(),
				comparable: boolean(),
				items: array(FindingItemSchema.extend({ change: _enum([
					"remaining",
					"notObserved",
					"added",
					"unverified"
				]) }))
			}).optional(),
			/** Present when this report is a rescan inside a repair chain whose session can take a follow-up round. */
			repairChain: object({
				sessionId: string().max(200),
				round: number().int().positive()
			}).strict().optional()
		});
		object({
			id: string().uuid(),
			findingIds: array(string().min(1).max(200)).min(1).max(20),
			mode: RepairModeSchema,
			expectedRevision: string().regex(/^[a-f0-9]{40,64}$/).optional()
		}).strict();
		const newTask = () => ({
			name: "",
			kind: "local",
			target: "",
			ref: "",
			scope: "full",
			baseline: "previous",
			base: "",
			engine: "auto",
			dependencies: true,
			secrets: true,
			view: "all",
			autoScan: false,
			syncSession: true,
			repairMode: "pr",
			dynamicUrl: "",
			dynamicAuthorized: false,
			agent: AgentPolicySchema.parse({ enabled: true })
		});
		//#endregion
		//#region src/client/styles.ts
		const css = `
.security-workbench{
  --scan-bg:var(--dsw-alias-bg-layer-1,#f5f7fb);
  --scan-surface:var(--dsw-alias-bg-layer-2,#fff);
  --scan-subtle:var(--dsw-alias-bg-layer-3,#edf1f8);
  --scan-border:var(--dsw-alias-border-l2,#dce3ef);
  --scan-text:var(--dsw-alias-label-primary,#19263b);
  --scan-muted:var(--dsw-alias-label-tertiary,#697c96);
  --scan-accent:var(--dsw-alias-brand-primary,#416bd9);
  --scan-on-accent:var(--dsw-alias-label-primary-foreground,#fff);
  position:absolute;inset:0;pointer-events:auto;z-index:50;background:var(--scan-bg);color:var(--scan-text);display:flex;flex-direction:column;font:14px/1.55 system-ui,-apple-system,sans-serif;text-align:left;
}
.security-workbench *{box-sizing:border-box}
.security-workbench.embedded{position:relative;inset:auto;z-index:auto;width:100%;height:100%;min-height:0}
.security-workbench.embedded header{padding-left:max(28px,var(--dsh-frame-leading-clearance,0px))}
.security-workbench h1{font-size:22px;font-weight:650;letter-spacing:-.4px;margin:0}
.security-workbench h2{font-size:18px;margin:0 0 18px}.security-workbench h3{font-size:15px;margin:0}
.security-workbench p{margin:6px 0;overflow-wrap:anywhere}.security-workbench .muted{color:var(--scan-muted);font-size:12px;line-height:1.6}
.security-workbench .grow{flex:1;min-width:0}.security-workbench .error,.security-workbench .danger{color:#d14f59}.security-workbench .notice{color:#228467}

/* Native selects otherwise retain a shorter platform control despite input padding. */
.security-workbench input:not([type=checkbox]),.security-workbench select,.security-workbench textarea{
  appearance:none;-webkit-appearance:none;display:block;width:100%;min-width:0;border:1px solid var(--scan-border);border-radius:8px;background:var(--scan-surface);color:var(--scan-text);font:inherit;font-size:14px;line-height:20px;padding:9px 12px;box-shadow:none;
}
.security-workbench input:not([type=checkbox]),.security-workbench select{height:40px}
.security-workbench select{padding-right:36px;text-overflow:ellipsis;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='m4 6 4 4 4-4' fill='none' stroke='%237b8797' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-position:right 12px center;background-size:16px;background-repeat:no-repeat}
.security-workbench option{background:var(--scan-surface);color:var(--scan-text)}
.security-workbench textarea{min-height:120px;resize:vertical}
.security-workbench input::placeholder,.security-workbench textarea::placeholder{color:var(--scan-muted);opacity:.8}
.security-workbench input:not([type=checkbox]):hover:not(:disabled),.security-workbench select:hover:not(:disabled),.security-workbench textarea:hover:not(:disabled){border-color:var(--scan-muted)}
.security-workbench input:focus-visible,.security-workbench select:focus-visible,.security-workbench textarea:focus-visible,.security-workbench button:focus-visible,.security-workbench summary:focus-visible{outline:2px solid var(--scan-accent);outline-offset:2px}
.security-workbench input:disabled,.security-workbench select:disabled,.security-workbench textarea:disabled{background-color:var(--scan-subtle);opacity:.6;cursor:not-allowed}
.security-workbench button{appearance:none;-webkit-appearance:none;cursor:pointer;min-height:40px;flex-shrink:0;border:1px solid var(--scan-border);border-radius:8px;padding:9px 14px;background:var(--scan-surface);color:var(--scan-text);font:inherit;font-size:14px;line-height:20px;transition:background .15s,border-color .15s}
.security-workbench button:hover:not(:disabled){background:var(--scan-subtle);border-color:var(--scan-muted)}
.security-workbench button:disabled{cursor:not-allowed;opacity:.5}
.security-workbench button.link{border:0;background:none;padding:0;min-height:0;color:var(--scan-accent);text-decoration:underline;cursor:pointer}.security-workbench .baseline-note{align-self:end;margin:0}
.security-workbench button.danger{color:#d14f59}.security-workbench button.danger:hover:not(:disabled){border-color:currentColor}
/* Brand backgrounds invert in dark mode; their foreground must invert as well. */
.security-workbench button.primary{background:var(--scan-accent);border-color:var(--scan-accent);color:var(--scan-on-accent)}
.security-workbench button.primary:hover:not(:disabled){background:color-mix(in srgb,var(--scan-accent) 90%,var(--scan-on-accent));border-color:var(--scan-accent)}
.security-workbench button.primary:active:not(:disabled){background:color-mix(in srgb,var(--scan-accent) 80%,var(--scan-on-accent))}

.security-workbench header{display:flex;gap:18px;align-items:center;flex-shrink:0;border-bottom:1px solid var(--scan-border);padding:20px 28px;background:var(--scan-surface)}
.security-workbench header>button:first-child{border-color:transparent;background:transparent}
.security-workbench .body{display:flex;flex-direction:column;flex:1;min-height:0}
.security-workbench nav{display:flex;flex-shrink:0;gap:24px;padding:0 28px;overflow-x:auto;border-bottom:1px solid var(--scan-border);background:var(--scan-surface)}
.security-workbench nav button{display:flex;align-items:center;gap:8px;min-height:52px;padding:14px 2px;border:0;border-bottom:2px solid transparent;border-radius:0;white-space:nowrap;color:var(--scan-muted);background:transparent}
.security-workbench nav button:hover:not(:disabled){background:transparent;border-bottom-color:var(--scan-border);color:var(--scan-text)}
.security-workbench nav button.selected{border-bottom-color:var(--scan-accent);color:var(--scan-accent);font-weight:650}
.security-workbench .nav-count{font-size:11px;line-height:18px;min-width:20px;padding:0 5px;border-radius:5px;background:var(--scan-subtle);text-align:center}
.security-workbench main{flex:1;min-width:0;overflow:auto;padding:28px 32px;scrollbar-gutter:stable}
.security-workbench .content{max-width:1120px;margin:0 auto}.security-workbench .report-content{max-width:none}
.security-workbench .toolbar{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;margin-bottom:20px}.security-workbench .toolbar h2{margin:0}
.security-workbench .search{max-width:280px}.security-workbench .toolbar .search{flex:1 1 200px}
.security-workbench .cards{display:grid;gap:16px}
.security-workbench .card{border:1px solid var(--scan-border);border-radius:14px;padding:24px;background:var(--scan-surface);box-shadow:0 2px 8px #172b4d03;min-width:0}
.security-workbench .card-head{display:flex;gap:12px;align-items:flex-start}.security-workbench .card-head h3{font-size:16px}
.security-workbench .actions,.security-workbench .row-actions,.security-workbench .form-footer{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.security-workbench .actions{margin-top:16px;padding-top:16px;border-top:1px solid var(--scan-border)}.security-workbench .actions .danger{margin-left:auto}
.security-workbench .tags{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0}
.security-workbench .tag{padding:2px 8px;border-radius:6px;background:var(--scan-subtle);font-size:12px;white-space:nowrap}
.security-workbench .tag.running,.security-workbench .tag.queued{color:#4c8df2}.security-workbench .tag.partial,.security-workbench .tag.failed,.security-workbench .tag.interrupted{color:#b97a26}.security-workbench .tag.succeeded{color:#26946a}
.security-workbench .empty{border:1px dashed var(--scan-border);border-radius:12px;padding:48px 24px;text-align:center}
.security-workbench .alert{padding:12px 16px;border-radius:8px;background:var(--scan-subtle);margin-bottom:16px}

.security-workbench .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 24px}
.security-workbench label.field{display:flex;flex-direction:column;gap:8px;min-width:0}.security-workbench label.field>span:first-child{font-weight:550}
.security-workbench .span{grid-column:1/-1}
.security-workbench fieldset{border:0;padding:0;margin:0;min-width:0}
.security-workbench .section-title{font-size:12px;color:var(--scan-muted);letter-spacing:.04em;padding:20px 0 0;border-top:1px solid var(--scan-border)}
.security-workbench .section-title:first-child{border-top:0;padding-top:0}
.security-workbench .check{display:flex;gap:12px;align-items:flex-start;padding:14px 0;cursor:pointer}
.security-workbench .check input{flex:none;width:16px;height:16px;margin:3px 0 0;accent-color:#2563eb}
.security-workbench .check p{margin:4px 0 0}
.security-workbench .form-footer{margin-top:24px;padding-top:20px;border-top:1px solid var(--scan-border)}
.security-workbench .agent-policy{margin:24px 0 10px;padding:4px 20px 20px;border:1px solid var(--scan-border);border-radius:12px;background:var(--scan-bg)}
.security-workbench .agent-policy .check{padding-bottom:12px}.security-workbench .agent-policy>p{margin:8px 0}
.security-workbench .flow{color:#697fd2;font-size:13px}.security-workbench .ai{background:var(--scan-subtle);color:#697fd2}
.security-workbench .model-picker{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px 12px;align-items:end;margin:18px 0 12px}
.security-workbench .model-picker p{grid-column:1/-1;margin:0}
.security-workbench .advanced{margin-top:24px;padding-top:18px;border-top:1px solid var(--scan-border)}
.security-workbench summary{cursor:pointer}.security-workbench .advanced summary{font-weight:550}.security-workbench .advanced[open]>p{margin:12px 0 18px}
.security-workbench .agent-trace{max-width:420px;font-size:12px}.security-workbench .agent-trace ol{max-height:180px;overflow:auto;padding-left:0;list-style:none;overflow-wrap:anywhere}
.security-workbench .agent-trace li{margin:6px 0}.security-workbench .agent-trace li b{display:inline-block;min-width:18px;color:#697caf}

.security-workbench table{width:100%;border-collapse:collapse;font-size:13px}
.security-workbench th{text-align:left;color:var(--scan-muted);font-size:12px;font-weight:550;padding:12px;white-space:nowrap}
.security-workbench td{padding:16px 12px;border-top:1px solid var(--scan-border);vertical-align:top;overflow-wrap:anywhere}
.security-workbench .table-wrap{overflow:auto}.security-workbench .table-wrap table{min-width:650px}
.security-workbench .row-actions{min-width:180px}.security-workbench .row-actions button{white-space:nowrap}
.security-workbench code{font-size:12px;overflow-wrap:anywhere}
.security-workbench iframe{display:block;width:100%;height:calc(100vh - 210px);border:1px solid var(--scan-border);border-radius:10px;background:white}
.security-workbench .confirm-box{max-width:680px;margin:20px auto;border:1px solid var(--scan-border);box-shadow:0 8px 32px #172b4d0a}
.security-workbench .source-preview{position:sticky;top:0;z-index:2;background:var(--scan-surface);border:1px solid var(--scan-border);padding:16px;border-radius:10px}
.security-workbench .source-preview pre{max-height:380px;overflow:auto;white-space:pre;background:var(--scan-bg)}.security-workbench .source-preview pre span{display:block}.security-workbench .source-highlight{background:#fff0b5;color:#172238}

.security-workbench .engine-panel{margin-bottom:24px}.security-workbench .engine-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:20px 0 4px}
.security-workbench .engine-item{display:flex;align-items:center;gap:12px;padding:16px;background:var(--scan-bg);border-radius:10px;min-width:0}
.security-workbench .engine-symbol{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:9px;background:var(--scan-surface);font-size:23px;color:var(--scan-accent)}
.security-workbench .engine-progress{display:flex;align-items:center;gap:9px;margin-top:16px;color:var(--scan-accent)}
.security-workbench .environment-banner{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 16px;margin-bottom:20px;border:1px solid var(--scan-border);border-radius:10px;background:var(--scan-surface);font-size:13px}
.security-workbench .spinner{width:14px;height:14px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:security-spin 1s linear infinite}
@keyframes security-spin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.security-workbench .spinner{animation:none}.security-workbench button,.security-workbench .check-card{transition:none}}
@media(max-width:760px){
  .security-workbench header{padding:14px;gap:10px;flex-wrap:wrap}.security-workbench header .grow{flex-basis:calc(100% - 130px)}.security-workbench header>button:last-child{margin-left:auto}
  .security-workbench h1{font-size:19px}.security-workbench nav{gap:20px;padding:0 16px}.security-workbench main{padding:16px}
  .security-workbench .grid,.security-workbench .engine-grid{grid-template-columns:minmax(0,1fr)}.security-workbench .span{grid-column:auto}
  .security-workbench .card{padding:18px}.security-workbench .toolbar .search{max-width:none;order:3;flex-basis:100%}
  .security-workbench .environment-banner{align-items:flex-start;flex-direction:column}.security-workbench iframe{height:65vh}
}
@media(max-width:480px){
  .security-workbench .model-picker{grid-template-columns:minmax(0,1fr)}.security-workbench .model-picker button{justify-self:start}
  .security-workbench .agent-policy{padding:4px 14px 16px}.security-workbench .card-head{flex-wrap:wrap}.security-workbench .card-head .grow{flex-basis:100%}
  .security-workbench .form-footer button{flex:1 1 auto}.security-workbench .actions .danger{margin-left:0}
}

.security-workbench .overview{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:28px}
.security-workbench .overview button{display:flex;align-items:center;gap:14px;text-align:left;padding:18px;border-radius:12px}
.security-workbench .overview strong{font-size:26px;font-weight:650;margin-left:auto}.security-workbench .overview span:first-child{color:var(--scan-muted)}
.security-workbench .segmented{display:flex;gap:4px;padding:4px;border:1px solid var(--scan-border);border-radius:10px;background:var(--scan-surface)}
.security-workbench .segmented button{border:0;min-height:32px;padding:5px 12px;background:transparent}.security-workbench .segmented button[aria-pressed=true]{background:var(--scan-subtle);color:var(--scan-accent)}
.security-workbench .active-run{background:color-mix(in srgb,var(--scan-accent) 5%,transparent)}
.security-workbench .more-actions{margin-left:auto}.security-workbench .more-actions summary{padding:8px 12px;min-height:40px;color:var(--scan-muted)}
.security-workbench .more-actions[open]{flex-basis:100%;margin-left:0}.security-workbench .more-actions .row-actions{padding:10px;background:var(--scan-bg);border-radius:8px}
.security-workbench .editor .form-footer{position:sticky;bottom:-28px;background:var(--scan-surface);padding:16px 0;z-index:1;box-shadow:0 -8px 16px var(--scan-surface)}
.security-workbench .model-details{padding:0 0 8px}.security-workbench .model-details summary{color:var(--scan-accent)}
.security-workbench .follow-up{margin:0 0 20px}.security-workbench .follow-up h2{margin:0}
.security-workbench .stepper{display:flex;gap:6px;list-style:none;margin:20px 0 6px;padding:0;counter-reset:none}
.security-workbench .stepper li{flex:1;display:flex;align-items:center;gap:8px;min-width:0;padding:8px 10px;border-radius:8px;background:var(--scan-bg);color:var(--scan-muted);font-size:13px;white-space:nowrap}
.security-workbench .stepper li.current{background:color-mix(in srgb,var(--scan-accent) 10%,var(--scan-surface));color:var(--scan-accent);font-weight:600}
.security-workbench .stepper li.done{color:var(--scan-text)}
.security-workbench .step-dot{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:50%;border:1px solid currentColor;font-size:11px;line-height:1}
.security-workbench .stepper li.done .step-dot{border-color:#26946a;background:#26946a;color:#fff}
.security-workbench .step-hint{margin:0 0 12px}
.security-workbench .quick-select{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 8px}.security-workbench .quick-select button{min-height:32px;padding:5px 12px;font-size:13px}
.security-workbench .finding-picker summary,.security-workbench .comparison summary{font-weight:600;padding:8px 0}
.security-workbench .finding-picker .search{max-width:none;margin:12px 0}.security-workbench .finding-list{max-height:320px;overflow:auto;overscroll-behavior:contain}
.security-workbench .repair-delivery{margin:16px 0;padding:16px;border:1px solid var(--scan-border);border-radius:10px;overflow-wrap:anywhere}.security-workbench .repair-delivery select{display:block;max-width:100%;margin-top:6px}
.security-workbench .finding-filters{display:flex;flex-wrap:wrap;gap:12px}.security-workbench .finding-filters label{flex:1 1 160px;min-width:0}.security-workbench .finding-filters select{display:block;width:100%;margin-top:6px}.security-workbench .finding-selection{flex-wrap:wrap;margin-top:12px}
.security-workbench .finding-row{display:flex;align-items:flex-start;gap:12px;padding:12px 4px;border-bottom:1px solid var(--scan-border);overflow-wrap:anywhere}.security-workbench .suppress-form{display:grid;gap:8px;margin:8px 0 12px;padding:14px 16px;border:1px solid var(--scan-border);border-radius:10px;background:var(--scan-subtle)}.security-workbench .suppress-form label{display:grid;gap:6px;font-size:13px}.security-workbench .suppress-form textarea{min-height:72px}.security-workbench .suppressions{margin-top:20px}.security-workbench .suppressions .finding-row button{flex-shrink:0}.security-workbench .suppressions .finding-row small+small{margin-top:2px}.security-workbench .finding-row input{margin-top:5px;accent-color:var(--scan-accent)}
.security-workbench .finding-row small{display:block;color:var(--scan-muted)}.security-workbench .comparison{margin-top:20px;padding-top:12px;border-top:1px solid var(--scan-border)}.security-workbench .comparison-counts{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}
.security-workbench .discard-overlay{position:absolute;inset:0;background:#0006;z-index:5;display:grid;place-items:center;padding:20px}.security-workbench .discard-overlay .confirm-box{width:100%;margin:0}
.security-workbench .empty button{margin-top:16px}
.security-workbench .editor>fieldset>.section-title{margin:24px 0 8px}
.security-workbench .check-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:12px 0 4px}
.security-workbench .check-card{min-width:0;padding:14px 16px;border:1px solid var(--scan-border);border-radius:12px;background:var(--scan-bg);transition:border-color .15s,background .15s}
.security-workbench .check-card.on{border-color:color-mix(in srgb,var(--scan-accent) 40%,var(--scan-border));background:color-mix(in srgb,var(--scan-accent) 4%,var(--scan-surface))}
.security-workbench .check-card .check{padding:0}.security-workbench .check-card .check+.muted,.security-workbench .check-card .muted+.check{margin-top:10px}.security-workbench .check-card>p.muted{margin:10px 0 0}
.security-workbench .check-card .model-details{margin-top:12px}
.security-workbench .tag.runtime{color:#a05bd0}
.security-workbench .run-summary{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin:0 0 4px;font-size:12px}
.security-workbench .chip{padding:1px 8px;border-radius:999px;border:1px solid var(--scan-border);color:var(--scan-muted)}
.security-workbench .chip.confirmed{color:#d14f59;border-color:color-mix(in srgb,#d14f59 35%,var(--scan-border))}.security-workbench .chip.pending{color:#b97a26;border-color:color-mix(in srgb,#b97a26 35%,var(--scan-border))}
@media(max-width:760px){.security-workbench .overview{gap:8px}.security-workbench .overview button{padding:12px;flex-wrap:wrap;gap:6px}.security-workbench .overview strong{font-size:22px}.security-workbench .overview span:last-child{display:none}.security-workbench .stepper{flex-wrap:wrap}.security-workbench .stepper li{flex:1 1 40%}.security-workbench .check-cards{grid-template-columns:minmax(0,1fr)}.security-workbench .editor .form-footer{bottom:-16px}}
`;
		//#endregion
		//#region src/client/Workbench.tsx
		const isActive = (run) => [
			"queued",
			"running",
			"cancelling"
		].includes(run.status);
		const phaseKey = (phase) => phase === "baseline" ? "baselinePhase" : phase === "report" ? "reportPhase" : phase;
		const date = (value) => new Date(value).toLocaleString();
		const usageLine = (audit, t) => audit ? formatAgentUsage(audit, t("cacheHit")) ?? "" : "";
		const reportMeta = (item, t) => [
			date(item.createdAt),
			item.findings + " " + t("countSuffix"),
			item.agent?.model,
			usageLine(item.agent, t)
		].filter(Boolean).join(" · ");
		function Field({ label, hint, children, wide = false }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: "field" + (wide ? " span" : ""),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }),
					children,
					hint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "muted",
						children: hint
					}) : null
				]
			});
		}
		function Check({ label, hint, value, onChange, required = false }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: "check",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "checkbox",
					required,
					checked: value,
					onChange: (event) => onChange(event.target.checked)
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [label, hint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "muted",
					children: hint
				}) : null] })]
			});
		}
		function Workbench({ remote, t, close, openSession, requestedReport, embedded = false, draft }) {
			const [leave, setLeave] = (0, react.useState)();
			const originalEditor = (0, react.useRef)(draft?.originalEditor);
			const actionLock = (0, react.useRef)(false);
			const [pollError, setPollError] = (0, react.useState)(false);
			const [runFilter, setRunFilter] = (0, react.useState)("all");
			const [runSearch, setRunSearch] = (0, react.useState)("");
			const [tab, setTab] = (0, react.useState)(draft?.tab ?? "tasks");
			const [state, setState] = (0, react.useState)();
			const [editor, setEditor] = (0, react.useState)(draft?.editor);
			const [settings, setSettings] = (0, react.useState)(draft?.settings);
			const [busy, setBusy] = (0, react.useState)(false), [error, setError] = (0, react.useState)(""), [notice, setNotice] = (0, react.useState)("");
			const [confirm, setConfirm] = (0, react.useState)();
			const [hookEvent, setHookEvent] = (0, react.useState)("pre-commit");
			const [hookAction, setHookAction] = (0, react.useState)("install"), [enforce, setEnforce] = (0, react.useState)(false);
			const [hookBase, setHookBase] = (0, react.useState)("");
			const [report, setReport] = (0, react.useState)();
			const frame = (0, react.useRef)(null);
			const [source, setSource] = (0, react.useState)();
			const [search, setSearch] = (0, react.useState)("");
			const [taskSearch, setTaskSearch] = (0, react.useState)("");
			const generation = (0, react.useRef)(0);
			const alive = (0, react.useRef)(true), panel = (0, react.useRef)(null), form = (0, react.useRef)(null);
			const urls = (0, react.useRef)(/* @__PURE__ */ new Set());
			(0, react.useEffect)(() => {
				if (draft) Object.assign(draft, {
					editor,
					originalEditor: originalEditor.current,
					tab,
					settings: settings && (!state || JSON.stringify(settings) !== JSON.stringify(state.settings)) ? settings : void 0
				});
			}, [
				draft,
				editor,
				settings,
				state,
				tab
			]);
			const reload = (0, react.useCallback)(async () => {
				const current = ++generation.current;
				const next = await remote.state();
				if (alive.current && current === generation.current) {
					setPollError(false);
					setState(next);
					setSettings((current) => current ?? next.settings);
				}
			}, [remote]);
			(0, react.useEffect)(() => {
				alive.current = true;
				const previous = document.activeElement;
				const keepFocus = (event) => {
					if (event.target instanceof Node && panel.current && !panel.current.contains(event.target)) panel.current.querySelector("button:not(:disabled),input:not(:disabled)")?.focus();
				};
				if (!embedded) document.addEventListener("focusin", keepFocus);
				panel.current?.querySelector("button")?.focus();
				let timer;
				const poll = async () => {
					try {
						await reload();
					} catch {
						if (alive.current) setPollError(true);
					}
					if (alive.current) timer = setTimeout(() => {
						poll();
					}, 2e3);
				};
				poll();
				return () => {
					document.removeEventListener("focusin", keepFocus);
					alive.current = false;
					clearTimeout(timer);
					for (const url of urls.current) URL.revokeObjectURL(url);
					if (previous instanceof HTMLElement) previous.focus();
				};
			}, [reload, embedded]);
			(0, react.useEffect)(() => {
				setSource(void 0);
				let current = 0, disposed = false;
				const receive = (event) => {
					const data = event.data;
					if (event.source !== frame.current?.contentWindow || !report || data?.type !== "dsh-security-source" || data.reportId !== report.id || typeof data.file !== "string" || !Number.isSafeInteger(data.line) || data.line < 1) return;
					const request = ++current;
					remote.source(report.id, data.file, data.line).then((result) => {
						if (!disposed && request === current) setSource({
							file: data.file,
							line: data.line,
							content: result.content
						});
					}).catch(() => {
						if (!disposed && request === current) setError("source-unavailable");
					});
				};
				window.addEventListener("message", receive);
				return () => {
					disposed = true;
					window.removeEventListener("message", receive);
				};
			}, [report, remote]);
			(0, react.useEffect)(() => {
				if (!requestedReport) return;
				let disposed = false;
				remote.report(requestedReport, "html").then((html) => {
					if (!disposed) setReport({
						id: requestedReport,
						html
					});
				}).catch(() => {
					if (!disposed) setError("report-directory-unavailable");
				});
				return () => {
					disposed = true;
				};
			}, [requestedReport, remote]);
			const viewKey = report?.id ?? (confirm ? confirm.kind + ("task" in confirm ? confirm.task.id : confirm.id) : editor ? "editor-" + (editor.id ?? "new") : tab);
			(0, react.useEffect)(() => {
				if (!busy && panel.current && (!document.activeElement || !panel.current.contains(document.activeElement))) panel.current.querySelector("main input:not(:disabled),main select:not(:disabled),main button:not(:disabled),button")?.focus();
			}, [
				viewKey,
				busy,
				leave
			]);
			const action = async (operation) => {
				if (actionLock.current) return;
				actionLock.current = true;
				setBusy(true);
				setError("");
				setNotice("");
				try {
					await operation();
					await reload();
				} catch (error) {
					if (alive.current) setError(error instanceof Error ? error.message : "operation-failed");
				} finally {
					actionLock.current = false;
					if (alive.current) setBusy(false);
				}
			};
			const editTask = (value) => {
				originalEditor.current = JSON.stringify(value.config);
				setEditor(value);
			};
			const navigate = (proceed) => {
				if (actionLock.current) return;
				const dirty = editor && JSON.stringify(editor.config) !== originalEditor.current;
				const settingsDirty = tab === "settings" && settings && state && JSON.stringify(settings) !== JSON.stringify(state.settings);
				if (dirty || settingsDirty) setLeave({ proceed });
				else proceed();
			};
			const leaveEditor = () => navigate(() => setEditor(void 0));
			const showRuns = () => {
				setReport(void 0);
				setEditor(void 0);
				setTab("runs");
				setRunFilter("all");
				setRunSearch("");
			};
			const openReport = (id) => action(async () => {
				const html = await remote.report(id, "html");
				if (alive.current) setReport({
					id,
					html
				});
			});
			const download = (format) => action(async () => {
				if (!report) return;
				const content = await remote.report(report.id, format);
				if (!alive.current) return;
				const url = URL.createObjectURL(new Blob([content], { type: format === "html" ? "text/html;charset=utf-8" : "application/json" }));
				urls.current.add(url);
				const link = document.createElement("a");
				link.href = url;
				link.download = "security-" + report.id + "." + format;
				link.click();
			});
			const save = (run) => {
				if (!editor || !form.current) return;
				for (const input of form.current.querySelectorAll("input:invalid,select:invalid")) {
					const details = input.closest("details");
					if (details) details.open = true;
				}
				if (!form.current.reportValidity()) return;
				return action(async () => {
					const task = await remote.save(editor.config, editor.id, editor.revision);
					if (!alive.current) return;
					editTask({
						id: task.id,
						revision: task.revision,
						config: task.config
					});
					if (run) {
						await remote.run(task.id, task.revision);
						showRuns();
						setNotice(t("scanQueued"));
					}
					setEditor(void 0);
					if (!run) setNotice(t("taskSaved"));
				});
			};
			const change = (key, value) => setEditor((current) => current ? {
				...current,
				config: {
					...current.config,
					[key]: value
				}
			} : current);
			const scopeChange = (scope) => setEditor((current) => current ? {
				...current,
				config: {
					...current.config,
					scope,
					...scope === "diff" ? { baseline: "git" } : current.config.scope === "diff" ? { baseline: "previous" } : {},
					...scope === "staged" ? {
						baseline: "none",
						base: "",
						ref: "",
						autoScan: false
					} : current.config.scope === "staged" ? { baseline: "previous" } : {}
				}
			} : current);
			const config = editor?.config;
			const previousRun = editor?.id ? state?.runs.find((run) => run.taskId === editor.id && run.status === "succeeded" && run.reportId && !run.repairSource) : void 0;
			const renderEditor = () => config && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
				ref: form,
				className: "card editor",
				onSubmit: (event) => {
					event.preventDefault();
					save(false);
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: editor?.id ? t("edit") : t("newTask") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
					disabled: busy,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
									className: "section-title span",
									children: t("sourceSection")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("name"),
									wide: true,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										required: true,
										maxLength: 100,
										value: config.name,
										onChange: (event) => change("name", event.target.value)
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("kind"),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
										value: config.kind,
										onChange: (event) => setEditor((current) => current ? {
											...current,
											config: {
												...current.config,
												kind: event.target.value,
												target: "",
												ref: "",
												scope: "full",
												baseline: "previous",
												base: "",
												autoScan: false
											}
										} : current),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "local",
											children: t("local")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "remote",
											children: t("remote")
										})]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("scope"),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
										value: config.scope,
										onChange: (event) => scopeChange(event.target.value),
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "full",
												children: t("full")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "diff",
												children: t("diff")
											}),
											config.kind === "local" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "staged",
												children: t("staged")
											}) : null
										]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("target"),
									hint: t(config.kind === "local" ? "localHint" : "remoteHint"),
									wide: true,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										required: true,
										value: config.target,
										onChange: (event) => change("target", event.target.value),
										placeholder: config.kind === "local" ? "/path/to/project" : "https://git.example.com/team/project.git"
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
									className: "section-title span",
									children: t("policySection")
								}),
								config.scope !== "staged" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("ref"),
									hint: t("refHint"),
									wide: true,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										value: config.ref,
										onChange: (event) => {
											change("ref", event.target.value);
											if (event.target.value) change("autoScan", false);
										}
									})
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted span",
									children: t("stagedHint")
								}),
								config.scope !== "staged" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
										label: t("baseline"),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											"aria-label": t("baseline"),
											value: config.baseline,
											onChange: (event) => change("baseline", event.target.value),
											disabled: config.scope === "diff",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "previous",
													children: t("previousBaseline")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "git",
													children: t("git")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
													value: "none",
													children: t("none")
												})
											]
										})
									}),
									config.baseline === "git" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
										label: t("base"),
										hint: t("baseHint"),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											required: true,
											value: config.base,
											onChange: (event) => change("base", event.target.value),
											placeholder: "origin/main"
										})
									}) : null,
									config.baseline === "previous" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "muted baseline-note",
										children: previousRun ? t("previousBaselineNext").replace("{date}", date(previousRun.createdAt)) : t("previousBaselineFirst")
									}) : null
								] }) : null,
								config.baseline !== "none" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("view"),
									hint: t("viewHint"),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
										value: config.view,
										onChange: (event) => change("view", event.target.value),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "all",
											children: t("all")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "new",
											children: t("new")
										})]
									})
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "span",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
										className: "section-title",
										children: t("checksSection")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "muted",
										children: t("checksHint")
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "check-cards",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
									className: "check-card" + (config.engine === "auto" ? " on" : ""),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
										label: t("rulesCheck"),
										hint: t("rulesCheckHint"),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											"aria-label": t("engine"),
											value: config.engine,
											onChange: (event) => change("engine", event.target.value),
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "auto",
												children: t("auto")
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "inventory",
												children: t("inventory")
											})]
										})
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
									className: "check-card" + (config.dependencies ? " on" : ""),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
										label: t("dependencies"),
										hint: t("dependenciesHint"),
										value: config.dependencies,
										onChange: (value) => change("dependencies", value)
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
									className: "check-card" + (config.secrets ? " on" : ""),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
										label: t("secrets"),
										hint: t("secretsHint"),
										value: config.secrets,
										onChange: (value) => change("secrets", value)
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
									className: "check-card" + (config.dynamicUrl ? " on" : ""),
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
											label: t("dynamicUrl"),
											hint: t("dynamicUrlHint"),
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												type: "url",
												maxLength: 2e3,
												value: config.dynamicUrl,
												placeholder: "http://127.0.0.1:3000",
												onChange: (event) => {
													const value = event.target.value;
													setEditor((current) => current ? {
														...current,
														config: {
															...current.config,
															dynamicUrl: value,
															...value ? {} : { dynamicAuthorized: false }
														}
													} : current);
												}
											})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "muted",
											children: t("dynamicHint")
										}),
										config.dynamicUrl ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
											label: t("dynamicAuthorized"),
											value: config.dynamicAuthorized,
											required: true,
											onChange: (value) => change("dynamicAuthorized", value)
										}) : null
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
									className: "check-card span" + (config.agent.enabled ? " on" : ""),
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
										label: t("agentEnable"),
										hint: t("agentHint"),
										value: config.agent.enabled,
										onChange: (enabled) => change("agent", {
											...config.agent,
											enabled
										})
									}), config.agent.enabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
										className: "model-details",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("agentAdvanced") }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("agentPreset") }) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: "muted",
												children: t("agentPresetHint")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: "flow",
												children: t("flow")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelPicker, {
												remote,
												value: config.agent,
												defaultModel: state?.agentDefault ?? null,
												t,
												onChange: (selection) => change("agent", {
													...config.agent,
													...selection
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: "muted",
												children: t("agentBudget")
											})
										]
									}) : null]
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							className: "section-title",
							children: t("automationSection")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grid",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
								label: t("repairDelivery"),
								hint: t("deliveryPreferenceHint"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
									value: config.repairMode,
									onChange: (event) => change("repairMode", event.target.value),
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "pr",
										children: t("deliveryPr")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "local",
										children: t("deliveryLocal")
									})]
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [config.kind === "local" && config.scope !== "staged" && !config.ref ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
								label: t("autoScan"),
								hint: t("autoHint"),
								value: config.autoScan,
								onChange: (value) => change("autoScan", value)
							}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
								label: t("syncSession"),
								hint: t("syncSessionHint"),
								value: config.syncSession,
								onChange: (value) => change("syncSession", value)
							})] })]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "form-footer",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									className: "primary",
									type: "button",
									onClick: () => {
										save(true);
									},
									children: t("saveRun")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "submit",
									children: t("save")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: leaveEditor,
									children: t("cancel")
								})
							]
						})
					]
				})]
			});
			const renderTasks = () => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "toolbar",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grow",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("tasks") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t("taskIntro")
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: "search",
							"aria-label": t("taskSearch"),
							placeholder: t("taskSearch"),
							value: taskSearch,
							onChange: (event) => setTaskSearch(event.target.value)
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							className: "primary",
							disabled: busy,
							onClick: () => editTask({ config: newTask() }),
							children: ["＋ ", t("newTask")]
						})
					]
				}),
				!state?.tasks.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "empty",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: t("emptyTasks") }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "muted",
							children: t("emptyTasksHint")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							className: "primary",
							onClick: () => editTask({ config: newTask() }),
							children: ["＋ ", t("newTask")]
						})
					]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "cards",
					children: state.tasks.filter((task) => (task.config.name + " " + task.config.target).toLowerCase().includes(taskSearch.toLowerCase())).map((task) => {
						const running = state.runs.find((run) => run.taskId === task.id && isActive(run)), latest = state.runs.find((run) => run.taskId === task.id);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
							className: "card",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "card-head",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "grow",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: task.config.name }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "muted",
											children: task.config.target
										})]
									}), latest ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "tag " + latest.status,
										children: t(latest.status)
									}) : null]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "tags",
									children: [
										task.origin === "conversation" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t("conversationTrigger")
										}) : null,
										task.config.agent.enabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag ai",
											children: "Agentic AI"
										}) : null,
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t(task.config.kind)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t(task.config.scope)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t(task.config.engine)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: task.config.baseline === "none" ? t("noBaseline") : task.config.baseline === "previous" ? t("previousBaseline") : task.config.base
										}),
										task.config.autoScan ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag",
											children: t("autoLabel")
										}) : null,
										task.config.dynamicUrl ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "tag runtime",
											children: t("dynamic")
										}) : null
									]
								}),
								latest ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "run-summary",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "muted",
											children: [
												t("lastRun"),
												" · ",
												date(latest.createdAt)
											]
										}),
										latest.findings !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "chip",
											children: [
												latest.findings,
												" ",
												t("countSuffix")
											]
										}) : null,
										latest.resultSummary ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "chip confirmed",
												children: [
													t("resultConfirmed"),
													" ",
													latest.resultSummary.confirmed
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "chip pending",
												children: [
													t("resultPending"),
													" ",
													latest.resultSummary.pending
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "chip",
												children: [
													t("resultDismissed"),
													" ",
													latest.resultSummary.dismissed
												]
											}),
											latest.resultSummary.added !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "chip" + (latest.resultSummary.added ? " pending" : ""),
												children: [
													t("resultAdded"),
													" ",
													latest.resultSummary.added
												]
											}) : null
										] }) : null,
										latest.coverage === "partial" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "chip pending",
											children: t("coverageGap")
										}) : null
									]
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: t("neverRun")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "actions",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											className: "primary",
											disabled: busy || !!running,
											onClick: () => {
												action(async () => {
													await remote.run(task.id, task.revision);
													showRuns();
													setNotice(t("scanQueued"));
												});
											},
											children: t("run")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy,
											onClick: () => editTask({
												id: task.id,
												revision: task.revision,
												config: structuredClone(task.config)
											}),
											children: t("edit")
										}),
										latest?.reportId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy,
											onClick: () => {
												openReport(latest.reportId);
											},
											children: t("openReport")
										}) : null,
										running ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											onClick: showRuns,
											children: [
												t("viewProgress"),
												" · ",
												t(phaseKey(running.phase))
											]
										}) : null,
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
											className: "more-actions",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("moreActions") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "row-actions",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														disabled: busy,
														onClick: () => editTask({ config: {
															...structuredClone(task.config),
															name: task.config.name.slice(0, 90) + " " + t("copySuffix")
														} }),
														children: t("duplicate")
													}),
													task.config.kind === "local" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														disabled: busy || !!running,
														onClick: () => {
															setConfirm({
																kind: "hook",
																task
															});
															setHookBase(task.config.base);
															setHookEvent("pre-commit");
															setHookAction("install");
															setEnforce(false);
														},
														children: t("hook")
													}) : null,
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														className: "danger",
														disabled: busy || !!running,
														onClick: () => setConfirm({
															kind: "remove",
															task
														}),
														children: t("remove")
													})
												]
											})]
										})
									]
								})
							]
						}, task.id);
					})
				}),
				state?.tasks.length && !state.tasks.some((task) => (task.config.name + " " + task.config.target).toLowerCase().includes(taskSearch.toLowerCase())) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "empty",
					children: t("noTaskMatch")
				}) : null,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "muted",
					children: t("rulesHint")
				})
			] });
			const filteredRuns = state?.runs.filter((run) => (run.config.name + " " + run.config.target).toLowerCase().includes(runSearch.toLowerCase()) && (runFilter === "all" || (runFilter === "active" ? isActive(run) : [
				"failed",
				"interrupted",
				"partial"
			].includes(run.status) || run.coverage === "partial"))) ?? [];
			const overview = state && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "overview",
				children: [
					[
						"tasks",
						state.tasks.length,
						() => setTab("tasks")
					],
					[
						"activeRuns",
						state.runs.filter(isActive).length,
						() => {
							setTab("runs");
							setRunFilter("active");
						}
					],
					[
						"needsAttention",
						state.runs.filter((run) => [
							"failed",
							"interrupted",
							"partial"
						].includes(run.status) || run.coverage === "partial").length,
						() => {
							setTab("runs");
							setRunFilter("attention");
						}
					]
				].map(([key, count, go]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					onClick: go,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(key) }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: count }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "↗"
						})
					]
				}, key))
			});
			const renderRuns = () => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "toolbar",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("runs") }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: "search",
							"aria-label": t("runSearch"),
							placeholder: t("runSearch"),
							value: runSearch,
							onChange: (event) => setRunSearch(event.target.value)
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "segmented",
							"aria-label": t("status"),
							children: [
								"all",
								"active",
								"attention"
							].map((value) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								"aria-pressed": runFilter === value,
								onClick: () => setRunFilter(value),
								children: t(value === "all" ? "allRuns" : value === "active" ? "activeRuns" : "needsAttention")
							}, value))
						})
					]
				}),
				state?.runs.length && !filteredRuns.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "empty",
					children: t("noMatches")
				}) : null,
				!state?.runs.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "empty",
					children: t("emptyRuns")
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "card table-wrap",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("taskName") }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("createdAt") }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("status") }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("actions") })
					] }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: filteredRuns.map((run) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
						className: isActive(run) ? "active-run" : "",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: run.config.name }),
								run.previousReportId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "tag",
									children: t("rescanLabel")
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "muted",
									children: [
										t(run.config.scope),
										" · ",
										t(run.config.engine),
										" · ",
										t(run.trigger === "edit" ? "editTrigger" : run.trigger === "conversation" ? "conversationTrigger" : run.trigger === "repair" ? "repairTrigger" : "manual")
									]
								})
							] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: date(run.createdAt) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "tag " + run.status,
									children: t(run.status)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "muted",
									children: [t(phaseKey(run.phase)), run.findings === void 0 ? "" : " · " + run.findings + " " + t("countSuffix")]
								}),
								!isActive(run) && (run.coverage === "partial" || run.status === "partial") ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "coverage-notice",
									children: t("coveragePartial")
								}) : null,
								run.resultSummary ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", { children: [
									t("resultConfirmed"),
									": ",
									run.resultSummary.confirmed,
									" · ",
									t("resultPending"),
									": ",
									run.resultSummary.pending,
									" · ",
									t("resultDismissed"),
									": ",
									run.resultSummary.dismissed,
									run.resultSummary.added !== void 0 ? " · " + t("resultAdded") + ": " + run.resultSummary.added : ""
								] }) : null,
								run.config.baseline === "previous" && !isActive(run) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: run.baselineReportId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										className: "link",
										disabled: busy,
										onClick: () => {
											openReport(run.baselineReportId);
										},
										children: t("comparedWith")
									}) : t("firstScan")
								}) : null,
								run.agent && !isActive(run) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", { children: [run.agent.nativeEnd === "completed" || !run.agent.nativeEnd && run.agent.status === "completed" ? t("nativeCompleted") : t("nativeStopped"), run.agent.nativeEnd ? " · " + run.agent.nativeEnd : ""] }) : null,
								run.agent ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
									className: "agent-trace",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("summary", { children: [
											t("agentDetails"),
											" · ",
											run.agent.steps,
											" ",
											t("agentRounds")
										] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", { children: [[run.agent.provider, run.agent.model].filter(Boolean).join("/"), usageLine(run.agent, t) ? " · " + usageLine(run.agent, t) : ""] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", { children: [
											t("agentFiles"),
											": ",
											run.agent.files.length,
											" · ",
											t("agentReviewed"),
											": ",
											run.agent.reviewedFindings,
											"/",
											run.agent.eligibleCandidates ?? "—",
											" · ",
											t("agentAdditional"),
											": ",
											run.agent.additionalFindings
										] }),
										!isActive(run) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: run.agent.status === "completed" ? t("agentCompleted") : t("agentIncomplete") + " · " + t(agentReasonKey(run.agent.reason)) }) : null,
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ol", { children: run.agent.events.map((event, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: event.step }),
											" ",
											t(event.kind),
											event.files.length ? " · " + event.files.join(", ") : "",
											event.count ? " · " + event.count : "",
											event.code ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: "error",
												children: t(errorKey(event.code))
											}) : null
										] }, index)) })
									]
								}) : null,
								run.diagnostics?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
									className: "agent-trace",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("coverageDetails") }), run.diagnostics.map((detail, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: detail }, index))]
								}) : null,
								run.sessionWarning ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "error",
									children: t("sessionUnavailable")
								}) : null,
								run.error && run.error !== "cancelled" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "muted",
									children: t(errorKey(run.error))
								}) : null
							] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "row-actions",
								children: [
									run.sessionId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										disabled: busy,
										onClick: () => {
											action(async () => openSession(run.sessionId));
										},
										children: t("openSession")
									}) : null,
									isActive(run) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										disabled: busy || run.status === "cancelling",
										onClick: () => {
											action(() => remote.cancel(run.id));
										},
										children: t("cancel")
									}) : null,
									run.rulesReportId && run.reportId !== run.rulesReportId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										disabled: busy,
										onClick: () => {
											openReport(run.rulesReportId);
										},
										children: t("rulesReport")
									}) : null,
									!isActive(run) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										className: "danger",
										disabled: busy,
										onClick: () => setConfirm({
											kind: "removeRun",
											id: run.id,
											name: run.config.name,
											detail: date(run.createdAt)
										}),
										children: t("deleteRun")
									}) : null,
									run.reportId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										disabled: busy,
										onClick: () => {
											openReport(run.reportId);
										},
										children: t("openReport")
									}) : null
								]
							}) })
						]
					}, run.id)) })] })
				})
			] });
			const renderReports = () => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "toolbar",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("reports") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: "search",
						"aria-label": t("source"),
						placeholder: t("source"),
						value: search,
						onChange: (event) => setSearch(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "muted",
					children: t("reportHint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "cards",
					children: state?.reports.filter((item) => item.source.toLowerCase().includes(search.toLowerCase())).map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: item.source }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: reportMeta(item, t)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "tag",
								children: t(item.scope === "diff" ? "diff" : item.scope === "staged" ? "staged" : "full")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "actions",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									disabled: busy,
									onClick: () => {
										openReport(item.id);
									},
									children: t("openReport")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									className: "danger",
									disabled: busy,
									onClick: () => setConfirm({
										kind: "removeReport",
										id: item.id,
										name: item.source,
										detail: date(item.createdAt) + " · " + item.id
									}),
									children: t("deleteReport")
								})]
							})
						]
					}, item.id))
				}),
				state?.reports.length && !state.reports.some((item) => item.source.toLowerCase().includes(search.toLowerCase())) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "empty",
					children: t("noMatches")
				}) : null,
				!state?.reports.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "empty",
					children: t("emptyReports")
				}) : null
			] });
			const renderEngines = () => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "card engine-panel",
				"aria-label": t("enginesTitle"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "card-head",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grow",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: t("enginesTitle") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t("scannerHint")
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "tag " + (state?.toolchains?.status === "ready" ? "succeeded" : ""),
							children: t(state?.toolchains?.status === "ready" ? "engineReady" : state?.toolchains?.status === "installing" ? "engineInstalling" : state?.toolchains?.status === "failed" ? "engineFailed" : "engineIdle")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "engine-grid",
						children: ["semgrep", "gitleaks"].map((engine) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "engine-item",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "engine-symbol",
									"aria-hidden": "true",
									children: engine === "semgrep" ? "⌘" : "◇"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "grow",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: engine === "semgrep" ? "Semgrep" : "Gitleaks" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "muted",
										children: t(engine === "semgrep" ? "semgrepPurpose" : "gitleaksPurpose")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: state?.toolchains?.[engine] ?? "—" })
							]
						}, engine))
					}),
					state?.toolchains?.status === "installing" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: "engine-progress",
						role: "status",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "spinner",
							"aria-hidden": "true"
						}), t(enginePhaseKey(state.toolchains.phase))]
					}) : null,
					state?.toolchains?.status === "failed" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "error",
						role: "alert",
						children: t(engineErrorKey(state.toolchains.error))
					}) : null,
					state?.toolchains?.status === "failed" || state?.toolchains?.status === "idle" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						disabled: busy,
						onClick: () => {
							action(() => remote.setup());
						},
						children: t("engineRetry")
					}) : null
				]
			});
			const renderSettings = () => settings && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				renderEngines(),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
					className: "card editor",
					onSubmit: (event) => {
						event.preventDefault();
						action(async () => {
							const value = {
								...settings,
								hookTools: settings.hookTools.map((value) => value.trim()).filter(Boolean)
							};
							await remote.settings(value);
							setSettings(value);
							setNotice(t("settingsSaved"));
						});
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("settings") }),
						!state?.settingsWritable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "alert",
							children: t("readOnly")
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
							disabled: busy || !state?.settingsWritable,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "grid",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
										label: t("reportDirectory"),
										wide: true,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											required: true,
											value: settings.reportDirectory,
											onChange: (event) => setSettings({
												...settings,
												reportDirectory: event.target.value
											})
										})
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
									className: "advanced",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("engineOverrides") }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "muted",
											children: t("overrideHint")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "grid",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
													label: t("semgrepPath"),
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
														value: settings.semgrepPath === "semgrep" ? "" : settings.semgrepPath,
														placeholder: t("managedDefault"),
														onChange: (event) => setSettings({
															...settings,
															semgrepPath: event.target.value || "semgrep"
														})
													})
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
													label: t("gitleaksPath"),
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
														value: settings.gitleaksPath === "gitleaks" ? "" : settings.gitleaksPath,
														placeholder: t("managedDefault"),
														onChange: (event) => setSettings({
															...settings,
															gitleaksPath: event.target.value || "gitleaks"
														})
													})
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
													label: t("hookTools"),
													hint: t("hookToolsHint"),
													wide: true,
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
														value: settings.hookTools.join("\n"),
														onChange: (event) => setSettings({
															...settings,
															hookTools: event.target.value.split("\n")
														})
													})
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
											label: t("legacyAuto"),
											hint: t("legacyHint"),
											value: settings.autoScan,
											onChange: (value) => setSettings({
												...settings,
												autoScan: value
											})
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "form-footer",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										className: "primary",
										type: "submit",
										children: t("saveSettings")
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Suppressions, {
					remote,
					t,
					busy,
					action,
					notify: setNotice
				})
			] });
			const renderConfirm = () => confirm && !("task" in confirm) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "card confirm-box",
				role: "alertdialog",
				"aria-label": t(confirm.kind === "removeRun" ? "deleteRun" : "deleteReport"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t(confirm.kind === "removeRun" ? "deleteRun" : "deleteReport") }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: confirm.name }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: confirm.detail }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted",
						children: t(confirm.kind === "removeRun" ? "deleteRunHint" : "deleteReportHint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "form-footer",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							className: "danger",
							disabled: busy,
							onClick: () => {
								action(async () => {
									if (confirm.kind === "removeRun") await remote.removeRun(confirm.id);
									else await remote.removeReport(confirm.id);
									setConfirm(void 0);
									setNotice(t("deleted"));
								});
							},
							children: t("confirmDelete")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							disabled: busy,
							onClick: () => setConfirm(void 0),
							children: t("cancel")
						})]
					})
				]
			}) : confirm && "task" in confirm && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "card confirm-box",
				role: "alertdialog",
				"aria-label": t(confirm.kind === "hook" ? "hookTitle" : "removeTitle"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t(confirm.kind === "hook" ? "hookTitle" : "removeTitle") }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: confirm.task.config.name }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: confirm.task.config.target }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "muted",
						children: t(confirm.kind === "hook" ? "hookHint" : "removeHint")
					}),
					confirm.kind === "hook" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
						disabled: busy,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("hookEvent"),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
										value: hookEvent,
										onChange: (event) => setHookEvent(event.target.value),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "pre-commit",
											children: t("preCommit")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "pre-push",
											children: t("prePush")
										})]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("actions"),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
										value: hookAction,
										onChange: (event) => setHookAction(event.target.value),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "install",
											children: t("hookInstall")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
											value: "remove",
											children: t("hookRemove")
										})]
									})
								}),
								hookEvent === "pre-push" && hookAction === "install" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
									label: t("base"),
									wide: true,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										value: hookBase,
										onChange: (event) => setHookBase(event.target.value),
										placeholder: "origin/main"
									})
								}) : null
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Check, {
							label: t("enforce"),
							hint: t("enforceHint"),
							value: enforce,
							onChange: setEnforce
						})]
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "form-footer",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							disabled: busy || confirm.kind === "hook" && hookEvent === "pre-push" && hookAction === "install" && !hookBase.trim(),
							className: "primary",
							onClick: () => {
								action(async () => {
									if (confirm.kind === "remove") await remote.remove(confirm.task.id, confirm.task.revision);
									else await remote.hook({
										taskId: confirm.task.id,
										revision: confirm.task.revision,
										event: hookEvent,
										action: hookAction,
										enforce,
										base: hookBase,
										confirm: true
									});
									setConfirm(void 0);
									setNotice(t(confirm.kind === "hook" ? "hookDone" : "taskSaved"));
								});
							},
							children: t(confirm.kind === "hook" ? "hookConfirm" : "confirm")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							disabled: busy,
							onClick: () => setConfirm(void 0),
							children: t("cancel")
						})]
					})
				]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "security-workbench" + (embedded ? " embedded" : ""),
				role: embedded ? "region" : "dialog",
				"aria-modal": embedded ? void 0 : true,
				"aria-label": t("title"),
				ref: panel,
				onKeyDown: (event) => {
					if (event.key === "Escape") {
						event.stopPropagation();
						if (busy) return;
						if (leave) {
							setLeave(void 0);
							return;
						}
						if (source) setSource(void 0);
						else if (report) setReport(void 0);
						else if (confirm) setConfirm(void 0);
						else if (editor) leaveEditor();
						else navigate(close);
					}
					if (!embedded && event.key === "Tab") {
						const focusable = [...panel.current?.querySelectorAll("button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,iframe") ?? []].filter((item) => item.getClientRects().length > 0);
						const first = focusable[0], last = focusable.at(-1);
						if (event.shiftKey && document.activeElement === first) {
							last?.focus();
							event.preventDefault();
						} else if (!event.shiftKey && document.activeElement === last) {
							first?.focus();
							event.preventDefault();
						}
					}
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", { children: css }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							disabled: busy,
							onClick: () => navigate(close),
							children: ["← ", t("back")]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "grow",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: t("title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "muted",
								children: t("subtitle")
							})]
						}),
						busy ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "engine-progress",
							role: "status",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "spinner",
								"aria-hidden": "true"
							}), t("working")]
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							disabled: busy,
							onClick: () => {
								action(reload);
							},
							children: t("refresh")
						})
					] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "body",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("nav", {
							"aria-label": t("title"),
							children: [
								"tasks",
								"runs",
								"reports",
								"settings"
							].map((value) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								className: tab === value ? "selected" : "",
								"aria-current": tab === value ? "page" : void 0,
								disabled: busy,
								onClick: () => navigate(() => {
									setTab(value);
									setEditor(void 0);
									setConfirm(void 0);
									setReport(void 0);
								}),
								children: [t(value), state && value !== "settings" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "nav-count",
									children: state[value].length
								}) : null]
							}, value))
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: report ? "content report-content" : "content",
							children: [
								state?.toolchains && state.toolchains.status !== "ready" && tab !== "settings" && !report ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "environment-banner",
									role: "status",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
										t(state.toolchains.status === "failed" ? "engineFailed" : "engineInstalling"),
										" · ",
										t(state.toolchains.status === "failed" ? engineErrorKey(state.toolchains.error) : enginePhaseKey(state.toolchains.phase))
									] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										onClick: () => navigate(() => {
											setTab("settings");
											setEditor(void 0);
											setConfirm(void 0);
										}),
										children: t("viewEnvironment")
									})]
								}) : null,
								pollError ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "alert",
									role: "status",
									children: [
										t("connectionLost"),
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											disabled: busy,
											onClick: () => {
												action(reload);
											},
											children: t("refresh")
										})
									]
								}) : null,
								state?.warnings.map((warning) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "alert",
									children: t(errorKey(warning))
								}, warning)),
								error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "alert error",
									role: "alert",
									children: t(errorKey(error))
								}) : null,
								notice ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "alert notice",
									role: "status",
									children: notice
								}) : null,
								!state ? error ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									role: "status",
									children: t("loading")
								}) : report ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "toolbar",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											disabled: busy,
											onClick: () => setReport(void 0),
											children: ["← ", t("closeReport")]
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "row-actions",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												disabled: busy,
												onClick: () => {
													download("html");
												},
												children: t("downloadHtml")
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												disabled: busy,
												onClick: () => {
													download("json");
												},
												children: t("downloadJson")
											})]
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "muted",
										children: t("reportHint")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReportFollowUp, {
										id: report.id,
										remote,
										t,
										busy,
										runs: state.runs,
										action,
										notify: setNotice,
										openSession,
										showRuns,
										openReport: (id) => {
											openReport(id);
										}
									}, report.id),
									source ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
										className: "source-preview",
										role: "region",
										"aria-label": t("sourcePreview"),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "toolbar",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("strong", { children: [
												source.file,
												":",
												source.line
											] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												onClick: () => setSource(void 0),
												children: t("closeSource")
											})]
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: source.content.split("\n").map((line, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: line.startsWith(source.line + ":") ? "source-highlight" : "",
											children: [line, "\n"]
										}, index)) })]
									}) : null,
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("iframe", {
										ref: frame,
										title: t("openReport"),
										srcDoc: report.html,
										sandbox: "allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
									})
								] }) : confirm ? renderConfirm() : editor ? renderEditor() : tab === "tasks" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [overview, renderTasks()] }) : tab === "runs" ? renderRuns() : tab === "reports" ? renderReports() : renderSettings()
							]
						}) })]
					}),
					leave ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "discard-overlay",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							className: "card confirm-box",
							role: "alertdialog",
							"aria-modal": "true",
							"aria-label": t("unsavedTitle"),
							onKeyDown: (event) => {
								if (event.key === "Tab") {
									const buttons = event.currentTarget.querySelectorAll("button");
									if (event.shiftKey && document.activeElement === buttons[0]) {
										buttons[1]?.focus();
										event.preventDefault();
									} else if (!event.shiftKey && document.activeElement === buttons[1]) {
										buttons[0]?.focus();
										event.preventDefault();
									}
									event.stopPropagation();
								}
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("unsavedTitle") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("unsavedHint") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "actions",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										autoFocus: true,
										onClick: () => setLeave(void 0),
										children: t("keepEditing")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										className: "danger",
										onClick: () => {
											const proceed = leave.proceed;
											setLeave(void 0);
											setSettings(state?.settings);
											proceed();
										},
										children: t("discard")
									})]
								})
							]
						})
					}) : null
				]
			});
		}
		//#endregion
		//#region src/client/index.ts
		const name = "@shamcleren/dsh-security-scan";
		const inject = [
			"slots",
			"locale",
			"connection",
			"uiWorkspace",
			"layout"
		];
		const namespace = "security.workspace";
		const panelId = "security-scan";
		function reportLinkId(href, current) {
			try {
				const url = new URL(href, current), page = new URL(current);
				return url.origin === page.origin && url.pathname === page.pathname && /^#dsh-security-report=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u.test(url.hash) ? url.hash.slice(21) : void 0;
			} catch {
				return;
			}
		}
		/** Use the host's global panel navigation; the selected conversation stays owned by DSH. */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(namespace, {
				zh,
				en
			}), "security-scan: client dictionaries");
			const t = ctx.locale.bind(namespace);
			const call = async (method, payload = {}) => {
				const result = await ctx.connection.rpc.call(SECURITY_CHANNEL, method, payload);
				if (!result.ok) throw new Error(result.error.message);
				return result.value;
			};
			const remote = {
				reportActions: async (id) => ReportActionsSchema.parse(await call("reportActions", { id })),
				repair: (id, findingIds, mode, expectedRevision) => call("repair", {
					id,
					findingIds,
					mode,
					expectedRevision
				}),
				rescan: (id) => call("rescan", { id }),
				continueRepair: (id) => call("continueRepair", { id }),
				models: async () => ModelCatalogSchema.parse(await call("models")),
				setup: () => call("setup"),
				state: async () => UiStateSchema.parse(await call("state")),
				save: (config, id, revision) => call("save", {
					config,
					...id ? {
						id,
						revision
					} : {}
				}),
				removeRun: (id) => call("removeRun", { id }),
				removeReport: (id) => call("removeReport", { id }),
				remove: (id, revision) => call("remove", {
					id,
					revision
				}),
				run: (id, revision) => call("run", {
					id,
					revision
				}),
				cancel: (id) => call("cancel", { id }),
				settings: (value) => call("settings", value),
				hook: (request) => call("hook", request),
				source: (id, file, line) => call("source", {
					id,
					file,
					line
				}),
				report: (id, format) => call("report", {
					id,
					format
				}),
				suppress: (id, findingIds, reason) => call("suppress", {
					id,
					findingIds,
					reason
				}),
				suppressions: async () => array(SuppressionSchema).parse(await call("suppressions")),
				unsuppress: (id) => call("unsuppress", { id })
			};
			let requestedReport;
			const draft = {};
			const clearDraft = () => {
				delete draft.editor;
				delete draft.settings;
				delete draft.originalEditor;
				delete draft.tab;
			};
			const listeners = /* @__PURE__ */ new Set();
			const requestReport = (id) => {
				requestedReport = id;
				for (const listener of listeners) listener();
			};
			const subscribe = (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			};
			ctx.effect(() => () => {
				requestedReport = void 0;
				listeners.clear();
				clearDraft();
			}, "security-scan: view state");
			ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
				name: "sidebar.panellist",
				id: panelId,
				order: 10,
				locale: namespace,
				label: () => t("entry")
			}, ({ size = 18 }) => (0, react.createElement)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 1.8,
				"aria-hidden": true
			}, (0, react.createElement)("path", { d: "M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6L12 3Z" }), (0, react.createElement)("path", { d: "m8 12 3 3 5-6" }))));
			function Surface() {
				const report = (0, react.useSyncExternalStore)(subscribe, () => requestedReport, () => requestedReport);
				return (0, react.createElement)(Workbench, {
					remote,
					t,
					embedded: true,
					draft,
					...report ? { requestedReport: report } : {},
					close: () => {
						clearDraft();
						requestReport(void 0);
						ctx.layout.selectPanel(null);
					},
					openSession: (id) => {
						if (!ctx.uiWorkspace) throw new Error("scan-session-unavailable");
						ctx.uiWorkspace.openSession(id);
						requestReport(void 0);
					}
				});
			}
			ctx.slots.inject("main", () => {
				const registration = ctx.slots.register({
					name: "main",
					key: panelId,
					locale: namespace
				}, Surface);
				ctx.effect(() => {
					if (typeof window === "undefined") return;
					const open = (id) => {
						requestReport(id);
						ctx.layout.selectPanel(panelId);
					};
					const onHash = () => {
						const id = reportLinkId(location.href, location.href);
						if (id) open(id);
					};
					const onClick = (event) => {
						const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
						if (!link) return;
						const id = reportLinkId(link.getAttribute("href"), location.href);
						if (id) {
							event.preventDefault();
							open(id);
						}
					};
					window.addEventListener("hashchange", onHash);
					document.addEventListener("click", onClick, true);
					onHash();
					return () => {
						window.removeEventListener("hashchange", onHash);
						document.removeEventListener("click", onClick, true);
					};
				}, "security-scan: report links");
				return registration;
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		exports.reportLinkId = reportLinkId;
		return module.exports;
	}
});

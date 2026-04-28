// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
});

// 平滑滚动
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ========== 作品分类筛选功能 ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的active状态
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 给当前按钮添加active状态
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                // 显示全部
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                // 只显示对应分类
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// 添加淡入动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ========== 作品详情弹窗 ==========
const projectDetails = {
    thesis: {
        title: '海丝文化视角下山根苔藓微景观空间设计研究',
        content: `
            <h3>📋 项目概述</h3>
            <p><strong>设计地点：</strong>浙江省温州市瓯海区茶山街道山根村</p>
            <p><strong>设计面积：</strong>约500平方米（三层建筑）</p>
            <p><strong>设计周期：</strong>2025年9月 - 2026年4月</p>
            <p><strong>指导教师：</strong>叶和生</p>
            
            <h3>🎯 设计理念</h3>
            <p>以海上丝绸之路文化为脉络，将苔藓微景观生态特性与温州地域文化相结合，打造集<strong>文化传承、生态体验、互动参与</strong>于一体的复合型文创空间。</p>
            
            <h3>🏢 三层空间布局</h3>
            <h4>一楼 · 海丝启航主题区</h4>
            <ul>
                <li><strong>接待入口：</strong>船舵造型 + 苔藓植物，营造文化迎接氛围</li>
                <li><strong>吧台区：</strong>海丝瓷器纹样融入苔藓生态墙体</li>
                <li><strong>天井生态池：</strong>挑空设计引入自然光，展现生态系统运转</li>
            </ul>
            
            <h4>二楼 · 海上商贸情境区</h4>
            <ul>
                <li><strong>苔藓手工创作区：</strong>开放式布局，体验微景观制作</li>
                <li><strong>实验分析实验室：</strong>无菌接种、环境模拟、样本展示</li>
                <li><strong>多功能研讨室：</strong>学术交流、成果展示</li>
            </ul>
            
            <h4>三楼 · 海洋生态变迁打卡区</h4>
            <ul>
                <li><strong>苔藓艺术展示区：</strong>东南亚贸易港、香料线路、陶瓷传播主题</li>
                <li><strong>网红打卡区：</strong>悬浮苔藓景观 + 镜面反射技术</li>
            </ul>
            
            <h3>💡 创新点</h3>
            <ul>
                <li>文化符号向空间语言的系统转译</li>
                <li>苔藓生态与海丝文化的深度融合</li>
                <li>沉浸式体验与互动参与的结合</li>
                <li>乡村振兴背景下的文旅融合模式</li>
            </ul>
        `
    },
    floor1: {
        title: '一楼空间 · 海丝启航',
        content: `
            <h3>🚪 功能分区</h3>
            
            <h4>接待入口区</h4>
            <p>作为空间的第一印象区，采用<strong>船舵造型</strong>作为核心视觉元素，结合苔藓植物的天然肌理，营造具有海洋文明特色的文化迎接环境。</p>
            
            <h4>吧台服务区</h4>
            <p>提取海丝瓷器装饰纹样的艺术意蕴，以<strong>苔藓生态墙体</strong>作为背景，通过材料对比强化海丝文化的深层内涵。</p>
            
            <h4>天井生态核心区</h4>
            <p>采用<strong>挑空式设计</strong>引入自然光线，上方设置苔藓微景观生态池，展现生态系统的运转过程。建筑形态受海丝沿线岛屿地貌启发，形成独特的空间体验。</p>
            
            <h3>🎨 设计亮点</h3>
            <ul>
                <li>模块化展架系统 - 灵感来源于古代海丝船只船舱构造</li>
                <li>贝壳、船锚等海洋元素装饰</li>
                <li>LED照明 + 交互屏幕展示苔藓生长过程</li>
                <li>青灰色石材地面 + 深绿色苔藓 + 赭石色木质展架</li>
            </ul>
        `
    },
    floor2: {
        title: '二楼空间 · 商贸情境',
        content: `
            <h3>🛠️ 功能分区</h3>
            
            <h4>苔藓手工创作区</h4>
            <p>采用<strong>开放式布局</strong>，配备可调节高度的工作台和嵌入式工具储存空间。墙面装饰以海丝文化为主题的手绘苔藓拼贴画，既符合手工活动需求，又通过视觉符号强化场所文化内涵。</p>
            
            <h4>实验分析实验室</h4>
            <p>分为三个功能模块：</p>
            <ul>
                <li><strong>无菌接种区：</strong>超净工作台、恒温培养箱</li>
                <li><strong>环境模拟区：</strong>智能温湿度调节系统，再现海丝沿线各地区气候</li>
                <li><strong>样本展示区：</strong>玻璃展柜集合各类苔藓标本</li>
            </ul>
            
            <h4>多功能研讨室</h4>
            <p>配备可调家具系统，支持研讨和展示两种模式。墙面采用智能电子屏和文化主题投影，桌上设置数据接口和苔藓生态景观装饰。</p>
            
            <h3>🔬 科研支持</h3>
            <p>为苔藓学研究提供全方位支持平台，同时兼顾科普教育功能。</p>
        `
    },
    floor3: {
        title: '三楼空间 · 生态打卡',
        content: `
            <h3>🎭 功能分区</h3>
            
            <h4>苔藓艺术展示区</h4>
            <p>采用分区布局和智能导航设计，分为三大主题：</p>
            <ul>
                <li><strong>东南亚贸易港口主题</strong> - 船型装置展示</li>
                <li><strong>香料贸易线路主题</strong> - 海图元素融入</li>
                <li><strong>陶瓷文化传播主题</strong> - 传统青瓷纹饰</li>
            </ul>
            
            <h4>网红打卡体验区</h4>
            <p>充分利用建筑层高优势，设置<strong>悬浮苔藓景观装置</strong>，融合镜面反射技术，借助光影变化强化苔藓材质的艺术效果，创造具备文化内涵的摄影场景。</p>
            
            <h4>生态缸展示区</h4>
            <p>以生态缸加图文资料的方式，分别展示：</p>
            <ul>
                <li>郑和下西洋时期植物传播路径</li>
                <li>瓯窑瓷器贸易路线发展脉络</li>
            </ul>
            
            <h3>📸 体验设计</h3>
            <p>通过沉浸式视觉空间和互动媒介，实现文化传播的情境化讲述。</p>
        `
    },
    ip: {
        title: '海丝苔藓IP形象设计',
        content: `
            <h3>🐸 设计灵感</h3>
            <p>IP形象灵感来源于<strong>青蛙和云</strong>的融合：</p>
            <ul>
                <li>提取青蛙的<strong>绿色</strong> - 呼应苔藓生态主题</li>
                <li>提取青蛙<strong>鼓鼓的身体</strong> - 体现可爱亲和</li>
                <li>结合<strong>苔藓生长形态</strong> - 展现自然生命力</li>
            </ul>
            
            <h3>🎨 文化元素融入</h3>
            <p>从海丝文化中提取视觉符号：</p>
            <ul>
                <li><strong>船锚</strong> - 海洋贸易象征</li>
                <li><strong>罗盘</strong> - 航海导航工具</li>
                <li><strong>青瓷纹样</strong> - 温州传统工艺</li>
            </ul>
            
            <h3>📦 应用范围</h3>
            <ul>
                <li>文创产品开发（玩偶、文具、饰品）</li>
                <li>空间导视系统设计</li>
                <li>数字媒体传播素材</li>
                <li>互动装置形象</li>
                <li>品牌周边延伸</li>
            </ul>
            
            <h3>💡 设计价值</h3>
            <p>既保证空间文化IP具有<strong>地方文化识别度</strong>，又与苔藓微景观的<strong>生态属性</strong>产生联系，形成独特的品牌记忆点。</p>
        `
    },
    color: {
        title: '空间色彩与材质系统',
        content: `
            <h3>🎨 色彩体系</h3>
            <p>基于温州山根村传统建筑特色，构建四色文化配色方案：</p>
            
            <h4>主色调</h4>
            <ul>
                <li><strong>深绿色（#2D5A4A）</strong> - 苔藓本体色，生态主题核心</li>
                <li><strong>青灰色（#5A7A8A）</strong> - 古朴瓦片，历史厚重感</li>
                <li><strong>赭石色（#8B7355）</strong> - 夯土墙面，地域特色</li>
                <li><strong>原木色</strong> - 木材质感，温暖自然</li>
            </ul>
            
            <h3>🏗️ 材质选择</h3>
            
            <h4>地面材质</h4>
            <p>老石材 + 再生木结合，石材保留原始纹理，木材采用碳化技术模仿古代船舶甲板。</p>
            
            <h4>墙面材质</h4>
            <p>青灰色石材为底色，结合深绿色苔藓、赭石色木质展架，打造历史氛围。</p>
            
            <h4>植物容器</h4>
            <p>废旧陶瓷器具、废弃渔网作为基材制作悬挂式篮筐，实现废弃物再利用。</p>
            
            <h4>苔藓养护</h4>
            <p>滴灌结合自然风化调节湿度温度，保证生态景观持续稳定发展。</p>
            
            <h3>✨ 设计目标</h3>
            <p>平衡<strong>文化遗产真实再现</strong>与<strong>生态环境可持续发展</strong>，实现实用功能与叙事表达的统一。</p>
        `
    },
    physical: {
        title: '1:20实体模型制作',
        content: `
            <h3>📐 模型规格</h3>
            <p><strong>比例：</strong>1:20</p>
            <p><strong>尺寸：</strong>约60cm × 40cm × 50cm（长×宽×高）</p>
            <p><strong>制作周期：</strong>4周</p>
            
            <h3>🔧 材料运用</h3>
            
            <h4>结构材料</h4>
            <ul>
                <li><strong>木质材料</strong> - 仿照山根村传统民居立体结构做基础支撑</li>
                <li><strong>青灰色陶土砖片</strong> - 复现地方建筑特殊风格</li>
            </ul>
            
            <h4>装饰元素</h4>
            <ul>
                <li><strong>海丝商船浮雕模型</strong> - 放置于一楼入口处</li>
                <li><strong>微型码头设施</strong> - 体现历史贸易遗址</li>
            </ul>
            
            <h4>苔藓植被层</h4>
            <ul>
                <li><strong>大灰藓</strong> - 适应当地环境的本地物种</li>
                <li><strong>白发藓</strong> - 营造丰富层次质感</li>
            </ul>
            <p>依照潮汐变化规律和功能分区进行堆砌，通过植物生长状态、水分分布营造多样化层次。</p>
            
            <h3>🎯 制作目的</h3>
            <p>将抽象设计理念转化为具体结构形式，实现建筑框架、地域文化符号和苔藓生态系统的有机融合。</p>
        `
    },
    render: {
        title: '空间效果图渲染',
        content: `
            <h3>🖼️ 效果图内容</h3>
            
            <h4>前厅效果图</h4>
            <p>展示入口接待区的整体氛围，包括船舵造型装置、苔藓生态墙、引导标识系统等。</p>
            
            <h4>客座区效果图</h4>
            <p>呈现休息交流空间的舒适度，展示家具布置、灯光设计、文化装饰细节。</p>
            
            <h4>手工区效果图</h4>
            <p>展现实践操作空间的功能性，包括工作台布局、工具储存、墙面装饰等。</p>
            
            <h4>作品展览区效果图</h4>
            <p>展示成果展示空间的视觉效果，包括展架设计、照明系统、互动装置等。</p>
            
            <h4>古船模型展示区</h4>
            <p>呈现历史文化展陈的沉浸感，结合苔藓造景营造历史氛围。</p>
            
            <h3>🎨 渲染风格</h3>
            <ul>
                <li>写实风格，强调材质真实感</li>
                <li>自然光线模拟，体现时间变化</li>
                <li>人物尺度参考，增强空间感知</li>
                <li>文化元素突出，强化主题表达</li>
            </ul>
            
            <h3>💻 制作软件</h3>
            <p>SketchUp / 3ds Max + V-Ray / Enscape / Lumion</p>
        `
    }
};

function showDetail(projectId) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectDetails[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-body-content">
                ${project.content}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeDetail() {
    const modal = document.getElementById('detailModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeDetail();
    }
}

// ESC键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetail();
    }
});

// 页面加载动画
window.addEventListener('load', () => {
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

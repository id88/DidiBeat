// 页面切换函数
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示指定页面
    document.getElementById(pageId).classList.add('active');
    
    // 更新底部导航栏状态
    updateNavBar(pageId);
}

// 更新底部导航栏状态
function updateNavBar(pageId) {
    // 重置所有导航项
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 根据当前页面激活对应的导航项
    if (pageId.startsWith('home')) {
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.querySelector('span').textContent === '首页') {
                item.classList.add('active');
            }
        });
    } else if (pageId === 'order-list' || pageId === 'order-tracking' || pageId === 'order-detail' || pageId === 'order-page') {
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.querySelector('span').textContent === '订单') {
                item.classList.add('active');
            }
        });
    } else if (pageId === 'profile') {
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.querySelector('span').textContent === '我的') {
                item.classList.add('active');
            }
        });
    }
}

// 切换标签页
function switchTab(tab, pageId) {
    // 获取所有标签
    const tabs = tab.parentElement.querySelectorAll('.tab');
    
    // 重置所有标签
    tabs.forEach(t => {
        t.classList.remove('active');
    });
    
    // 激活当前标签
    tab.classList.add('active');
    
    // 显示对应页面
    showPage(pageId);
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 添加服务类型选择事件
    document.querySelectorAll('.service-type .option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.service-type .option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 添加时间选择事件
    document.querySelectorAll('.time-select .option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.time-select .option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 添加支付方式选择事件
    document.querySelectorAll('.payment-options .option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.payment-options .option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 添加评价标签选择事件
    document.querySelectorAll('.rating-tags .tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 添加小费选择事件
    document.querySelectorAll('.tip-options .tip').forEach(tip => {
        tip.addEventListener('click', function() {
            document.querySelectorAll('.tip-options .tip').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 添加星级评分事件
    document.querySelectorAll('.star-rating i').forEach((star, index) => {
        star.addEventListener('click', function() {
            const stars = document.querySelectorAll('.star-rating i');
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });
    });
    
    // 添加人数加减事件
    const minusBtn = document.querySelector('.counter .minus');
    const plusBtn = document.querySelector('.counter .plus');
    const countSpan = document.querySelector('.counter span');
    
    minusBtn.addEventListener('click', function() {
        let count = parseInt(countSpan.textContent);
        if (count > 1) {
            countSpan.textContent = count - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count + 1;
    });
    
    // 添加角色切换事件
    const switchToggle = document.querySelector('.switch-toggle');
    switchToggle.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}); 
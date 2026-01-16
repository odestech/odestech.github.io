---
title: "首页"
date: 2026-01-14
draft: false
layout: index # 告诉 Hinode 这是一个模块化的首页

modules:
  - type: hero
    data:
      title: "Shanghai Odes Technology" # 这里改你的公司大标题
      description: "专注于进出口贸易与技术解决方案" # 这里改副标题
      
      # 这里配置右侧的图片 (要把你的图片放到 static/images/ 下)
      image: 
        src: "/images/banner.jpg" # 如果暂时没图，可以先删掉这一行
        
      # 这里就是你要修改的按钮
      buttons:
        - title: "了解我们"        # 按钮文字
          url: "/about"          # <--- 这里修改为你想要的跳转路径
          icon: "info-circle"    # 按钮上的小图标
          style: "primary"       # 这里会自动变成你的克莱因蓝
        - title: "Learn More"
          url: "/en/about"
        
        - title: "联系合作"        # 第二个按钮
          url: "/contact"
          style: "outline-primary" # 镂空的蓝色边框风格
---

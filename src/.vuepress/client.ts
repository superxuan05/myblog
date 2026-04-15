import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

// 手动添加 live2d-widget 脚本
if (typeof window !== "undefined") {
  // 创建并添加 live2d-widget 脚本
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js";
  script.async = true;
  
  // 脚本加载完成后初始化
  script.onload = function() {
    // 初始化配置
    window.L2Dwidget.init({
      model: {
        // 使用哪个模型
        jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
        // 也可以使用其他模型
        // jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
        // jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
      },
      display: {
        position: "right", // 看板娘的位置
        width: 150, // 看板娘的宽度
        height: 300, // 看板娘的高度
        hOffset: 0, // 水平偏移
        vOffset: -20, // 垂直偏移
      },
      mobile: {
        show: true, // 是否在移动设备上显示
        scale: 0.8, // 移动设备上的缩放比例
      },
      react: {
        opacityDefault: 0.8, // 默认不透明度
        opacityOnHover: 0.9, // 鼠标悬停时的不透明度
      },
    });
  };
  
  document.head.appendChild(script);
  
  // 添加 APlayer 样式
  const aplayerStyle = document.createElement('link');
  aplayerStyle.rel = 'stylesheet';
  aplayerStyle.href = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css';
  document.head.appendChild(aplayerStyle);
  
  // 添加自定义样式，美化播放器
  const customStyle = document.createElement('style');
  customStyle.textContent = `
    #aplayer {
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    #aplayer:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }
    .aplayer-lrc {
      font-size: 13px;
      line-height: 1.6;
      color: #333;
      text-align: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 0 0 12px 12px;
    }
    .aplayer-pic {
      border-radius: 12px 0 0 12px;
      width: 80px !important;
      height: 80px !important;
    }
    .aplayer-info {
      border-radius: 0 12px 12px 0;
      padding: 12px;
    }
    .aplayer-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .aplayer-author {
      font-size: 12px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .aplayer-bar-wrap {
      margin: 10px 0;
    }
    .aplayer-bar {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
    }
    .aplayer-loaded {
      background: #c0c0c0;
    }
    .aplayer-played {
      background: #2196f3;
      border-radius: 2px;
    }
    .aplayer-volume-bar-wrap {
      width: 60px;
    }
    .aplayer-volume-bar {
      height: 4px;
      border-radius: 2px;
    }
    .aplayer-button {
      transition: all 0.2s ease;
    }
    .aplayer-button:hover {
      transform: scale(1.1);
    }
    .aplayer-list {
      border-radius: 0 0 12px 12px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }
    .aplayer-list li {
      padding: 8px 12px;
      transition: all 0.2s ease;
    }
    .aplayer-list li:hover {
      background: rgba(33, 150, 243, 0.1);
    }
    .aplayer-list li.aplayer-list-light {
      background: rgba(33, 150, 243, 0.2);
    }
    @media (max-width: 768px) {
      #aplayer {
        width: 280px !important;
        bottom: 20px !important;
        left: 20px !important;
      }
      .aplayer-pic {
        width: 60px !important;
        height: 60px !important;
      }
    }
  `;
  document.head.appendChild(customStyle);
  
  // 添加 APlayer 脚本
  const aplayerScript = document.createElement('script');
  aplayerScript.src = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js';
  aplayerScript.async = true;
  
  // 脚本加载完成后初始化 APlayer
  aplayerScript.onload = function() {
    // 等待页面加载完成
    window.onload = function() {
      // 创建播放器容器
      const playerContainer = document.createElement('div');
      playerContainer.id = 'aplayer';
      playerContainer.style.position = 'fixed';
      playerContainer.style.bottom = '30px';
      playerContainer.style.left = '30px';
      playerContainer.style.zIndex = '9999';
      playerContainer.style.width = '340px';
      playerContainer.style.minHeight = '120px';
      document.body.appendChild(playerContainer);
      
      // 自动扫描音乐文件夹的函数
      async function scanMusicFolder() {
        try {
          // 直接返回已知的音乐文件，添加更多歌曲
          const musicFiles = [
            '周杰伦 - 青花瓷.flac',
            '周杰伦 - 晴天.flac',
            '周杰伦 - 七里香.flac',
            'Beyond - 海阔天空.flac',
            '陈奕迅 - 浮夸.flac',
            '林俊杰 - 江南.flac',
            'Taylor Swift - Love Story.flac',
            'Ed Sheeran - Shape of You.flac',
            '邓紫棋 - 光年之外.flac',
            '五月天 - 突然好想你.flac'
          ];
          
          // 生成音频列表
          const audioList = musicFiles.map(file => {
            // 从文件名提取歌曲名和艺术家
            let name = file.replace(/\.(mp3|flac|wav|ogg)$/, '');
            let artist = 'Unknown';
            
            // 尝试从文件名中提取艺术家和歌曲名（格式：艺术家 - 歌曲名.flac）
            const match = name.match(/^(.*?)\s*[-\s]+\s*(.*)$/);
            if (match) {
              artist = match[1].trim();
              name = match[2].trim();
            }
            
            // 为不同歌曲设置不同的封面
            let cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`; // 默认封面
            if (file.includes('青花瓷')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('晴天')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('七里香')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('海阔天空')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('浮夸')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('江南')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('Love Story')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('Shape of You')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('光年之外')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            } else if (file.includes('突然好想你')) {
              cover = `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg`;
            }
            
            // 优化歌词格式，确保一行一行显示
            let lrc = '';
            if (file.includes('青花瓷')) {
              lrc = `[00:00.00] 青花瓷 - 周杰伦
[00:10.00] 素胚勾勒出青花笔锋浓转淡
[00:15.00] 瓶身描绘的牡丹一如你初妆
[00:20.00] 冉冉檀香透过窗心事我了然
[00:25.00] 宣纸上走笔至此搁一半
[00:30.00] 釉色渲染仕女图韵味被私藏
[00:35.00] 而你嫣然的一笑如含苞待放
[00:40.00] 你的美一缕飘散
[00:45.00] 去到我去不了的地方`;
            } else if (file.includes('晴天')) {
              lrc = `[00:00.00] 晴天 - 周杰伦
[00:10.00] 故事的小黄花
[00:15.00] 从出生那年就飘着
[00:20.00] 童年的荡秋千
[00:25.00] 随记忆一直晃到现在`;
            } else if (file.includes('海阔天空')) {
              lrc = `[00:00.00] 海阔天空 - Beyond
[00:10.00] 今天我寒夜里看雪飘过
[00:15.00] 怀著冷却了的心窝飘远方
[00:20.00] 风雨里追赶
[00:25.00] 雾里分不清影踪`;
            }
            
            return {
              name: name,
              artist: artist,
              url: `/myblog/music/${encodeURIComponent(file)}`,
              cover: cover,
              lrc: lrc
            };
          });
          
          console.log('Music files:', audioList);
          return audioList;
        } catch (error) {
          // 如果发生错误，返回空列表
          console.error('Error scanning music folder:', error);
          return [];
        }
      }
      
      // 提取 HTML 中的文件名
      function extractFileNamesFromHtml(html) {
        const fileNames = [];
        // 优化正则表达式，支持包含中文字符和空格的文件名
        const regex = /<a\s+href="([^"<>]+\.(mp3|flac|wav|ogg))"/gi;
        let match;
        
        while ((match = regex.exec(html)) !== null) {
          const fileName = match[1];
          // 只获取文件名，不包含路径
          const justFileName = decodeURIComponent(fileName.split('/').pop());
          if (justFileName) {
            fileNames.push(justFileName);
          }
        }
        
        return fileNames;
      }
      
      // 默认音乐列表
      function getDefaultMusicList() {
        const defaultFiles = [
          'haikuotiankong.mp3',
          'qifengle.mp3',
          'shapeofyou.mp3',
          'guangnianzhiwai.mp3',
          'cityofstars.mp3'
        ];
        
        return defaultFiles.map(file => {
          let name = file.replace(/\.(mp3|flac|wav|ogg)$/, '');
          let artist = 'Unknown';
          
          if (name === 'haikuotiankong') {
            name = '海阔天空';
            artist = 'Beyond';
          } else if (name === 'qifengle') {
            name = '起风了';
            artist = '买辣椒也用券';
          } else if (name === 'shapeofyou') {
            name = 'Shape of You';
            artist = 'Ed Sheeran';
          } else if (name === 'guangnianzhiwai') {
            name = '光年之外';
            artist = '邓紫棋';
          } else if (name === 'cityofstars') {
            name = 'City of Stars';
            artist = 'Ryan Gosling, Emma Stone';
          }
          
          return {
            name: name,
            artist: artist,
            url: `/myblog/music/${file}`,
            cover: `https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg` // 默认封面
          };
        });
      }
      
      // 初始化 APlayer
      async function initPlayer() {
        const audioList = await scanMusicFolder();
        const ap = new APlayer({
          element: document.getElementById('aplayer'),
          autoplay: false,
          mutex: true,
          volume: 0.6,
          listFolded: true,
          listMaxHeight: 400,
          lrcType: 1, // 启用歌词功能
          theme: '#2196f3',
          loop: 'all', // 循环播放所有歌曲
          order: 'random', // 随机播放
          preload: 'auto', // 自动预加载
          audio: audioList // 使用自动扫描的音乐列表
        });
        
        // 添加额外功能
        // 点击播放器展开/收起播放列表
        const playerElement = document.getElementById('aplayer');
        if (playerElement) {
          playerElement.addEventListener('click', function(e) {
            if (!e.target.closest('.aplayer-list') && !e.target.closest('.aplayer-button')) {
              const listElement = playerElement.querySelector('.aplayer-list');
              if (listElement) {
                if (listElement.style.display === 'none' || listElement.style.display === '') {
                  listElement.style.display = 'block';
                } else {
                  listElement.style.display = 'none';
                }
              }
            }
          });
        }
        
        // 添加播放模式切换功能
        let currentMode = 'random';
        const modeButton = document.createElement('button');
        modeButton.innerHTML = '🔄';
        modeButton.style.position = 'absolute';
        modeButton.style.top = '10px';
        modeButton.style.right = '10px';
        modeButton.style.background = 'transparent';
        modeButton.style.border = 'none';
        modeButton.style.fontSize = '16px';
        modeButton.style.cursor = 'pointer';
        modeButton.style.zIndex = '10000';
        modeButton.title = '切换播放模式';
        playerElement.appendChild(modeButton);
        
        modeButton.addEventListener('click', function() {
          if (currentMode === 'random') {
            currentMode = 'single';
            ap.setOption('order', 'single');
            modeButton.innerHTML = '🔂';
            modeButton.title = '单曲循环';
          } else if (currentMode === 'single') {
            currentMode = 'list';
            ap.setOption('order', 'list');
            modeButton.innerHTML = '➡️';
            modeButton.title = '列表顺序播放';
          } else {
            currentMode = 'random';
            ap.setOption('order', 'random');
            modeButton.innerHTML = '🔄';
            modeButton.title = '随机播放';
          }
        });
        
        // 添加音量控制优化
        const volumeButton = document.createElement('button');
        volumeButton.innerHTML = '🔊';
        volumeButton.style.position = 'absolute';
        volumeButton.style.top = '10px';
        volumeButton.style.right = '40px';
        volumeButton.style.background = 'transparent';
        volumeButton.style.border = 'none';
        volumeButton.style.fontSize = '16px';
        volumeButton.style.cursor = 'pointer';
        volumeButton.style.zIndex = '10000';
        volumeButton.title = '静音/取消静音';
        playerElement.appendChild(volumeButton);
        
        let isMuted = false;
        let lastVolume = 0.6;
        volumeButton.addEventListener('click', function() {
          if (isMuted) {
            ap.volume(lastVolume);
            volumeButton.innerHTML = '🔊';
            isMuted = false;
          } else {
            lastVolume = ap.volume;
            ap.volume(0);
            volumeButton.innerHTML = '🔇';
            isMuted = true;
          }
        });
        
        // 添加播放状态变化监听
        ap.on('play', function() {
          console.log('开始播放');
        });
        
        ap.on('pause', function() {
          console.log('暂停播放');
        });
        
        ap.on('ended', function() {
          console.log('播放结束');
        });
        
        // 添加歌曲切换监听
        ap.on('listswitch', function() {
          console.log('切换歌曲');
        });
        
        // 添加音量变化监听
        ap.on('volumechange', function() {
          console.log('音量变化:', ap.volume);
        });
      }
      
      // 调用初始化函数
      initPlayer();
    };
  };
  
  document.head.appendChild(aplayerScript);
}

export default defineClientConfig({
  //...

layouts: {
    // ...
    Blog,
},
});
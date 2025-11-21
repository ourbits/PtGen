const fs = require('fs');
const path = require('path');

const scriptDir = __dirname; 

/**
 * 主函数：整理JSON文件
 * @param {string} targetDir - 目标文件夹路径
 */
async function organizeJsonFiles(targetDir) {
  try {
    console.log(`开始扫描文件夹: ${targetDir}`);
    
    // 验证目标文件夹是否存在
    if (!fs.existsSync(targetDir)) {
      console.error(`错误: 文件夹不存在 - ${targetDir}`);
      return;
    }

    // 读取文件夹中的所有文件
    const files = fs.readdirSync(targetDir);
    
    // 筛选出JSON文件
    const jsonFiles = files.filter(file => {
      const fileExt = path.extname(file).toLowerCase();
      return fileExt === '.json';
    });

    console.log(`找到 ${jsonFiles.length} 个JSON文件，开始整理...`);

    // 用于跟踪创建的文件夹
    const createdFolders = new Set();
    
    // 批量处理文件移动
    let movedCount = 0;
    for (const file of jsonFiles) {
      try {
        // 获取文件名的前四位字符（对imdb移除前面的tt）
        const folderName = file.replace(/^tt/, '').substring(0, 4);
        
        // 创建子文件夹路径
        const subFolderPath = path.join(targetDir, folderName);
        
        // 如果文件夹不存在则创建
        if (!createdFolders.has(folderName)) {
          if (!fs.existsSync(subFolderPath)) {
            fs.mkdirSync(subFolderPath);
            console.log(`创建文件夹: ${folderName}`);
          }
          createdFolders.add(folderName);
        }
        
        // 构建源文件路径和目标文件路径
        const sourcePath = path.join(targetDir, file);
        const targetPath = path.join(subFolderPath, file);
        
        // 移动文件
        fs.renameSync(sourcePath, targetPath);
        movedCount++;
        
        // 每移动1000个文件输出一次进度
        if (movedCount % 1000 === 0) {
          console.log(`已移动 ${movedCount} 个文件`);
        }
      } catch (error) {
        console.error(`移动文件 ${file} 时出错:`, error.message);
      }
    }

    console.log(`整理完成! 共移动了 ${movedCount} 个JSON文件`);
    console.log(`创建了 ${createdFolders.size} 个分类文件夹`);
    
  } catch (error) {
    console.error('整理过程中发生错误:', error.message);
  }
}

// 执行整理操作
for (const targetDir of ['douban','douban_celebrity','imdb']) {
    organizeJsonFiles(path.resolve(scriptDir, targetDir));
}
 

const fs = require('fs');
const path = require('path');

// Função para corrigir animações em um arquivo
function fixAnimationsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Adicionar import se não existir
  if (!content.includes('useOptimizedAnimation')) {
    const importLine = "import { useOptimizedAnimation, optimizedVariants } from '../../hooks/useOptimizedAnimation';";
    
    // Encontrar a linha de import do framer-motion
    if (content.includes("import { motion }")) {
      content = content.replace(
        "import { motion } from 'framer-motion';",
        "import { motion } from 'framer-motion';\n" + importLine
      );
    }
  }
  
  // Padrões problemáticos comuns
  const patterns = [
    // Padrão 1: whileInView com opacity e y
    {
      search: /initial=\{\{\s*opacity:\s*0,\s*y:\s*\d+\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*transition=\{\{\s*duration:\s*[\d.]+(?:,\s*delay:\s*[\d.]+)?\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g,
      replace: '{...optimizedVariants.slideUp}'
    },
    
    // Padrão 2: whileInView com opacity e x
    {
      search: /initial=\{\{\s*opacity:\s*0,\s*x:\s*-?\d+\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}\s*transition=\{\{\s*duration:\s*[\d.]+(?:,\s*delay:\s*[\d.]+)?\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g,
      replace: '{...optimizedVariants.slideLeft}'
    },
    
    // Padrão 3: apenas opacity
    {
      search: /initial=\{\{\s*opacity:\s*0\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1\s*\}\}\s*transition=\{\{\s*duration:\s*[\d.]+(?:,\s*delay:\s*[\d.]+)?\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g,
      replace: '{...optimizedVariants.fadeIn}'
    }
  ];
  
  patterns.forEach(pattern => {
    content = content.replace(pattern.search, pattern.replace);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed animations in: ${filePath}`);
}

// Função recursiva para encontrar arquivos .tsx
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Executar correção
const componentsDir = './src/react-app/components';
const tsxFiles = findTsxFiles(componentsDir);

console.log(`Found ${tsxFiles.length} .tsx files`);
tsxFiles.forEach(fixAnimationsInFile);
console.log('Animation fixes completed!');
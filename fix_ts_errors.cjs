const fs = require('fs');
const path = require('path');

const replaceInFile = (file, search, replace) => {
  const filepath = path.join(__dirname, 'src', file);
  if (!fs.existsSync(filepath)) {
    console.log(`File not found: ${filepath}`);
    return;
  }
  let content = fs.readFileSync(filepath, 'utf8');
  if (typeof search === 'string') {
    content = content.replace(search, replace);
  } else {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(filepath, content);
  console.log(`Updated ${file}`);
};

replaceInFile('App.tsx', "import { Collections } from './pages/Collections';\n", "");
replaceInFile('components/dashboard/StudyChart.tsx', "formatter={(value: number) =>", "formatter={(value: any) =>");
replaceInFile('components/forum/MarkdownText.tsx', "import React from 'react';\n", "");
replaceInFile('components/home/CollectionsSection.tsx', "import { CTAButton } from '../ui/CTAButton';\n", "");
replaceInFile('components/payment/CinetPayMockModal.tsx', "import { useState, useEffect }", "import { useState }");
replaceInFile('components/payment/CinetPayMockModal.tsx', "const { theme } = useTheme();", "useTheme();"); // It might be const { theme } = useTheme(); -> we can just remove `theme, ` if it's there
replaceInFile('components/payment/CinetPayMockModal.tsx', "const { theme } = useTheme();", "const {} = useTheme();");
replaceInFile('pages/CollectionDetails.tsx', "import { CollectionCard } from '../components/ui/CollectionCard';\n", "");
replaceInFile('pages/dashboard/DashboardBoutique.tsx', ", ChevronRight", "");
replaceInFile('pages/dashboard/Overview.tsx', "import { fireConfetti } from '../../utils/confetti';\n", "");
replaceInFile('pages/dashboard/Profile.tsx', "USER_LEVELS,", "");
replaceInFile('pages/dashboard/Profile.tsx', ", USER_LEVELS", "");
replaceInFile('pages/dashboard/StarterPack.tsx', "import { useState } from 'react';\n", "");
replaceInFile('pages/dashboard/StarterPack.tsx', ", BookOpen", "");
replaceInFile('pages/forum/ForumHome.tsx', "import { XP } from '../../constants/xp';\n", "");
replaceInFile('pages/forum/ForumHome.tsx', "disc.tags.map(tag =>", "disc.tags.map((tag: any) =>");
replaceInFile('pages/forum/ForumThread.tsx', "import { User } from 'lucide-react';\n", "");
replaceInFile('pages/forum/ForumThread.tsx', "hasActionBeenRewarded,", "");
replaceInFile('pages/forum/ForumThread.tsx', ", hasActionBeenRewarded", "");
replaceInFile('types/index.ts', "export type { CourseTome }", "export type {}");

console.log("Done");

const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const n2 = content.match(/<!-- Slide 2: \+257 Contenidos.*?<div class="timeline-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
const n3 = content.match(/<!-- Slide 3: ROAS.*?<div class="timeline-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
const n4 = content.match(/<!-- Slide 4: \+75\.000.*?<div class="timeline-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);

if (!n2 || !n3 || !n4) {
    console.error("Could not find nodes");
    process.exit(1);
}

const node2Html = '\n          <!-- Node 2: +257 Contenidos -->\n          <div class="timeline-item" data-node="2">\n' + n2[1] + '\n          </div>\n';
const node3Html = '\n          <!-- Node 3: ROAS x5.41 -->\n          <div class="timeline-item" data-node="3">\n' + n3[1] + '\n          </div>\n';
const node4Html = '\n          <!-- Node 4: +75.000 Comunidad -->\n          <div class="timeline-item" data-node="4">\n' + n4[1] + '\n          </div>\n';

const listEndIdx = content.indexOf('        </div>\n      </div>\n    </div>\n\n    <!-- Escenario Horizontal');

if (listEndIdx === -1) {
    console.error("Could not find timeline-list end");
    process.exit(1);
}

const casesIdx = content.indexOf('  <!-- 🚀 3. MAYORES');
if (casesIdx === -1) {
    console.error("Could not find cases section");
    process.exit(1);
}

let newContent = content.substring(0, listEndIdx) + node2Html + node3Html + node4Html + '\n        </div>\n      </div>\n    </div>\n\n' + content.substring(casesIdx);

fs.writeFileSync('index.html', newContent, 'utf-8');
console.log("Updated index.html successfully");

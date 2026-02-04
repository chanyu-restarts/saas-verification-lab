const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'src/content/reviews');
const files = fs.readdirSync(reviewsDir).filter(f => f.endsWith('.ts'));

let report = '--- AUDIT REPORT ---\n';

files.forEach(file => {
    const content = fs.readFileSync(path.join(reviewsDir, file), 'utf8');

    // Extract Verdict Score
    const verdictMatch = content.match(/verdict:\s*\{[^}]*score:\s*([\d.]+)/);
    if (!verdictMatch) return;
    const verdictScore = parseFloat(verdictMatch[1]);

    // Extract Radar Data
    const radarBlockMatch = content.match(/radarData:\s*\[([\s\S]*?)\]/);
    if (!radarBlockMatch) return;

    // Extract individual scores from the block
    const radarContent = radarBlockMatch[1];
    const scoreMatches = [...radarContent.matchAll(/score:\s*([\d.]+)/g)];
    const scores = scoreMatches.map(m => parseFloat(m[1]));

    if (scores.length === 0) return;

    const allLow = scores.every(s => s <= 5.0);

    if (verdictScore >= 8.0 && allLow) {
        report += `[FIX REQUIRED] ${file}\n`;
        report += `  Verdict: ${verdictScore}\n`;
        report += `  Radar Scores: ${scores.join(', ')}\n`;

        // Calculate new scores for log
        const newScores = scores.map(s => s * 2);
        report += `  New Scores: ${newScores.join(', ')}\n`;
    }

    // Check Affiliate Link
    const affMatch = content.match(/affiliateLinks:\s*\[\s*\{\s*url:\s*"([^"]*)"/);
    if (affMatch) {
        const url = affMatch[1];
        try {
            const urlObj = new URL(url);
            if (urlObj.pathname === '/' && urlObj.search === '') {
                report += `[URL WARNING] ${file}: ${url}\n`;
            }
        } catch (e) { }
    }
});

fs.writeFileSync('audit_log.txt', report);
console.log('Audit complete. Check audit_log.txt');

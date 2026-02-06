import * as path from 'node:path';
import * as fs from 'node:fs';

// Map common queries to skill file names
const QUERY_EXPANSIONS: Record<string, string[]> = {
    'website': ['html', 'css', 'javascript', 'design'],
    'web': ['html', 'css', 'javascript', 'design'],
    'webpage': ['html', 'css', 'javascript', 'design'],
    'frontend': ['html', 'css', 'javascript', 'design'],
    'ui': ['html', 'css', 'javascript', 'design'],
    'ecommerce': ['html', 'css', 'javascript', 'design'],
    'landing': ['html', 'css', 'javascript', 'design'],
    'page': ['html', 'css', 'javascript', 'design'],
};

function skillFinder(query: string): string {
    console.log(`[skillFinder] Called with query: "${query}"`);

    const skillsDir = path.join(process.cwd(), 'src', 'skills');

    if (!fs.existsSync(skillsDir)) {
        console.warn(`[skillFinder] Skills directory not found at: ${skillsDir}`);
        return "Skills directory not found.";
    }

    // Expand query if it's a common term
    const lowerQuery = query.toLowerCase().trim();
    const expandedQueries = QUERY_EXPANSIONS[lowerQuery] || [lowerQuery];

    console.log(`[skillFinder] Expanded queries: ${expandedQueries.join(', ')}`);

    let skills = fs.readdirSync(skillsDir);
    let matchedSkills = skills.filter((skill) => {
        const skillLower = skill.toLowerCase();
        return expandedQueries.some(q => skillLower.includes(q)) && skill.endsWith('.md');
    }).map(skill => path.join(skillsDir, skill));

    console.log(`[skillFinder] Found ${matchedSkills.length} matching skills`);

    if (matchedSkills.length === 0) {
        return `No skills found for "${query}". Available skills: ${skills.filter(s => s.endsWith('.md')).join(', ')}`;
    }

    let results = matchedSkills.map(filepath => {
        return {
            name: path.basename(filepath),
            content: fs.readFileSync(filepath, "utf-8")
        };
    });

    return JSON.stringify(results);
}

export { skillFinder };